
"use client"
import React, { useState } from "react";
import { Image } from "@nextui-org/react";

export default function NavbarComponent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="bg-blue-900 dark:bg-blue-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 text-white">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 relative">
          <a
            href="https://istad.co/"
            className="flex items-center space-x-3 rtl:space-x-reverse max-md:order-2"
          >
            <Image
              className="h-10"
              alt="NextUI hero Image"
              src="https://istad.co/resources/img/CSTAD_120.png"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              CSTAD
            </span>
          </a>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
        
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm font-bold rounded-lg md:hidden text-white"
              aria-controls="navbar-sticky"
              aria-expanded={isMenuOpen ? "true" : "false"}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className={`${
              isMenuOpen ? "block" : "hidden"
            } md:flex md:w-auto md:order-1 absolute top-full left-0 w-full bg-blue-900 md:relative md:bg-transparent md:block`}
            id="navbar-sticky"
          >
          <ul className="flex flex-col p-4 font-bold  text-white bg-blue-900 md:p-0 mt-4 border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  dark:border-gray-700">
              <li>
                <a
                  href="Navbar."
                  className="block py-2 px-3 font-bold hover:bg-gray-400  hover:text-gray-900  text-white rounded md:bg-transparent "
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="block py-2 px-3 font-bold hover:bg-gray-400  hover:text-gray-900  text-white rounded hover:bg-gray-100 md:hover:bg-transparent  dark:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Enroll
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 font-bold  text-white rounded md:hover:bg-transparent hover:bg-gray-400  hover:text-gray-900   dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Course
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 font-bold  px-3 text-white rounded hover:bg-gray-400  hover:text-gray-900 md:hover:bg-transparent dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  New  IT
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-white hover:bg-gray-400  hover:text-gray-900  rounded font-bold md:hover:bg-transparent  dark:text-white dark:hover:text-white  dark:border-gray-700"
                >
                 Job Opportunity
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block font-bold py-2 px-3text-white rounded hover:bg-gray-400  hover:text-gray-900  hover:bg-gray-100 md:hover:bg-transparent  dark:text-white dark:hover:text-white  dark:border-gray-700"
                >
                About Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
