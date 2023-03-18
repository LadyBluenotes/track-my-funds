import { useEffect, useState } from "react";

import ProtectedPage from "@/pages/components/ProtectedPage";

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

function decimalPlaces(num: any) {
  if (num){
    return parseInt(num).toFixed(2);
  }
  return parseInt('0').toFixed(2);
};

function totalMonthlyIncome(monthlyIncomes: monthlyIncomes[]) {
  const total = monthlyIncomes.reduce((acc, income) => {
    return acc + income.amount;
  }, 0);

  return decimalPlaces(total);
}

function totalMonthlyExpenses(monthlyExpenses: monthlyExpenses[]) {
  const total = monthlyExpenses.reduce((acc, expense) => {
    return acc + expense.amount;
  }, 0);
  return decimalPlaces(total);
}

function remaining(monthlyIncomes: monthlyIncomes[], monthlyExpenses: monthlyExpenses[]) {
  const totalIncome: any = totalMonthlyIncome(monthlyIncomes);
  const totalExpenses: any = totalMonthlyExpenses(monthlyExpenses);
  return totalIncome - totalExpenses;
}

export default function Dashboard() {
  const [monthlyIncomes, setMonthlyIncomes] = useState<monthlyIncomes[] | null>(
    null
  );
  const [monthlyExpenses, setMonthlyExpenses] = useState<
    monthlyExpenses[] | null
  >(null);

  useEffect(() => {
    fetch("/api/income/showIncomes", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setMonthlyIncomes(data);
      })
      .catch((err) => console.log(err));

    fetch("http://localhost:3000/api/expenses/showExpenses", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setMonthlyExpenses(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

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
  const tableRows: any = [];
  const usedMonths: any = [];

  if (monthlyIncomes && monthlyExpenses) {

    monthlyIncomes.map((income: monthlyIncomes) => {
      const monthName = months[income.month - 1];
      const year = income.year;
      const totalIncome = totalMonthlyIncome(monthlyIncomes);
      const totalExpense = totalMonthlyExpenses(monthlyExpenses);
      const remain = remaining(monthlyIncomes, monthlyExpenses);

      if (!usedMonths.includes(`${monthName} ${year}`)) {
        usedMonths.push(`${monthName} ${year}`);
        tableRows.push(
          <tr className="border-b border-gray-200">
            <td className="px-3 py-3 text-left">
              {months[income.month - 1]} {income.year}
            </td>
            <td className="px-3 py-3 text-center bg-green-100">
              $ {totalIncome}
            </td>
            <td className="px-3 py-3 text-center bg-red-100">
              $ {totalExpense}
            </td>
            <td className="px-3 py-3 text-center">
              { remain < 0 ? (
                <span className="text-red-500">-$ {decimalPlaces(-remain)}</span>
              ) : (
                <span className="text-green-500">$ {decimalPlaces(remain)}</span>
              )   
              }
            </td>
          </tr>
        );
      }
      return tableRows;
    });
  }

  return (
    <ProtectedPage>
      <div className="pb-20 pt-20">
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg p-8 bg-white rounded-lg drop-shadow-md w-9/12 m-auto border border-gray-200">
          <table className="text-sm text-center text-gray-500 w-11/12 m-auto">
            <caption className="pb-5 text-3xl font-semibold text-center text-indigo-600 bg-grey-100 border-b-2 border-gray-400">
              Your Financial Dashboard
            </caption>
            <thead className="text-xs text-gray-700 uppercase bg-grey-100 border-b-2 border-gray-400">
              <tr>
                <th className="px-0 py-3 text-sm w-[120px]">Month</th>
                <th className="px-3 py-3 text-sm">Total Income</th>
                <th className="px-3 py-3 text-sm">Total Expenses</th>
                <th className="px-3 py-3 text-sm">Remaining</th>
              </tr>
            </thead>
            <tbody className="text-left">
              {tableRows.length === 0 ? (
                <tr className="border-b border-gray-200">
                  <td className="px-3 py-3 text-center" colSpan={3}>
                    No data to display
                  </td>
                </tr>
              ) : (
                tableRows
              )}
            </tbody>
          </table>
        </div>
      </div>
    </ProtectedPage>
  );
}
