import { signOut } from "next-auth/react";

interface FunctionBtnProps {
    type?: "button" | "submit";
    text: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function FunctionBtn({ type, onClick, text }: FunctionBtnProps) {
  if (text === "Sign Out") {
    return (
      <button
        className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
        onClick={() => signOut()}
      >
        Sign out
      </button>
    );
  }

  return (
    <>
      <button
        type={type}
        className={`w-full px-4 py-2 mt-0 text-white focus:outline-none rounded-lg ${text === "Update" ? "bg-indigo-600 hover:bg-indigo-500 focus:bg-indigo-500" : "bg-red-600 hover:bg-red-500 focus:bg-red-500 "}`}
        onClick={onClick}
      >
        {text}
      </button>
    </>
  );
}
