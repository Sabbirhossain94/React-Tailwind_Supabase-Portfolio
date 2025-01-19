import { MdDashboard } from "react-icons/md";
import { PiSignOutBold } from "react-icons/pi";

export const menuItems = (session, handleDashboard, handleSignOut) => [
    {
        label: (
            <div className="font-sans flex flex-col justify-center items-center">
                <p className="font-sans font-medium flex items-center gap-2 rounded-md text-sm outline-offset-2 transition duration-300 group">
                    Signed in as
                </p>
                <p className="text-zinc-600/80 text-[12px]">
                    {session?.user?.email}
                </p>
            </div>
        ),
        key: '0',
        style: { backgroundColor: 'transparent', cursor: 'default' },
    },
    {
        type: 'divider',
    },
    {
        label: (
            <button onClick={handleDashboard} className="font-sans flex items-center gap-2 rounded-md text-md outline-offset-2 transition duration-300 hover:text-sky-400 dark:hover:text-teal-500 font-medium group">
                <MdDashboard className="text-sky-400 text-lg dark:text-teal-500" />
                Dashboard
            </button>
        ),
        key: '1',
        style: { backgroundColor: 'transparent', padding: "10px 10px 5px 10px" },
    },
    {
        type: 'divider',
    },
    {
        label: (
            <button onClick={handleSignOut} className="font-sans flex items-center gap-2 rounded-md text-md outline-offset-2 transition duration-300 font-medium text-zinc-900 hover:text-sky-400 dark:hover:text-teal-500 group">
                <PiSignOutBold className="text-sky-400 text-lg dark:text-teal-500" />
                Sign out
            </button>
        ),
        key: '2',
        style: { backgroundColor: 'transparent', padding: "5px 10px 10px 10px" },
    },
];