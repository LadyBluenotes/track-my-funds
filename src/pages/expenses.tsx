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
  const [expense, setExpense] = useState<expenses[] | null>(
    null
  );
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
    if (num){
      return parseInt(num).toFixed(2);
    }
    return parseInt('0').toFixed(2);
  };

  const { data: session, status } = useSession();

  const user = session?.user?.id;

  useEffect(()=> {
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
  }, [])

  const getMonth = (month: number) => {
    return months[month];
  };

  const date = (month: string, year: number) => {
    return `${month} ${year}`;
  };

  const tableHeaders: any = (
    <tr>
      <th className="px-6 py-3 text-base">Date</th>
      <th className="px-6 py-3 text-base">Expense</th>
      <th className="px-6 py-3 text-base">Amount</th>
      <th className="px-2 py-3"></th>
    </tr>
  );

if(expense){
    tableRows = expense.map((expense: expenses) => (
      <tr className="bg-grey-50 border-b-2">
        <td className="px-6 py-2 font-medium text-gray-900 whitespace-nowrap text-base">
          {date(getMonth(expense.month), expense.year)}
        </td>
        <td className="px-6 py-2 text-gray-900 whitespace-nowrap text-base">
          {expense.name}
        </td>
        <td className="px-6 py-2 text-base">${decimalPlaces(expense.amount)}</td>
        <td className="px-2 py-2 text-center">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-5">
            Edit
          </button>
          <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
            Delete
          </button>
        </td>
      </tr>
    ));
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
          <Modal hideModal={hideModal} modalType={"Expense"} user={user}/>
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
                  <td
                    className="px-3 py-3 text-center"
                    colSpan={4}
                  >
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
