import React, { Fragment, useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(!active);
  };
  return (
    <Fragment>
      <nav className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
        <link
          href="https://cdn.jsdelivr.net/npm/daisyui@2.20.0/dist/full.css"
          rel="stylesheet"
          type="text/css"
        />
        <script src="https://cdn.tailwindcss.com"></script>
        <div className="max-w-6xl mx-auto px-3">
          <div className="flex justify-between">
            <div className="flex">
              {/* <!-- logo --> */}
              <div>
                <a
                  href="#"
                  className="flex items-center py-5 px-2 text-gray-700"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      className="font-bold text-white"
                      strokeLinejoin="round"
                      d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                    />
                  </svg>
                  <span className="font-bold text-white">Respira</span>
                </a>
              </div>
              {/* <!-- primary nav --> */}
              <div className="hidden md:flex items-center space-x-1">
                <a
                  href="/directorio"
                  className="py-2 px-5 text-white hover:text-gray-900"
                >
                  Directorio
                </a>
                <a
                  href="/ejercicios"
                  className="py-2 px-5 text-white hover:text-gray-900"
                >
                  Actividades
                </a>
              </div>
            </div>
            {/* <!-- secondary nav --> */}
            <div className="hidden md:flex items-center space-x-1">
              <a
                href="/dashboard"
                className="py-5 px-3 text-white hover:text-gray-900"
              >
                Login
              </a>
              <a
                href="/sign-up"
                className="py-2 px-3 bg-yellow-400 hover:bg-yellow-300 text-yellow-900 hover:text-yellow-800 rounded transition duration-300"
              >
                Registrarse
              </a>
            </div>
            {/* <!--       mobile button does here --> */}
            <div className="md:hidden flex items-center">
              <button
                className="mobile-menu-button inline-flex items-center justify-center p-2 rounded-md"
                onClick={handleClick}
                type="button"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div
          className={`${
            active ? "" : "hidden"
          } w-full lg:hidden lg:flex-grow lg:w-auto`}
        >
          <div className="lg:hidden lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto">
            <Link href="/directorio">
              <a className="lg:hidden w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:text-white ">
                Directorio
              </a>
            </Link>
            <Link href="/ejercicios">
              <a className="lg:hidden w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:text-white ">
                Actividades
              </a>
            </Link>
          </div>
        </div>
      </nav>
    </Fragment>
  );
};

export default Navbar;
