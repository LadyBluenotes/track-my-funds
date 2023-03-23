import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
  HomeIcon,
  BanknotesIcon,
  CreditCardIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import { signOut } from "next-auth/react";
import Link from "next/link";
import Image from "next/image";

const userPages = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: HomeIcon,
  },
  {
    name: "Income",
    href: "/income",
    icon: BanknotesIcon,
  },
  {
    name: "Expenses",
    href: "/expenses",
    icon: CreditCardIcon,
  },
  {
    name: "Profile",
    href: "/profile",
    icon: UserIcon,
  },
];

export default function LandingNav() {
  return (
    <Popover className=" bg-white sticky top-0 z-50">
      <div className="max-w-screen">
        <div className="flex items-center justify-between border-b-2 border-gray-100 py-0 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1 pl-10 lg:pl-10">
            <Link href="/">
              <span className="sr-only">Track My Funds</span>
              <Image className="h-20 sm:h-20" src="/smallLogo.jpg" alt="" />
            </Link>
          </div>
          <div className="-my-2 -mr-2 md:hidden">
            <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 mr-10 lg:pr-20">
              <span className="sr-only">Open menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <Popover.Group as="nav" className="hidden space-x-10 md:flex">
            <Link
              href="/dashboard"
              className="text-base font-medium text-gray-500 hover:text-indigo-900"
            >
              Dashboard
            </Link>
            <Link
              href="/income"
              className="text-base font-medium text-gray-500 hover:text-indigo-900"
            >
              Income
            </Link>
            <Link
              href="/expenses"
              className="text-base font-medium text-gray-500 hover:text-indigo-900"
            >
              Expenses
            </Link>
          </Popover.Group>
          <div className="hidden pr-10 items-center justify-end md:flex md:flex-1 lg:w-0">
            <Link
              href="/profile"
              className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-indigo-900"
            >
              Profile
            </Link>
            <button
              className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
              onClick={() => signOut()}
            >
              Sign out
            </button>
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden z-50"
        >
          <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
            <div className="px-5 pt-5 pb-6">
              <div className="flex items-center justify-between">
                <div>
                  <Image
                    className="h-20 w-auto"
                    src="/smallLogo.jpg"
                    alt="Track Your Income"
                  />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6 mx-0">
                <nav className="grid gap-y-8">
                  {userPages.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50"
                    >
                      <item.icon
                        className="h-6 w-6 flex-shrink-0 text-indigo-600"
                        aria-hidden="true"
                      />
                      <span className="ml-3 text-base font-medium text-indigo-900">
                        {item.name}
                      </span>
                    </Link>
                  ))}
                </nav>
              </div>
            </div>
            <div className="space-y-6 py-6 px-5">
              <div>
                <Link
                  href="/register"
                  className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-500 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-600"
                  onClick={() => signOut()}
                >
                  Sign Out
                </Link>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
