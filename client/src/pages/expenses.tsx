import React, { useState } from "react";
import Modal from "./components/Modal";

interface monthlyExpenses {
  name: string;
  amount: number;
}

export default function Income() {
  const [monthlyExpense, setMonthlyExpense] = useState();
  const [modalShow, setModalShow] = useState(false);

  const monthlyExpenses = [
    { name: "Rent", amount: 1000 },
    { name: "Car Payment", amount: 500 },
    { name: "Car Insurance", amount: 100 },
    { name: "Phone Bill", amount: 100 },
    { name: "Internet", amount: 100 },
    { name: "Electricity", amount: 100 },
    { name: "Water", amount: 100 },
    { name: "Gas", amount: 100 },
    { name: "Groceries", amount: 100 },
  ];

  const tableHeaders: any = (
    <tr>
      <th className="px-6 py-3 text-base">Expense</th>
      <th className="px-6 py-3 text-base">Amount</th>
      <th className="px-6 py-3"></th>
    </tr>
  );

  const tableRows: any = monthlyExpenses.map((expense: monthlyExpenses) => (
    <tr className="bg-grey-50 border-b-2">
      <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap text-base">
        {expense.name}
      </td>
      <td className="px-6 py-4 text-base">{expense.amount}</td>
      <td className="px-6 py-4 text-center">
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
    <div className="pb-20 pt-20">
      {modalShow ? (
        <Modal
          hideModal={hideModal}
          modalType={"Expense"}
          modalPlaceholder={"Expense name"}
        />
      ) : null}

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg p-8 bg-white rounded-lg drop-shadow-md w-9/12 m-auto pr-0">
        <table className="text-sm text-left text-gray-500 w-11/12 m-auto">
          <caption className="pb-5 text-3xl font-semibold text-center text-indigo-600 bg-grey-100 border-b-2 border-gray-400">
            Monthly Expenses
            <div>
              <button
                data-modal-target="incomeModal"
                data-modal-toggle="incomeModal"
                className="block w-[170px] px-2 py-2 text-base text-white bg-indigo-600 hover:bg-indigo-700 border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
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
  );
}
