import React, { useState } from "react";
import Modal from "./components/Modal";

interface monthlyIncomes {
  name: string;
  amount: number;
  month: number;
  year: number;
}

interface monthlyExpenses {
  name: string;
  amount: number;
}

export default function Dashboard() {

    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const tableRows: any = [];

    const monthlyIncomes = [
    { name: "Salary", amount: 5000, month: 1, year: 2021 },
    { name: "Side Hustle", amount: 0, month: 1, year: 2021 },
    { name: "Investments", amount: 100, month: 1, year: 2021 },
    { name: "Salary", amount: 5000, month: 2, year: 2021 },
    { name: "Side Hustle", amount: 100, month: 2, year: 2021 },
    { name: "Investments", amount: 200, month: 2, year: 2021 },
    { name: "Salary", amount: 3000, month: 3, year: 2021 },
    { name: "Side Hustle", amount: 200, month: 3, year: 2021 },
    { name: "Investments", amount: 10, month: 3, year: 2021 },
    { name: "Salary", amount: 2500, month: 4, year: 2021 },
    { name: "Side Hustle", amount: 150, month: 4, year: 2021 },
    { name: "Investments", amount: 200, month: 4, year: 2021 },
    { name: "Salary", amount: 5000, month: 1, year: 2023 },
    { name: "Side Hustle", amount: 0, month: 1, year: 2023 },
    { name: "Investments", amount: 100, month: 1, year: 2023 },
    { name: "Salary", amount: 5000, month: 2, year: 2023 },
    { name: "Side Hustle", amount: 100, month: 2, year: 2023 },
    { name: "Investments", amount: 200, month: 3, year: 2023 },
    { name: "Salary", amount: 3000, month: 4, year: 2023 },
    { name: "Side Hustle", amount: 200, month: 4, year: 2023 },
    { name: "Investments", amount: 10, month: 4, year: 2023 },
    ];

  const monthlyExpenses = [
    { name: "Rent", amount: 2000 },
    { name: "Food", amount: 500 },
    { name: "Utilities", amount: 300 },
    { name: "Transportation", amount: 200 },
    { name: "Entertainment", amount: 100 },
    { name: "Miscellaneous", amount: 100 },
  ];

  const tableHeaders: any = (
    <tr>
      <th className="px-3 py-3 text-sm">Month</th>
      <th className="px-3 py-3 text-sm">Total Income</th>
      {monthlyExpenses.map((expense: monthlyExpenses) => (
        <th className="px-3 py-3 text-sm">{expense.name}</th>
      ))}
      <th className="px-3 py-3 text-sm">Remaining</th>
    </tr>
  );

    const totalIncome = (month: number) => {
        let total = 0;
        // if the incomes month and year match the month an


        

        return total;
    }

    const remaining = (month: number) => {
        let total = totalIncome(month);
        monthlyExpenses.forEach((expense: monthlyExpenses) => {
            total -= expense.amount;
        });
        return total;
    }
    
    for (let i = 0; i < months.length; i++) {
        if (totalIncome(i + 1) > 0) {
            tableRows.push(
                <tr className="border-b border-gray-200">
                    <td className="px-3 py-3">{months[i]}</td>
                    <td className="px-3 py-3 text-center">{totalIncome(i + 1)}</td>
                    {monthlyExpenses.map((expense: monthlyExpenses) => (
                        <td className="px-3 py-3 text-center">{expense.amount}</td>
                    ))}
                    <td className="px-3 py-3 text-center">{
                        remaining(i + 1) < 0 ? (
                            <span className="text-red-500">-${remaining(i + 1)*-1}</span>
                        ) : (
                            <span>${remaining(i + 1)}</span>
                        )
                    }</td>
                </tr>
            );
        }
    }


  return (
    <div className="pb-20 pt-20">
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg p-8 bg-white rounded-lg drop-shadow-md w-9/12 m-auto">
        <table className="text-sm text-center text-gray-500 w-11/12 m-auto">
          <caption className="pb-5 text-3xl font-semibold text-center text-indigo-600 bg-grey-100 border-b-2 border-gray-400">
            Your Financial Dashboard
          </caption>
          <thead className="text-xs text-gray-700 uppercase bg-grey-100 border-b-2 border-gray-400">
            {tableHeaders}
          </thead>
          <tbody className="text-left">
            {
                tableRows.length === 0 ? (
                    <tr className="border-b border-gray-200">
                        <td className="px-3 py-3 text-center" colSpan={monthlyExpenses.length + monthlyIncomes.length}>No data to display</td>
                    </tr>
                ) : (
                    tableRows
                )
            }
        </tbody>
        </table>
      </div>
    </div>
  );
}
