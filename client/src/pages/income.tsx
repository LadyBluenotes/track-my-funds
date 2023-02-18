import React, { useState } from "react";
import Modal from "./components/Modal";

interface monthlyIncomes {
  name: string;
  amount: number;
}

export default function Income() {
  const [monthlyIncome, setMonthlyIncome] = useState();
  const [modalShow, setModalShow] = useState(false);

  const monthlyIncomes = [
    { name: "Salary", amount: 5000 },
    { name: "Side Hustle", amount: 1000 },
    { name: "Investments", amount: 1000 },
  ];

  const tableHeaders: any = (
    <tr>
      <th className="px-6 py-3 text-base">Income</th>
      <th className="px-6 py-3 text-base">Amount</th>
      <th className="px-6 py-3"></th>
    </tr>
  );

  const tableRows: any = monthlyIncomes.map((income: monthlyIncomes) => (
    <tr className="bg-grey-50 border-b-2">
      <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap text-base">
        {income.name}
      </td>
      <td className="px-6 py-4 text-base">{income.amount}</td>
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
          modalType={"Income"}
          modalPlaceholder={"Income source"}
        />
      ) : null}

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg p-8 bg-white rounded-lg drop-shadow-md w-9/12 m-auto pr-0">
        <table className="text-sm text-left text-gray-500 w-11/12 m-auto">
          <caption className="pb-5 text-3xl font-semibold text-center text-indigo-600 bg-grey-100 border-b-2 border-gray-400">
            Monthly Incomes
            <div>
              <button
                data-modal-target="incomeModal"
                data-modal-toggle="incomeModal"
                className="block w-[170px] px-2 py-2 text-base text-white bg-indigo-600 hover:bg-indigo-700 border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
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
          <tbody>{tableRows}</tbody>
        </table>
      </div>
    </div>
  );
}
