import { useState } from "react";
import { portfolioClient } from "../../../services/portfolioClient";
import { Link } from "react-router-dom";
import { MdVisibility } from "react-icons/md";
import { MdVisibilityOff } from "react-icons/md";
import { signInUser } from "../../../services/signin";
import { resetPass } from "../../../services/resetPass";
import Spinner from "../../helpers/Spinner";
import { Modal } from 'antd';

export default function Sign({ session }) {

  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  })
  const [showVisibility, setShowVisibility] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    await signInUser(formData, setLoading)
  };

  const resetPassword = () => {
    setIsModalOpen(true)
  }

  const handleOk = async () => {
    setIsModalOpen(false);
    try {
      setLoading(true)
      await resetPass(formData.email)
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false);
      setFormData({ ...formData, email: "" })
    }
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  // const handleLogin = async (e) => {
  //   e.preventDefault();
  //   setLoading(true);
  //   const { error } = await portfolioClient.auth.signInWithOtp({ email });
  //   if (error) {
  //     console.log(error);
  //   } else {
  //     console.error("error")
  //   }
  // };

  return (
    <div className="h-screen flex items-center">
      <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel} zIndex={3000}>

        <h2 className="text-lg font-semibold">Forgot your password?</h2>
        <p className='text-gray-900 text-md mt-2'>Enter your email address to get password reset link</p>
        <div className="mt-4">
          <label
            htmlFor="email"
            className="block text-md font-medium text-slate-900"
          >
            Email address
          </label>
          <input
            required
            id="email"
            className="mt-2 block w-full dark:text-gray-400 appearance-none bg-zinc-100 dark:bg-slate-500/20 dark:border-gray-200/20 px-3 py-2 placeholder:text-zinc-500 dark:placeholder:text-gray-500 shadow-sm sm:text-sm rounded-md"
            type="email"
            placeholder="Your email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
        </div>
      </Modal>
      {session ? (
        <div className="flex justify-center">
          <button
            onClick={() => {
              portfolioClient.auth.signOut();
            }}
            className="flex w-[100px] justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Sign Out
          </button>
        </div>
      ) : (
        <div className="mx-auto w-full px-6 md:px-0 md:max-w-lg">
          <div className="bg-white dark:bg-slate-800 py-8 px-4 border border-zinc-200 dark:border-zinc-700/80 rounded-lg">
            <h2 className="text-center text-2xl font-bold tracking-tight dark:text-white text-slate-900">
              Sign In
            </h2>
            <p className="text-center dark:text-gray-400 mt-2">Don't have an account? <Link to='/signup'><span className="text-blue-500 dark:text-teal-500 underline">Sign up</span></Link></p>
            <div className="mt-6 px-2">
              <form
                onSubmit={handleLogin}
              >
                <div>
                  <label
                    htmlFor="email"
                    className="block text-md font-medium dark:text-white text-slate-900"
                  >
                    Email address
                  </label>
                  <input
                    required
                    id="email"
                    className="mt-2 block w-full dark:text-gray-400 appearance-none bg-zinc-100 dark:bg-slate-500/20 dark:border-gray-200/20 px-3 py-2 placeholder:text-zinc-500 dark:placeholder:text-gray-500 shadow-sm sm:text-sm rounded-md"
                    type="email"
                    placeholder="Your email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
                <div className="mt-4 relative">
                  <label
                    htmlFor="password"
                    className="block text-md font-medium dark:text-white text-slate-900"
                  >
                    Password
                  </label>
                  <input
                    required
                    id="password"
                    className="mt-2 block w-full dark:text-gray-400 appearance-none bg-zinc-100 dark:bg-slate-500/20 px-3 py-2 placeholder:text-zinc-500 dark:placeholder:text-gray-500 shadow-sm sm:text-sm rounded-md"
                    type={showVisibility ? "text" : "password"}
                    placeholder="Your password"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  />
                  {showVisibility ?
                    <MdVisibility onClick={() => setShowVisibility(!showVisibility)} className="cursor-pointer text-gray-500 absolute right-2 top-11" /> :
                    <MdVisibilityOff onClick={() => setShowVisibility(!showVisibility)} className="cursor-pointer text-gray-500 absolute right-2 top-11" />
                  }
                </div>
                <div className="text text-right mt-4">
                  <button
                    type="button"
                    onClick={resetPassword}
                    className="text-blue-500 dark:text-teal-500 underline cursor-pointer">Forgot your password?</button>
                </div>
                <div className="mt-6">
                  <button className="flex items-center gap-2 w-full justify-center transition duration-300 bg-zinc-100 dark:bg-zinc-800 py-2 px-4 text-sm font-medium text-zinc-900 hover:text-sky-400 dark:text-white dark:hover:text-teal-500 shadow-sm hover:bg-zinc-200/50 dark:hover:bg-zinc-900/50 focus:outline-none focus:ring-2 focus:ring-zinc-300 dark:focus:ring-teal-500 rounded-md">
                    {loading ? <><Spinner />Processing...</> : "Sign In"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
