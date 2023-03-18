import { useEffect, useState } from "react";

import Modal from "./components/Modal";
import ProtectedPage from "./components/ProtectedPage";

interface expenses {
  month: number;
  year: number;
  name: string;
  amount: number;
}

export default function Income() {
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

  useEffect(()=> {
    fetch("http://localhost:3000/api/expenses/showExpenses", {
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
      <th className="px-6 py-3 text-base">Income</th>
      <th className="px-6 py-3 text-base">Amount</th>
      <th className="px-6 py-3"></th>
    </tr>
  );

if(expense){
    tableRows = expense.map((income: expenses) => (
      <tr className="bg-grey-50 border-b-2">
        <td className="px-6 py-2 font-medium text-gray-900 whitespace-nowrap text-base">
          {date(getMonth(income.month), income.year)}
        </td>
        <td className="px-6 py-2 text-gray-900 whitespace-nowrap text-base">
          {income.name}
        </td>
        <td className="px-6 py-2 text-base">${decimalPlaces(income.amount)}</td>
        <td className="px-6 py-2 text-center">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-5"
          onClick={()=>{
            fetch("/api/expenses/editExpense", {
              method: "PUT",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
               
              }),
            })
              .then((res) => res.json())
              .then((data) => {
                console.log(data);
              })
              .catch((err) => console.log(err));
          }}
          >
            Edit
          </button>
          <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => {
            fetch("/api/expenses/deleteExpense", {
              method: "DELETE",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
               
              }),
            })
              .then((res) => res.json())
              .then((data) => {
                console.log(data);
              })
              .catch((err) => console.log(err));
          }}
          >
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
      <div className="pb-20 pt-20">
        {modalShow ? (
          <Modal hideModal={hideModal} modalType={"Expense"} />
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
