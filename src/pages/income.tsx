import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";

import EditModal from "./components/EditModal";
import Modal from "./components/Modal";
import ProtectedPage from "./components/ProtectedPage";

interface incomes {
  month: number;
  year: string;
  user: string;
  name: string;
  amount: string;
}

export default function Income() {
  const [income, setIncome] = useState<incomes[] | null>(null);

  const [modalShow, setModalShow] = useState(false);
  const [editModalShow, setEditModalShow] = useState(false);
  const [item, setItem] = useState(null);
  const { data: session, status } = useSession();
  const user = session?.user?.id;

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

  let tableRows;

  const decimalPlaces = (num: any) => {
    if (num) {
      return num.toFixed(2);
    }
    return 0.00;
  };

  useEffect(() => {
    const data = async () => {
      fetch(`/api/income/getAll/${user}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setIncome(data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    data();
  }, [user]);

  const getMonth = (month: number) => {
    return months[month];
  };

  const date = (month: string, year: number) => {
    return `${month} ${year}`;
  };

  const tableHeaders: any = (
    <tr>
      <th className="px-6 py-3 text-base text-center">Date</th>
      <th className="px-6 py-3 text-base text-center">Income</th>
      <th className="px-6 py-3 text-base text-center">Amount</th>
      <th className="px-2 py-3"></th>
    </tr>
  );

  if (income) {
    income.sort((a, b) => {
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

    tableRows = income.map((income, index) => {
      let rowBG = index % 2 === 0 ? "bg-white" : "bg-gray-100";
      const item = income as any;
      return (
        <tr key={index} className={rowBG}>
          <td className="px-6 py-4 whitespace-nowrap">
            <div className="text-sm text-gray-900 text-center">
              {date(getMonth(income.month), income.year)}
            </div>
          </td>
          <td className="px-6 py-4 whitespace-nowrap">
            <div className="text-sm text-gray-900 text-center">
              {income.name}
            </div>
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-center">
            <div className="text-sm text-gray-900">
              ${decimalPlaces(Number(income.amount))}
            </div>
          </td>
          <td className="whitespace-nowrap text-left text-sm font-medium">
            <button
              className="text-indigo-600 hover:text-indigo-900 bg-indigo-100 hover:bg-indigo-200 px-4 py-2 rounded-md border border-indigo-200"
              onClick={() => {
                showEditModal(item);
              }}
            >
              Edit
            </button>
          </td>
        </tr>
      );
    });
  }

  return (
    <ProtectedPage>
      <div className="pb-20 pt-20 w-10/12 mx-auto">
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
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg py-8 bg-white rounded-lg drop-shadow-md w-9/12 m-auto pr-0 border border-gray-200">
          <table className="text-sm text-left text-gray-500 w-11/12 m-auto">
            <caption className="pb-5 text-3xl font-semibold text-center text-indigo-600 bg-grey-100 border-b-2 border-gray-400">
              Incomes
              <div>
                <button
                  className="float-right block w-[170px] px-2 py-2 text-base text-white bg-indigo-600 hover:bg-indigo-700 border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  type="button"
                  onClick={showModal}
                >
                  Add New Income
                </button>
              </div>
            </caption>
            <thead className="text-xs text-gray-700 uppercase bg-grey-100 border-b-2 border-gray-400">
              {tableHeaders}
            </thead>
            <tbody>
              {income?.length !== 0 ? (
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
