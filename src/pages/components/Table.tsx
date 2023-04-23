import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { useSession } from "next-auth/react";

import { IconPlus } from "@tabler/icons-react";

import Heading from "./common/Headings";
import ProtectedCard from "./common/ProtectedCard";
const EditModal = dynamic(() => import("./EditModal"), {
  ssr: false,
});
import Modal from "./Modal";

interface TableProps {
  title: string;
  tableHead: TableHeadProps[];
}

interface TableHeadProps {
  columnName: string;
}

interface TableBodyProps {
  name: string;
  amount: number;
  month: number;
  year: number;
  user: string;
}

function decimalPlaces(num: any) {
  if (num) {
    return parseInt(num).toFixed(2);
  }
  return parseInt("0").toFixed(2);
}

function getMonthlyTotal(data: TableBodyProps[], month: number) {
  const total = data
    .filter((item) => item.month === month)
    .reduce((acc, item) => {
      return acc + item.amount;
    }, 0);
  return total;
}

function getTotal(data: TableBodyProps[]) {
  const total = data.reduce((acc, item) => {
    return acc + item.amount;
  }, 0);
  return decimalPlaces(total);
}

function sortMonthlyData(a: TableBodyProps, b: TableBodyProps) {
  if (a.year < b.year) return -1;
  if (a.year > b.year) return 1;
  if (a.month < b.month) return -1;
  if (a.month > b.month) return 1;
  return 0;
}

export default function Table({ title, tableHead }: TableProps) {
  const { data: session, status } = useSession();

  const [modalShow, setModalShow] = useState(false);
  const [editModalShow, setEditModalShow] = useState(false);
  const [item, setItem] = useState(null);

  const tableRows: any[] = [];
  const [monthlyIncomes, setMonthlyIncomes] = useState<TableBodyProps[]>([]);
  const [monthlyExpenses, setMonthlyExpenses] = useState<TableBodyProps[]>([]);

  // @ts-expect-error
  const user = session?.user?.id;

  useEffect(() => {
    const data = async () => {
      Promise.all([
        fetch(`/api/income/getAll/${user}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }),
        fetch(`/api/expense/getAll/${user}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }),
      ])
        .then((responses) => Promise.all(responses.map((res) => res.json())))
        .then((data) => {
          setMonthlyIncomes(data[0]);
          setMonthlyExpenses(data[1]);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    data();
  }, [user]);

  const showEditModal = (itemInfo: any) => {
    setItem(itemInfo);
    setEditModalShow(true);
  };

  const hideEditModal = () => {
    setEditModalShow(false);
  };

  const showModal = () => {
    setModalShow(true);
  };

  const hideModal = () => {
    setModalShow(false);
  };

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  if (title === "Dashboard") {
    const usedDates: any = {};

    monthlyIncomes.forEach((data) => {
      if (!usedDates[`${data.month}-${data.year}`]) {
        usedDates[`${data.month}-${data.year}`] = {
          income: Number(data.amount),
          expense: 0,
        };
      } else {
        usedDates[`${data.month}-${data.year}`].income += Number(data.amount);
      }
    });

    monthlyExpenses.forEach((data) => {
      if (!usedDates[`${data.month}-${data.year}`]) {
        usedDates[`${data.month}-${data.year}`] = {
          income: 0,
          expense: Number(data.amount),
        };
      } else {
        usedDates[`${data.month}-${data.year}`].expense += Number(data.amount);
      }
    });

    const sortedDates = Object.keys(usedDates).sort((a, b) => {
      const [aMonth, aYear] = a.split("-");
      const [bMonth, bYear] = b.split("-");
      if (aYear < bYear) return -1;
      if (aYear > bYear) return 1;
      if (aMonth < bMonth) return -1;
      if (aMonth > bMonth) return 1;
      return 0;
    });

    sortedDates.forEach((data, i) => {
      const dateIncome = usedDates[data].income;
      const dateExpense = usedDates[data].expense;
      const remained = dateIncome - dateExpense;

      tableRows.push(
        <tr key={i} className="border-b border-gray-200">
          <td className="px-2 py-3 text-center">
            {months[Number(data.split("-")[0])]} {data.split("-")[1]}
          </td>
          <td className="px-2 py-3 text-center bg-green-100">
            ${decimalPlaces(dateIncome)}
          </td>
          <td className="px-2 py-3 text-center bg-red-100">
            ${decimalPlaces(dateExpense)}
          </td>
          <td className="px-2 py-3 text-center">
            {remained < 0 ? (
              <span className="text-red-500">
                -$ {decimalPlaces(-remained)}
              </span>
            ) : (
              <span className="text-green-500">
                $ {decimalPlaces(remained)}
              </span>
            )}
          </td>
        </tr>
      );
    });
  }

    if (title === "Income" || title === "Expense") {
        const data = title === "Income" ? monthlyIncomes : monthlyExpenses;

        data.sort(sortMonthlyData);

        data.forEach((item, index) => {
            tableRows.push(
                <tr key={index} className="border-b border-gray-200">
                    <td className="px-2 py-3">
                        {months[item.month-1]} {item.year}
                    </td>
                    <td className="px-2 py-3">
                        {item.name}
                    </td>
                    <td className="px-2 py-3">
                        ${decimalPlaces(item.amount)}
                    </td>
                    <td className="px-2 py-3">
                        <button
                            className="text-indigo-600 hover:text-indigo-900 bg-indigo-100 hover:bg-indigo-200 p-2 rounded-md border border-indigo-200 md:px-4"
                            onClick={() => showEditModal(item)}
                        >
                            Edit
                        </button>
                    </td>
                </tr>
            );
        });
    }

  const renderTableHead = () => {
    const updatedTableHead = [{ columnName: "Date" }, ...tableHead];
    if (title === "Income" || title === "Expense") {
        updatedTableHead.push({ columnName: "" });
    }

    return updatedTableHead.map((item, index) => {
      return (
        <th
          key={index}
          className="px-3 md:px-6 lg:px-12 py-3 border-y-2 border-gray-300 text-sm"
        >
          {item.columnName}
        </th>
      );
    });
  };

  return (
    <>
      {modalShow ? (
        <Modal hideModal={hideModal} modalType={"Income"} user={user} />
      ) : null}
      {editModalShow ? (
        <EditModal
          hideEditModal={hideEditModal}
          modalType={"Income"}
          item={item}
        />
      ) : null}
      <ProtectedCard>
        <table className="text-sm text-center text-gray-500 m-auto w-full">
          {title !== "Dashboard" ? (
            <caption>
              <div className="flex justify-end">
                <button
                  className="p-1 text-base text-white bg-indigo-600 hover:bg-indigo-700 border rounded-2xl focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  type="button"
                  onClick={showModal}
                >
                  <IconPlus className="h-5 w-5" />
                </button>
              </div>
              <div className="-mt-4">
                <Heading level={1} color={"indigo-600"}>
                  {title}
                </Heading>
              </div>
            </caption>
          ) : (
            <caption>
              <Heading level={1} color={"indigo-600"}>
                {title}
              </Heading>
            </caption>
          )}
          <thead className="text-gray-700 uppercase bg-grey-100">
            <tr className="border-b-2 border-gray-400 w-fit">
              {renderTableHead()}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-300">
            {tableRows.length === 0 ? (
              <tr className="border-b border-gray-200">
                <td className="px-2 py-3 text-center" colSpan={4}>
                  No data to display
                </td>
              </tr>
            ) : (
              tableRows
            )}
          </tbody>
        </table>
      </ProtectedCard>
    </>
  );
}
