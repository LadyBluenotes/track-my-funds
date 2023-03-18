import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-white mt-auto">
      <div className="max-w-screen-xl px-4 py-5 mx-auto space-y-5 overflow-hidden sm:px-6 lg:px-8">
        <nav className="flex flex-wrap justify-center -mx-5 my-0">
          <div className="px-5 py-1">
            <a
              href="/about"
              className="text-base leading-6 text-gray-500 hover:text-indigo-900"
            >
              About
            </a>
          </div>
          <div className="px-4 py-1">
            <a
              href="/privacy"
              className="text-base leading-6 text-gray-500 hover:text-indigo-900"
            >
              Privacy
            </a>
          </div>
          <div className="px-4 py-1">
            <a
              href="https://github.com/LadyBluenotes/track-my-funds"
              className="text-base leading-6 text-gray-500 hover:text-indigo-900"
            >
              GitHub
            </a>
          </div>
          <div className="px-4 py-1">
            <a
              href="/contact"
              className="text-base leading-6 text-gray-500 hover:text-indigo-900"
            >
              Contact
            </a>
          </div>
        </nav>
        <p className="mt-5 text-base leading-6 text-center text-gray-400">
          © 2023 Track My Funds. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
