import "../../src/animation.css";
import React from "react";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function Navigation({ session }) {
  const location = useLocation();
  const [openMenuIcon, setOpenMenuIcon] = useState(false);
  const [dark, setDark] = useState(true);
  
  const navigation = [
    {
      Name: "About",
      Link: "/",
      isSession: false,
      property: "end",
      navLinkStyles: ({ isActive }) => {
        return {
          color: isActive ? "rgb(20,184,166)" : dark ? "white" : "black",
        };
      },
    },
    {
      Name: "Projects",
      Link: "/projects",
      isSession: false,
      navLinkStyles: ({ isActive }) => {
        return {
          color: isActive ? "rgb(20,184,166)" : dark ? "white" : "black",
        };
      },
    },
    {
      Name: "Contact",
      Link: "/contact",
      isSession: false,
      navLinkStyles: ({ isActive }) => {
        return {
          color: isActive ? "rgb(20,184,166)" : dark ? "white" : "black",
        };
      },
    },
    {
      Name: "Sign In",
      Link: "/sign",
      isSession: true,
      navLinkStyles: ({ isActive }) => {
        return {
          color: isActive ? "rgb(56,189,248)" : "white",
        };
      },
    },
    {
      Name: "Account",
      Link: "/account",
      isSession: true,
      navLinkStyles: ({ isActive }) => {
        return {
          color: isActive ? "rgb(56,189,248)" : "white",
        };
      },
    },
    {
      Name: "Dashboard",
      Link: "/dashboard",
      isSession: true,
      navLinkStyles: ({ isActive }) => {
        return {
          color: isActive ? "rgb(56,189,248)" : "white",
        };
      },
    },
  ];

  useEffect(() => {
    if (dark) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [dark]);

  useEffect(() => {
    setOpenMenuIcon(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const navbar = document.getElementById('navbar');

      if (scrollPosition > 0) {
        navbar.classList.add('blur-background backdrop-blur-md');
      } else {
        navbar.classList.remove('blur-background');
      }
    };
    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div >
      <nav id="navbar" className="shadow-md bg-white dark:bg-slate-800 z-[1000] fixed top-0 left-0 right-0">
        <div className="mx-auto max-w-7xl sm:px-12 lg:px-6 bg-opacity-50">
          <div className="flex h-20 items-center justify-between px-5">
            <div className="flex md:ml-[80px]">
              <div className="flex-shrink-0 sm:hidden">
                <button className="rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 px-1 py-1 transition duration-300">
                  {openMenuIcon ? (
                    <svg
                      onClick={() => setOpenMenuIcon(false)}
                      xmlns="http://www.w3.org/2000/svg"
                      color="black"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-8 h-8 dark:text-white"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  ) : (
                    <svg
                      onClick={() => setOpenMenuIcon(true)}
                      className="dark:text-white block h-8 w-8"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                      />
                    </svg>
                  )}
                </button>
              </div>
              <div className=" flex items-center">
                <h1 className="ml-4 sm:ml-0 font-poppins font-semibold tracking-[1px] dark:text-white text-xl sm:text-2xl">Sabbir Hossain</h1>
              </div>
            </div>
            <div className="sm:ml-6 flex items-center justify-end">
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4 ">
                  {navigation.map((item, key) =>
                    item.isSession ? (
                      ""
                    ) : (
                      <li key={key} className="list-none hover:bg-slate-700 rounded-md p-0.5 transition duration-300">
                        <NavLink
                          key={item.id}
                          to={item.Link}
                          className=" px-3 py-2 text-md "
                          style={item.navLinkStyles}
                          end
                        >
                          {item.Name}
                        </NavLink>
                      </li>
                    )
                  )}
                </div>
              </div>
              <div className="ml-4 items-center">
                <button
                  type="button"
                  onClick={() => setDark(!dark)}
                  aria-label="Toggle dark mode"
                  className="rounded-md px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition duration-300"
                >
                  {dark ? (
                    <svg
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      className=" stroke-sky-500 h-6 w-6"
                    >
                      <path
                        d="M17.25 16.22a6.937 6.937 0 0 1-9.47-9.47 7.451 7.451 0 1 0 9.47 9.47ZM12.75 7C17 7 17 2.75 17 2.75S17 7 21.25 7C17 7 17 11.25 17 11.25S17 7 12.75 7Z"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  ) : (
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-6 h-6"
                    >
                      <path
                        d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                        className="fill-sky-400/20 stroke-sky-500"
                      ></path>
                      <path
                        d="M12 4v1M17.66 6.344l-.828.828M20.005 12.004h-1M17.66 17.664l-.828-.828M12 20.01V19M6.34 17.664l.835-.836M3.995 12.004h1.01M6 6l.835.836"
                        className="stroke-sky-500"
                      ></path>
                    </svg>
                  )}
                </button>
                <div className="relative ml-3"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="sm:hidden">
          <div className={openMenuIcon ? "slide-down " : "slide-up"}>
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item, key) =>
                item.isSession ? (
                  ""
                ) : (
                  <li key={key} className="list-none hover:bg-gray-100 dark:hover:bg-slate-700 rounded-md p-0.5 transition duration-300">
                  <NavLink
                    key={key}
                    to={item.Link}
                    className={`rounded-md px-3 py-2 text-base font-medium text-gray-300 ${openMenuIcon ? "block": "hidden"}`}
                    style={item.navLinkStyles}
                    end
                  >
                    {item.Name}
                  </NavLink>
                  </li>
                )
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
