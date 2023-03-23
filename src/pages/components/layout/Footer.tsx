import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white mt-auto">
      <div className="max-w-screen-xl px-4 py-5 mx-auto space-y-5 overflow-hidden sm:px-6 lg:px-8">
        <nav className="flex flex-wrap justify-center -mx-5 my-0">
          <div className="px-5 py-1">
            <Link
              href="/about"
              className="text-base leading-6 text-gray-500 hover:text-indigo-900"
            >
              About
            </Link>
          </div>
          <div className="px-4 py-1">
            <Link
              href="/privacy"
              className="text-base leading-6 text-gray-500 hover:text-indigo-900"
            >
              Privacy
            </Link>
          </div>
          <div className="px-4 py-1">
            <Link
              href="https://github.com/LadyBluenotes/track-my-funds"
              className="text-base leading-6 text-gray-500 hover:text-indigo-900"
            >
              GitHub
            </Link>
          </div>
          <div className="px-4 py-1">
            <Link
              href="/contact"
              className="text-base leading-6 text-gray-500 hover:text-indigo-900"
            >
              Contact
            </Link>
          </div>
        </nav>
        <p className="mt-5 text-base leading-6 text-center text-gray-400">
          © 2023 Track My Funds. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
