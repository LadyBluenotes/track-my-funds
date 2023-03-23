import React from "react";
import { useSession, signIn } from "next-auth/react";
import { useRouter } from "next/router";

import GoogleIcon from "@mui/icons-material/Google";

export default function Login() {
  const router = useRouter();
  const { data: session, status } = useSession();

  if (session) {
    router.push("/dashboard");
  }

  return (
    <div className="pt-10 bg-gradient-to-br from-white to-indigo-200 h-[calc(100vh-150px)] overflow-auto">
      <div className=" px-5 py-10 bg-white md:rounded-lg drop-shadow-md sm:max-w-sm lg:max-w-lg m-auto">
        <h1 className="text-3xl font-semibold text-center text-indigo-600">
          Register for an account
        </h1>
        <div>
          <div className="relative flex py-5 items-center">
            <div className="flex-grow border-t border-gray-400"></div>
            <span className="flex-shrink mx-4 text-gray-400">Sign up with</span>
            <div className="flex-grow border-t border-gray-400"></div>
          </div>
          <button
            className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-red-600 rounded-md hover:bg-red-500 focus:outline-none focus:bg-red-600"
            onClick={() => {
              signIn("google", { callbackUrl: "/dashboard" });
            }}
          >
            <GoogleIcon className="text-red-100" />
          </button>
        </div>
        <p className="mt-8 text-xs font-light text-center text-gray-700">
          {" "}
          Already have an account?{" "}
          <a
            href="/login"
            className="font-medium text-indigo-600 hover:underline"
          >
            Log in
          </a>
        </p>
      </div>
    </div>
  );
}
