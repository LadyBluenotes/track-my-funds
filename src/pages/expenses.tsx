import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";

import Modal from "./components/Modal";
import ProtectedPage from "./components/ProtectedPage";

interface expenses {
  month: number;
  year: number;
  name: string;
  amount: number;
}

export default function Expense() {
  const [expense, setExpense] = useState<expenses[] | null>(null);

  const [modalShow, setModalShow] = useState(false);

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

  let tableRows;

  const decimalPlaces = (num: any) => {
    if (num) {
      return parseInt(num).toFixed(2);
    }
    return parseInt("0").toFixed(2);
  };

  const { data: session, status } = useSession();

  const user = session?.user?.id;

  useEffect(() => {
    const data = async () => {
    fetch(`/api/expense/getAll/${user}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setExpense(data);
      })
      .catch((err) => {
        console.log(err);
      });
    };
    data();
  });

  const getMonth = (month: number) => {
    return months[month];
  };

  const date = (month: string, year: number) => {
    return `${month} ${year}`;
  };

  const tableHeaders: any = (
    <tr>
      <th className="px-6 py-3 text-base text-center">Date</th>
      <th className="px-6 py-3 text-base text-center">Expense</th>
      <th className="px-6 py-3 text-base text-center">Amount</th>
      <th className="px-2 py-3"></th>
    </tr>
  );

  if (expense) {
    expense.sort((a, b) => {
      if (a.year > b.year) {
        return 1;
      } else if (a.year < b.year) {
        return -1;
      } else {
        if (a.month > b.month) {
          return 1;
        } else if (a.month < b.month) {
          return -1;
        } else {
          return 0;
        }
      }
    });

    tableRows = expense.map((expense, index) => {
      let rowBG = index % 2 === 0 ? "bg-white" : "bg-gray-100";
      return (
        <tr key={index} className={rowBG}>
          <td className="px-6 py-4 whitespace-nowrap">
            <div className="text-sm text-gray-900 text-center">
              {date(getMonth(expense.month), expense.year)}
            </div>
          </td>
          <td className="px-6 py-4 whitespace-nowrap">
            <div className="text-sm text-gray-900 text-center">
              {expense.name}
            </div>
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-center">
            <div className="text-sm text-gray-900">
              ${decimalPlaces(expense.amount)}
            </div>
          </td>
          <td className="whitespace-nowrap text-left text-sm font-medium">
            <button className="text-indigo-600 hover:text-indigo-900 bg-indigo-100 hover:bg-indigo-200 px-4 py-2 rounded-md border border-indigo-200">
              Edit
            </button>
          </td>
        </tr>
      );
    });
  }

  const showModal = () => {
    setModalShow(true);
  };

  const hideModal = () => {
    setModalShow(false);
  };

  return (
    <ProtectedPage>
      <div className="pb-20 pt-20 w-10/12 mx-auto">
        {modalShow ? (
          <Modal hideModal={hideModal} modalType={"Expense"} user={user} />
        ) : null}
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg py-8 bg-white rounded-lg drop-shadow-md w-9/12 m-auto pr-0 border border-gray-200">
          <table className="text-sm text-left text-gray-500 w-11/12 m-auto">
            <caption className="pb-5 text-3xl font-semibold text-center text-indigo-600 bg-grey-100 border-b-2 border-gray-400">
              Expenses
              <div>
                <button
                  className="float-right block w-[170px] px-2 py-2 text-base text-white bg-indigo-600 hover:bg-indigo-700 border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  type="button"
                  onClick={showModal}
                >
                  Add New Expense
                </button>
              </div>
            </caption>
            <thead className="text-xs text-gray-700 uppercase bg-grey-100 border-b-2 border-gray-400">
              {tableHeaders}
            </thead>
            <tbody>
              {tableRows ? (
                tableRows
              ) : (
                <tr className="border-b border-gray-200">
                  <td className="px-3 py-3 text-center" colSpan={4}>
                    No data to display
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </ProtectedPage>
  );
}
