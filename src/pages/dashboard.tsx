import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";

import ProtectedPage from "@/pages/components/ProtectedPage";
import { Map } from "@mui/icons-material";

interface monthlyData {
  name: string;
  amount: number;
  month: number;
  year: number;
  user: string;
}

function decimalPlaces(num: any) {
  if (num) {
    return parseInt(num).toFixed(2);
  }
  return parseInt("0").toFixed(2);
}

function getMonthlyTotal(data: monthlyData[], month: number) {
  const total = data
    .filter((item) => item.month === month)
    .reduce((acc, item) => {
      return acc + item.amount;
    }, 0);
  return total;
}

function getTotal(data: monthlyData[]) {
  const total = data.reduce((acc, item) => {
    return acc + item.amount;
  }, 0);
  return decimalPlaces(total);
}

function sortMonthlyData(a: monthlyData, b: monthlyData) {
  if (a.year < b.year) return -1;
  if (a.year > b.year) return 1;
  if (a.month < b.month) return -1;
  if (a.month > b.month) return 1;
  return 0;
}

export default function Dashboard() {
  const [monthlyIncomes, setMonthlyIncomes] = useState<monthlyData[]>([]);
  const [monthlyExpenses, setMonthlyExpenses] = useState<monthlyData[]>([]);

  const { data: session, status } = useSession();
  const user = session?.user?.id;

  useEffect(() => {
    const data = async () => {
      Promise.all([
        fetch(`/api/income/getAll/${user}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }),
        fetch(`/api/expense/getAll/${user}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }),
      ])
        .then((responses) => Promise.all(responses.map((res) => res.json())))
        .then((data) => {
          setMonthlyIncomes(data[0]);
          setMonthlyExpenses(data[1]);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    data();
  });

  const tableRows: any = [];

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

  if (monthlyIncomes && monthlyExpenses) {
    const usedDates: any = {};

    monthlyIncomes.forEach((data) => {
      if (!usedDates[`${data.month}-${data.year}`]) {
        usedDates[`${data.month}-${data.year}`] = {
          income: Number(data.amount),
          expense: 0,
        };
      } else {
        usedDates[`${data.month}-${data.year}`].income += Number(data.amount);
      }
    });

    monthlyExpenses.forEach((data) => {
      if (!usedDates[`${data.month}-${data.year}`]) {
        usedDates[`${data.month}-${data.year}`] = {
          income: 0,
          expense: Number(data.amount),
        };
      } else {
        usedDates[`${data.month}-${data.year}`].expense += Number(data.amount);
      }
    });

    const sortedDates = Object.keys(usedDates).sort((a, b) => {
      const [aMonth, aYear] = a.split("-");
      const [bMonth, bYear] = b.split("-");
      if (aYear < bYear) return -1;
      if (aYear > bYear) return 1;
      if (aMonth < bMonth) return -1;
      if (aMonth > bMonth) return 1;
      return 0;
    });

    sortedDates.forEach((data, i) => {
      const dateIncome = usedDates[data].income;
      const dateExpense = usedDates[data].expense;
      const remained = dateIncome - dateExpense;

      tableRows.push(
        <tr key={i} className="border-b border-gray-200">
          <td className="px-3 py-3 text-center">
            {months[Number(data.split("-")[0])]} {data.split("-")[1]}
          </td>
          <td className="px-3 py-3 text-center bg-green-100">
            ${decimalPlaces(dateIncome)}
          </td>
          <td className="px-3 py-3 text-center bg-red-100">
            ${decimalPlaces(dateExpense)}
          </td>
          <td className="px-3 py-3 text-center">
            {remained < 0 ? (
              <span className="text-red-500">
                -$ {decimalPlaces(-remained)}
              </span>
            ) : (
              <span className="text-green-500">
                $ {decimalPlaces(remained)}
              </span>
            )}
          </td>
        </tr>
      );
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
                <th className="px-0 py-3 text-base w-[120px]">Date</th>
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
