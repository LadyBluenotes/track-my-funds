import React, { useState } from "react";

import ProtectedPage from "./components/ProtectedPage";
import Modal from "./components/Modal";

interface expenses {
  month: number;
  year: number;
  name: string;
  amount: number;
}

export default function Income() {
  const [expense, setExpenses] = useState();
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

  const getMonth = (month: number) => {
    return months[month - 1];
  };

  const date = (month: string, year: number) => {
    return `${month} ${year}`;
  };

  const expenses = [
    { month: 1, year: 2023, name: "Salary", amount: 5000 },
    { month: 1, year: 2023, name: "Side Hustle", amount: 1000 },
    { month: 1, year: 2023, name: "Investments", amount: 1000 },
  ];

  const tableHeaders: any = (
    <tr>
      <th className="px-6 py-3 text-base">Date</th>
      <th className="px-6 py-3 text-base">Income</th>
      <th className="px-6 py-3 text-base">Amount</th>
      <th className="px-6 py-3"></th>
    </tr>
  );

  const tableRows: any = expenses.map((expense: expenses) => (
    <tr className="bg-grey-50 border-b-2">
      <td className="px-6 py-2 font-medium text-gray-900 whitespace-nowrap text-base">
        {date(getMonth(expense.month), expense.year)}
      </td>
      <td className="px-6 py-2 font-medium text-gray-900 whitespace-nowrap text-base">
        {expense.name}
      </td>
      <td className="px-6 py-2 text-base">{expense.amount}</td>
      <td className="px-6 py-2 text-center">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-5">
          Edit
        </button>
        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
          Delete
        </button>
      </td>
    </tr>
  ));

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

        <div className="relative overflow-x-auto shadow-md sm:rounded-lg p-8 bg-white rounded-lg drop-shadow-md w-9/12 m-auto pr-0">
          <table className="text-sm text-left text-gray-500 w-11/12 m-auto">
            <caption className="pb-5 text-3xl font-semibold text-center text-indigo-600 bg-grey-100 border-b-2 border-gray-400">
              Expenses
              <div>
                <button
                  data-modal-target="incomeModal"
                  data-modal-toggle="incomeModal"
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
            <tbody>{tableRows}</tbody>
          </table>
        </div>
      </div>
    </ProtectedPage>
  );
}
