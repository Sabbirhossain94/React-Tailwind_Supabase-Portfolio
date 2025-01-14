import { useEffect, useState } from "react";
import { NavLink, useLocation, Link, useNavigate } from "react-router-dom";
import { CloseIcon, DarkThemeIcon, MenuIcon, LightThemeIcon } from "../../../components/SVG/SvgComponents";
import { navigation } from "../../../helpers/navigation";
import { useDarkMode } from "../../../hooks/useDarkMode";
import { AnimatedMenuBar } from "../../helpers/AnimatedItems";
import { AnimatePresence } from "framer-motion";
import { AiOutlineUser } from "react-icons/ai";
import { Dropdown } from 'antd';
import { menuItems } from "../../../helpers/userMenu";

export default function Navbar({ session }) {
  const location = useLocation();
  const [openMenuIcon, setOpenMenuIcon] = useState(false);
  const { dark, setDark } = useDarkMode()
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    setOpenMenuIcon(false);
  }, [location.pathname]);

  const handleDashboard = () => {
    navigate("/dashboard")
  }

  const items = menuItems(session, handleDashboard)

  return (
    <div className="fixed left-0 right-0 top-20 z-[2000] bg-white dark:bg-slate-800/50">
      <nav className="mx-auto max-w-7xl px-4 py-2 sm:px-10 xl:px-24 bg-opacity-50 backdrop-blur-xl fixed -top-5 custom:-top-2 left-0 right-0">
        <div className="flex h-12 mt-6 items-start justify-between">
          <div className="flex gap-6">
            <div className="flex-shrink-0 custom:hidden">
              <button className="rounded-md py-2 transition duration-300">
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
            <div className="hidden custom:block">
              <div className="flex items-center space-x-4">
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
                {!session ?
                  <li
                    className="list-none rounded-md p-0.5 transition duration-300"
                  >
                    <Link to="/signin">
                      <button className="inline-flex items-center gap-2 justify-center rounded-md py-2 px-24 md:px-8 text-md outline-offset-2 transition duration-300 active:transition-none bg-zinc-100 font-medium text-zinc-900 hover:text-sky-400 hover:bg-zinc-200/50 active:bg-zinc-100 active:text-zinc-900/60 dark:bg-zinc-800 dark:text-white dark:hover:bg-zinc-900/50 dark:hover:text-teal-500 dark:active:bg-zinc-800/50 dark:active:text-zinc-50/70 group">
                        Sign In
                      </button>
                    </Link>
                  </li>
                  :
                  <li
                    className="list-none rounded-md mt-1 transition duration-300"
                  >
                    <Dropdown
                      menu={{
                        items,
                      }}
                      trigger={['click']}
                      overlayStyle={{ zIndex: 2500, marginTop: "15px" }}
                    >
                      <button>
                        <AiOutlineUser className="text-xl hover:text-sky-400 hover:dark:text-teal-500 transition duration-300 dark:text-white rounded-full" />
                      </button>
                    </Dropdown>
                  </li>
                }
              </div>
            </div>
            <div className="ml-4 items-center">
              <button
                type="button"
                onClick={() => setDark(!dark)}
                className="rounded-md px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition duration-300"
              >
                {dark ? (
                  <DarkThemeIcon />
                ) : (
                  <LightThemeIcon />
                )}
              </button>
            </div>
          </div>
        </div>
        <AnimatePresence>
          {openMenuIcon &&
            <AnimatedMenuBar>
              <div className="space-y-4 px-2 py-4 w-full custom:hidden">
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
            </AnimatedMenuBar>
          }
        </AnimatePresence >
      </nav>
    </div>
  );
}
