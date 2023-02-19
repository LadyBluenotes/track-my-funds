import React, { useState } from "react";

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
    const usedMonths: any = [];

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
    { name: "Misc", amount: 100 },
  ];

  const tableHeaders: any = (
    <tr>
      <th className="px-0 py-3 text-sm w-[120px]">Month</th>
      <th className="px-3 py-3 text-sm">Total Income</th>
      {monthlyExpenses.map((expense: monthlyExpenses) => (
        <th className="px-3 py-3 text-sm">{expense.name}</th>
      ))}
      <th className="px-3 py-3 text-sm">Remaining</th>
    </tr>
  );

  const monthlyTotalIncome = (month: any, year: any) => {
        let total = 0;
        monthlyIncomes.forEach((income: monthlyIncomes) => {
            if (income.month === month && income.year === year) {
                total += income.amount;
            }
        });
        return total;
    };

        
    const remaining = (month:any, year:any) => {
        let total: any = monthlyTotalIncome(month, year);
        monthlyExpenses.forEach((expense: monthlyExpenses) => {
            total -= expense.amount;
        });
        return total;
    }
    
    const rows = monthlyIncomes.map((income: monthlyIncomes) => {
        let monthName = months[income.month - 1];
        let month = income.month;
        let year = income.year;
        
        // map through the months and years to create the rows for the table
        if (!usedMonths.includes(`${monthName} ${year}`)) {
            usedMonths.push(`${monthName} ${year}`);
            tableRows.push(
                <tr className="border-b border-gray-200">
                    <td className="px-3 py-3 text-left">{monthName} {year}</td>
                    <td className="px-3 py-3 text-center bg-green-100">${monthlyTotalIncome(month, year)}</td>
                    {monthlyExpenses.map((expense: monthlyExpenses) => (
                        <td className="px-3 py-3 text-center bg-red-100">${expense.amount}</td>
                    ))}
                    <td className="px-3 py-3 text-right">{
                        remaining(month, year) < 0 ? (
                            <span className="text-red-500">-${remaining(month, year)*-1}</span>
                        ) : (
                            <span className="text-green-500">${remaining(month, year)}</span>
                        )}
                    </td>
                </tr>
            );
        }
        return tableRows;
    });

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
