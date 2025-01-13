import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { CloseIcon, DarkThemeIcon, MenuIcon, LightThemeIcon } from "../SVG/SvgComponents";
import { navigation } from "../../helpers/navigation";
import { useDarkMode } from "../../hooks/useDarkMode";
import AnimatedPage from "../helpers/AnimatedPages";
import { AnimatePresence } from "framer-motion";

export default function Navbar() {
  const location = useLocation();
  const [openMenuIcon, setOpenMenuIcon] = useState(false);
  const { dark, setDark } = useDarkMode()
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    setOpenMenuIcon(false);
  }, [location.pathname]);

  return (
    <div className="fixed left-0 right-0 top-20 z-[2000] bg-white dark:bg-slate-800/50">
      <nav className="mx-auto max-w-7xl px-4 py-2 sm:px-10 xl:px-24 bg-opacity-50 backdrop-blur-md fixed -top-4 left-0 right-0">
        <div className="flex h-12 mt-6 items-start justify-between">
          <div className="flex gap-6">
            <div className="flex-shrink-0 md:hidden">
              <button className="rounded-md hover:text-sky-400 dark:hover:text-teal-500 py-1 transition duration-300">
                {openMenuIcon ? (
                  <CloseIcon setOpenMenuIcon={setOpenMenuIcon} />
                ) : (
                  <MenuIcon setOpenMenuIcon={setOpenMenuIcon} />
                )}
              </button>
            </div>
            <div className="flex items-center">
              <h1 className="font-poppins font-semibold whitespace-nowrap tracking-[1px] dark:text-white text-xl sm:text-2xl">Sabbir Hossain</h1>
            </div>
          </div>
          <div className="flex items-center justify-end">
            <div className="hidden md:block">
              <div className="flex space-x-4 ">
                {navigation.map((item, key) =>
                (
                  <li
                    key={key}
                    className="list-none rounded-md p-0.5 transition duration-300"
                    onMouseEnter={() => setHoveredIndex(key)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    <NavLink
                      key={item.id}
                      to={item.Link}
                      className="px-3 py-2 text-md hover:text-sky-400"
                      style={({ isActive }) =>
                        item.navLinkStyles({
                          isActive,
                          dark,
                          isHovering: hoveredIndex === key,
                        })
                      }
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
        <AnimatePresence>
          {openMenuIcon &&
            <AnimatedPage>
              <div className="space-y-4 px-2 py-4 w-full md:hidden">
                {navigation.map((item, key) =>
                (
                  <li
                    key={key}
                    className="list-none rounded-md"
                    onMouseEnter={() => setHoveredIndex(key)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    <NavLink
                      key={key}
                      to={item.Link}
                      className={`rounded-md py-2 text-base font-medium text-gray-300`}
                      style={({ isActive }) =>
                        item.navLinkStyles({ isActive, dark, isHovering: hoveredIndex === key })
                      }
                      end
                    >
                      {item.Name}
                    </NavLink>
                  </li>
                )
                )}
              </div>
            </AnimatedPage>
          }
        </AnimatePresence >
      </nav>
    </div>
  );
}
