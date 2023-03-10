import React from "react";
import { useSession, signIn } from "next-auth/react";
import { useRouter } from "next/router";

import GoogleIcon from "@mui/icons-material/Google";
import { IconBrandDiscord } from "@tabler/icons-react";

export default function Login() {
  const router = useRouter();
  const { data: session, status } = useSession();

  if (session) {
    router.push("/dashboard");
  }


  return (
    <div className="pt-20 bg-gradient-to-br from-white to-indigo-200 h-[calc(100vh-150px)] overflow-auto">
      <div className=" py-10 px-5 bg-white rounded-lg drop-shadow-md sm:max-w-sm lg:max-w-lg m-auto">
        <h1 className="text-3xl font-semibold text-center text-indigo-600">
          Welcome Back!
        </h1>
          <div>
            <div className="relative flex py-5 items-center">
              <div className="flex-grow border-t border-gray-400"></div>
              <span className="flex-shrink mx-4 text-gray-400">
                Log in with
              </span>
              <div className="flex-grow border-t border-gray-400"></div>
            </div>
            <div className="flex flex-col grow items-center">
              <button
                className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-red-500 rounded-md hover:bg-red-600 focus:outline-none focus:bg-red-500"
                onClick={() => {
                  signIn("google", { callbackUrl: "/dashboard" });
                }}
              >
                <GoogleIcon className="text-red-100" />
              </button>

              {/* <button className="w-full px-4 py-2 mb-4 tracking-wide text-white transition-colors duration-200 transform bg-indigo-600 rounded-md hover:bg-indigo-500 focus:outline-none focus:bg-indigo-600">
                <IconBrandDiscord className="mx-auto text-indigo-100" />
              </button> */}
            </div>
          </div>
        <p className="mt-8 text-xs font-light text-center text-gray-700">
          {" "}
          Don't have an account?{" "}
          <a
            href="/register"
            className="font-medium text-indigo-600 hover:underline"
          >
            Register here.
          </a>
        </p>
      </div>
    </div>
  );
}
