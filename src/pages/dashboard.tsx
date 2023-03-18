import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";

import ProtectedPage from "@/pages/components/ProtectedPage";
import { IconSelector } from "@tabler/icons-react";

interface monthlyIncomes {
  name: string;
  amount: number;
  month: number;
  year: number;
}

interface monthlyExpenses {
  name: string;
  amount: number;
  month: number;
  year: number;
}

function decimalPlaces(num: any) {
  if (num) {
    return parseInt(num).toFixed(2);
  }
  return parseInt("0").toFixed(2);
}

function monthsIncome(monthlyIncomes: monthlyIncomes[], month: number) {
  const total = monthlyIncomes.reduce((acc, income) => {
    if (income.month === month) {
      return acc + income.amount;
    }
    return acc;
  }, 0);

  return decimalPlaces(total);
}

function monthsExpenses(monthlyExpenses: monthlyExpenses[], month: number) {
  const total = monthlyExpenses.reduce((acc, expense) => {
    if (expense.month === month) {
      return acc + expense.amount;
    }
    return acc;
  }, 0);

  return decimalPlaces(total);
}

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

function remaining(totalIncome: any, totalExpense: any) {
  return totalIncome - totalExpense;
}

function sortAscending(a: any, b: any) {
  if (a.year < b.year) {
    return -1;
  }
  if (a.year > b.year) {
    return 1;
  }
  if (a.month < b.month) {
    return -1;
  }
  if (a.month > b.month) {
    return 1;
  }
  return 0;
}

function sortDescending(a: any, b: any) {
  if (a.year > b.year) {
    return -1;
  }
  if (a.year < b.year) {
    return 1;
  }
  if (a.month > b.month) {
    return -1;
  }
  if (a.month < b.month) {
    return 1;
  }
  return 0;
}

export default function Dashboard() {
  const [monthlyIncomes, setMonthlyIncomes] = useState<monthlyIncomes[] | null>(
    null
  );
  const [monthlyExpenses, setMonthlyExpenses] = useState<
    monthlyExpenses[] | null
  >(null);
  const [sort, setSort] = useState("ascending");

  useEffect(() => {
    fetch("/api/income/show", {
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

    fetch("/api/expenses/get", {
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
    monthlyIncomes.forEach((income) => {
      if (!usedMonths.includes(income.month)) {
        usedMonths.push(income.month);
        const totalIncome = monthsIncome(monthlyIncomes, income.month);
        const totalExpense = monthsExpenses(monthlyExpenses, income.month);
        const remain = remaining(totalIncome, totalExpense);
        tableRows.push(
          <tr className="border-b border-gray-200">
            <td className="px-3 py-3 text-center">
              {months[income.month]} {income.year}
            </td>
            <td className="px-3 py-3 text-center bg-green-100">
              $ {totalIncome}
            </td>
            <td className="px-3 py-3 text-center bg-red-100">
              $ {totalExpense}
            </td>
            <td className="px-3 py-3 text-center">
              {remain < 0 ? (
                <span className="text-red-500">
                  -$ {decimalPlaces(-remain)}
                </span>
              ) : (
                <span className="text-green-500">
                  $ {decimalPlaces(remain)}
                </span>
              )}
            </td>
          </tr>
        );

        monthlyExpenses.forEach((expense) => {
          if (!usedMonths.includes(expense.month)) {
            usedMonths.push(expense.month);
            const totalIncome = monthsIncome(monthlyIncomes, expense.month);
            const totalExpense = monthsExpenses(monthlyExpenses, expense.month);
            const remain = remaining(totalIncome, totalExpense);
            tableRows.push(
              <tr className="border-b border-gray-200">
                <td className="px-3 py-3 text-center">
                  {months[expense.month]} {expense.year}
                </td>
                <td className="px-3 py-3 text-center bg-green-100">
                  $ {totalIncome}
                </td>
                <td className="px-3 py-3 text-center bg-red-100">
                  $ {totalExpense}
                </td>
                <td className="px-3 py-3 text-center">
                  {remain < 0 ? (
                    <span className="text-red-500">
                      -$ {decimalPlaces(-remain)}
                    </span>
                  ) : (
                    <span className="text-green-500">
                      $ {decimalPlaces(remain)}
                    </span>
                  )}
                </td>
              </tr>
            );
          }
        });
      }
    });
  }

  return (
    <ProtectedPage>
      <div className="pb-20 pt-20">
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg p-8 bg-white rounded-lg drop-shadow-md w-9/12 m-auto border border-gray-200">
          <table className="text-sm text-center text-gray-500 w-11/12 m-auto">
            <caption className="pb-5 text-3xl font-semibold text-center text-indigo-600 bg-grey-100">
              Your Financial Dashboard
            </caption>
            <thead className="text-xs text-gray-700 uppercase bg-grey-100">
              <tr className="border-b-2 border-gray-400">
                <th className="px-0 py-3 text-base w-[120px]">
                  Date
                </th>
                <th className="px-3 py-3 text-base">Total Income</th>
                <th className="px-3 py-3 text-base">Total Expenses</th>
                <th className="px-3 py-3 text-base">Remaining</th>
              </tr>
            </thead>
            <tbody className="text-center">
              {tableRows.length === 0 ? (
                <tr className="border-b border-gray-200">
                  <td className="px-3 py-3 text-center" colSpan={4}>
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
