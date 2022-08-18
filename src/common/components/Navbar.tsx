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
        <div className="max-w-6xl px-3 mx-auto">
          <div className="flex justify-between">
            <div className="flex">
              {/* <!-- logo --> */}
              <div className="pl-2">
                <a
                  href="/dashboard"
                  className="flex items-center px-2 py-5 text-gray-700"
                >
                  <img
                    height="40px"
                    width="40px"
                    src="https://i.ibb.co/d4wbv3j/iguess-1.png"
                    alt=""
                  />
                  <span className="pl-4 font-bold text-white">Respira</span>
                </a>
              </div>
              {/* <!-- primary nav --> */}
              <div className="items-center hidden space-x-1 md:flex">
                <a
                  href="/dashboard/directorio"
                  className="px-5 py-2 text-white hover:text-gray-900"
                >
                  Directorio
                </a>
                <a
                  href="/dashboard/ejercicios"
                  className="px-5 py-2 text-white hover:text-gray-900"
                >
                  Actividades
                </a>
                <a
                  href="/dashboard/news"
                  className="px-5 py-2 text-white hover:text-gray-900"
                >
                  Noticias
                </a>
                <a
                  href="/dashboard/aboutus"
                  className="px-5 py-2 text-white hover:text-gray-900"
                >
                  Nosotros
                </a>
              </div>
            </div>
            {/* <!-- secondary nav --> */}
            <div className="items-center hidden px-4 space-x-1 md:flex">
              <a
                href="/dashboard"
                className="px-3 py-2 font-bold text-yellow-900 transition duration-300 bg-yellow-400 rounded hover:bg-yellow-300 hover:text-yellow-800"
              >
                Inicio
              </a>
            </div>
            {/* <!--       mobile button does here --> */}
            <div className="flex items-center md:hidden">
              <button
                className="inline-flex items-center justify-center p-2 rounded-md mobile-menu-button"
                onClick={handleClick}
                type="button"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
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
          <div className="flex flex-col items-start w-full lg:hidden lg:ml-auto lg:w-auto lg:items-center lg:h-auto">
            <Link href="/dashboard/directorio">
              <a className="items-center justify-center w-full px-3 py-2 font-bold text-white rounded lg:hidden hover:text-white ">
                Directorio
              </a>
            </Link>
            <Link href="dashboard/ejercicios">
              <a className="items-center justify-center w-full px-3 py-2 font-bold text-white rounded lg:hidden hover:text-white ">
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
