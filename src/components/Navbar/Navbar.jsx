import React from "react";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { CloseIcon, DarkThemeIcon, MenuIcon, LightThemeIcon } from "../SVG/SvgComponents";

export default function Navbar() {
  const location = useLocation();
  const [openMenuIcon, setOpenMenuIcon] = useState(false);
  const [dark, setDark] = useState(true);

  const navigation = [
    {
      Name: "Home",
      Link: "/",
      isSession: false,
      property: "end",
      navLinkStyles: ({ isActive }) => {
        return {
          color: isActive ? dark ? "rgb(20,184,166)" : "rgb(56,189,248)" : dark ? "white" : "black",
        };
      },
    },
    {
      Name: "About",
      Link: "/about",
      isSession: false,
      property: "end",
      navLinkStyles: ({ isActive }) => {
        return {
          color: isActive ? dark ? "rgb(20,184,166)" : "rgb(56,189,248)" : dark ? "white" : "black",
        };
      },
    },
    {
      Name: "Projects",
      Link: "/projects",
      isSession: false,
      navLinkStyles: ({ isActive }) => {
        return {
          color: isActive ? dark ? "rgb(20,184,166)" : "rgb(56,189,248)" : dark ? "white" : "black",
        };
      },
    },
    {
      Name: "Contact",
      Link: "/contact",
      isSession: false,
      navLinkStyles: ({ isActive }) => {
        return {
          color: isActive ? dark ? "rgb(20,184,166)" : "rgb(56,189,248)" : dark ? "white" : "black",
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

  return (
    <div >
      <nav id="navbar" className="shadow-md bg-white dark:bg-slate-800 z-[1000] fixed top-0 left-0 right-0">
        <div className="mx-auto max-w-7xl sm:px-12 lg:px-6 bg-opacity-50">
          <div className="flex h-20 py-2 items-center justify-between px-5">
            <div className="flex md:ml-[80px]">
              <div className="flex-shrink-0 sm:hidden ">
                <button className="rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 px-1 py-1 transition duration-300">
                  {openMenuIcon ? (
                    <CloseIcon setOpenMenuIcon={setOpenMenuIcon} />
                  ) : (
                    <MenuIcon setOpenMenuIcon={setOpenMenuIcon} />
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
                      <li key={key} className="list-none hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md p-0.5 transition duration-300">
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
                    <DarkThemeIcon />
                  ) : (
                    <LightThemeIcon />
                  )}
                </button>
                <div className="relative ml-3"></div>
              </div>
            </div>
          </div>
        </div>
        <div className={openMenuIcon ? "translate-y-2 opacity-100 transition-height duration-300 pb-2" : "translate-y-0 opacity-0 transition-height duration-300"}>
          {navigation.map((item, key) =>
            item.isSession ? (
              ""
            ) : (
              <li key={key} className="list-none hover:bg-gray-100 dark:hover:bg-slate-700 rounded-md p-0.5 transition duration-300">
                <NavLink
                  key={key}
                  to={item.Link}
                  className={`rounded-md px-3 py-2 text-base font-medium text-gray-300 ${openMenuIcon ? "block" : "hidden"}`}
                  style={item.navLinkStyles}
                  end
                >
                  {item.Name}
                </NavLink>
              </li>
            )
          )}
        </div>
      </nav>
    </div>
  );
}
