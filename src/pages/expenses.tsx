import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import dynamic from "next/dynamic";

const EditModal = dynamic(() => import("./components/EditModal"), {
  ssr: false,
});
import Modal from "./components/Modal";
import ProtectedPage from "./components/ProtectedPage";
import { IconPencil, IconPlus } from "@tabler/icons-react";

interface expenses {
  month: number;
  year: number;
  user: string;
  name: string;
  amount: string;
}

export default function Expense() {
  const [expense, setExpense] = useState<expenses[] | null>(null);

  const [modalShow, setModalShow] = useState(false);
  const [editModalShow, setEditModalShow] = useState(false);
  const [item, setItem] = useState(null);
  const { data: session, status } = useSession();

  // @ts-expect-error
  const user = session?.user?.id;

  const showEditModal = (itemInfo: any) => {
    setItem(itemInfo);
    setEditModalShow(true);
  };

  const hideEditModal = () => {
    setEditModalShow(false);
  };

  const showModal = () => {
    setModalShow(true);
  };

  const hideModal = () => {
    setModalShow(false);
  };

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
    if (num) {
      return num.toFixed(2);
    }
    return 0.0;
  };

  useEffect(() => {
    const data = async () => {
      fetch(`/api/expense/getAll/${user}`, {
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
    };
    data();
  }, [user]);

  const getMonth = (month: number) => {
    return months[month];
  };

  const date = (month: string, year: number) => {
    return `${month} ${year}`;
  };

  const tableHeaders: any = (
    <tr>
      <th className="px-5 py-3 text-base text-center">Date</th>
      <th className="px-5 py-3 text-base text-center">Expense</th>
      <th className="px-5 py-3 text-base text-center">Amount</th>
      <th className="px-2 py-3"></th>
    </tr>
  );

  if (expense) {
    expense.sort((a, b) => {
      if (a.year > b.year) {
        return 1;
      } else if (a.year < b.year) {
        return -1;
      } else {
        if (a.month > b.month) {
          return 1;
        } else if (a.month < b.month) {
          return -1;
        } else {
          return 0;
        }
      }
    });

    tableRows = expense.map((expense, index) => {
      let rowBG = index % 2 === 0 ? "bg-white" : "bg-gray-100";
      const item = expense as any;
      return (
        <tr key={index} className={rowBG}>
          <td className="px-5 py-4 whitespace-nowrap">
            <div className="text-sm text-gray-900 text-center">
              {date(getMonth(expense.month), expense.year)}
            </div>
          </td>
          <td className="px-5 py-4 whitespace-nowrap">
            <div className="text-sm text-gray-900 text-center">
              {expense.name}
            </div>
          </td>
          <td className="px-5 py-4 whitespace-nowrap text-center">
            <div className="text-sm text-gray-900">
              ${decimalPlaces(Number(expense.amount))}
            </div>
          </td>
          <td className="whitespace-nowrap text-left text-sm font-medium">
            <button
              className="text-indigo-600 hover:text-indigo-900 bg-indigo-100 hover:bg-indigo-200 p-2 rounded-md border border-indigo-200 md:px-4"
              onClick={() => {
                showEditModal(item);
              }}
            >
              <div className="hidden md:inline-block">Edit</div>
              <IconPencil className="h-5 w-5 md:hidden" />
            </button>
          </td>
        </tr>
      );
    });
  }

  return (
    <ProtectedPage>
      <div className="pt-5 md:pt-10">
        {modalShow ? (
          <Modal hideModal={hideModal} modalType={"Expense"} user={user} />
        ) : null}
        {editModalShow ? (
          <EditModal
            hideEditModal={hideEditModal}
            modalType={"Expense"}
            item={item}
          />
        ) : null}
        <div className="overflow-x-auto shadow-md py-8 bg-white md:rounded-lg drop-shadow-md md:w-9/12 md:m-auto pr-0 border border-gray-200 w-full lg:mt:10">
          <table className="text-sm text-left text-gray-500 w-11/12 m-auto">
            <caption className="pb-5 text-3xl font-semibold text-center text-indigo-600 bg-grey-100 border-b-2 border-gray-400">
              <button
                className="float-left p-1 text-base text-white bg-indigo-600 hover:bg-indigo-700 border rounded-2xl focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                type="button"
                onClick={showModal}
              >
                <IconPlus className="h-5 w-5" />
              </button>
              Expenses
            </caption>
            <thead className="text-xs text-gray-700 uppercase bg-grey-100 border-b-2 border-gray-400">
              {tableHeaders}
            </thead>
            <tbody>
              {expense?.length !== 0 ? (
                tableRows
              ) : (
                <tr className="border-b border-gray-200">
                  <td className="px-3 py-3 text-center" colSpan={4}>
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
