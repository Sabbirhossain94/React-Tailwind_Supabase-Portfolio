import { useState, useRef } from "react";
import { emailService } from "../../../services/email";
import { Spinner } from "../../SVG/SvgComponents";
import toast from "react-hot-toast";

export default function Contact() {

  const form = useRef();
  const [loading, setLoading] = useState(false)

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await emailService(form);
      form.current.reset();
      toast.success("Email sent successfully!", {
        position: "top-right",
        style: {

        }
      })
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false);
    }

  };

  return (
    <div>
      <div className="bg-white dark:bg-slate-800 mt-32">
        <main className="overflow-hidden">
          <div className=" mt-[50px] relative bg-white dark:bg-slate-800">
            <div className=" mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="relative ">
                <h4 className="text-warm-gray-900 lg:hidden text-center dark:border-sky-500 text-lg font-medium dark:text-white">Send me a message</h4>
                <h2 className="text-warm-gray-900 lg:hidden text-center dark:border-sky-500 text-4xl font-medium dark:text-white">Contact Me</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-8">

                  {/* left section */}
                  <div data-aos="zoom-in" className="rounded-md flex justify-center relative overflow-hidden col-span-1">
                    <img src="assets/contact.png" alt="contact" className="w-full h-auto object-cover aspect-auto" />
                  </div>

                  {/* Contact form ,right section */}
                  <div data-aos="fade-left" className="dark:bg-slate-800 lg:py-10 px-10 lg:px-0 col-span-1">
                    <h3 className="text-warm-gray-900 hidden lg:block dark:border-sky-500 text-xl font-medium dark:text-white">
                      Send me a message
                    </h3>
                    <form
                      ref={form}
                      onSubmit={sendEmail}
                      className=" mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
                    >
                      <div>
                        <label
                          htmlFor="first_name"
                          className="text-warm-gray-900 block text-sm font-medium dark:text-white"
                        >
                          First name
                        </label>
                        <div className="mt-1">
                          <input
                            type="text"
                            name="first_name"
                            id="first_name"
                            autoComplete="given-name"
                            className="bg-zinc-100 dark:bg-slate-500/20 ring-sky-400 mt-[10px]  dark:text-white block w-full rounded-md py-3 px-4 shadow-sm"
                            required
                          />
                        </div>
                      </div>
                      <div>
                        <label
                          htmlFor="last_name"
                          className="text-warm-gray-900 block text-sm font-medium dark:text-white"
                        >
                          Last name
                        </label>
                        <div className="mt-1">
                          <input
                            type="text"
                            name="last_name"
                            id="last_name"
                            autoComplete="family-name"
                            className="bg-zinc-100 dark:bg-slate-500/20 ring-sky-400 mt-[10px]  dark:text-white block w-full rounded-md py-3 px-4 shadow-sm"
                            required
                          />
                        </div>
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="text-warm-gray-900 block text-sm font-medium dark:text-white"
                        >
                          Email
                        </label>
                        <div className="mt-1">
                          <input
                            id="email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            className="bg-zinc-100 dark:bg-slate-500/20 ring-sky-400 mt-[10px]  dark:text-white block w-full rounded-md py-3 px-4 shadow-sm"
                            required
                          />
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between">
                          <label
                            htmlFor="phone"
                            className="text-warm-gray-900 block text-sm font-medium dark:text-white"
                          >
                            Phone (Optional)
                          </label>
                        </div>
                        <div className="mt-1">
                          <input
                            type="tel"
                            name="phone"
                            id="phone"
                            autoComplete="tel"
                            className="bg-zinc-100 dark:bg-slate-500/20 ring-sky-400 mt-[10px]  dark:text-white block w-full rounded-md py-3 px-4 shadow-sm"
                            aria-describedby="phone-optional"
                          />
                        </div>
                      </div>
                      <div className="sm:col-span-2">
                        <label
                          htmlFor="subject"
                          className="text-warm-gray-900 block text-sm font-medium dark:text-white"
                        >
                          Subject
                        </label>
                        <div className="mt-1">
                          <input
                            type="text"
                            name="subject"
                            id="subject"
                            className="bg-zinc-100 dark:bg-slate-500/20 ring-sky-400 mt-[10px]  dark:text-white block w-full rounded-md py-3 px-4 shadow-sm"
                            required
                          />
                        </div>
                      </div>
                      <div className="sm:col-span-2">
                        <div className="flex justify-between">
                          <label
                            htmlFor="message"
                            className="text-warm-gray-900 block text-sm font-medium dark:text-white"
                          >
                            Message
                          </label>
                        </div>
                        <div className="mt-1">
                          <textarea
                            id="message"
                            name="message"
                            rows="4"
                            className="bg-zinc-100 resize-none dark:bg-slate-500/20 ring-sky-400 mt-[10px]  dark:text-white block w-full rounded-md py-3 px-4 shadow-sm"
                            aria-describedby="message-max"
                            required
                          ></textarea>
                        </div>
                      </div>
                      <div className="sm:col-span-2 sm:flex sm:justify-end">
                        <button
                          type="submit"
                          className="inline-flex items-center gap-2 justify-center rounded-md py-3 px-8 text-sm outline-offset-2 transition active:transition-none bg-zinc-200 font-medium text-zinc-900 hover:text-sky-400 hover:bg-zinc-200/50 active:bg-zinc-100 active:text-zinc-900/60 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-900/50 dark:hover:text-teal-500 dark:active:bg-zinc-800/50 dark:active:text-zinc-50/70 group mt-2 w-1/4"
                        >
                          {loading ? <><Spinner /> Processing...</> : "Submit"}
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
