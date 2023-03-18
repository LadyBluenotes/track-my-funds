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

function totalMonthlyIncome(monthlyIncomes: monthlyIncomes[]) {
  const total = monthlyIncomes.reduce((acc, income) => {
    return acc + income.amount;
  }, 0);

  return total;
}

function totalMonthlyExpenses(monthlyExpenses: monthlyExpenses[]) {
  const total = monthlyExpenses.reduce((acc, expense) => {
    return acc + expense.amount;
  }, 0);
  return total;
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
    const remaining = (month: any, year: any) => {
      return (
        totalMonthlyIncome(monthlyIncomes) -
        totalMonthlyExpenses(monthlyExpenses)
      );
    };

    monthlyIncomes.map((income: monthlyIncomes) => {
      let monthName = months[income.month - 1];
      let month = income.month;
      let year = income.year;

      if (!usedMonths.includes(`${monthName} ${year}`)) {
        usedMonths.push(`${monthName} ${year}`);
        tableRows.push(
          <tr className="border-b border-gray-200">
            <td className="px-3 py-3 text-left">
              {monthName} {year}
            </td>
            <td className="px-3 py-3 text-center bg-green-100">
              ${totalMonthlyIncome(monthlyIncomes)}
            </td>
            <td className="px-3 py-3 text-center bg-red-100">
              ${totalMonthlyExpenses(monthlyExpenses)}
            </td>
            <td className="px-3 py-3 text-center">
              {remaining(month, year) < 0 ? (
                <span className="text-red-500">
                  -${remaining(month, year) * -1}
                </span>
              ) : (
                <span className="text-green-500">
                  ${remaining(month, year)}
                </span>
              )}
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
