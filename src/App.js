import BlogFeed from "./components/BlogFeed";
import ScrollToTop from "./components/sub-components/ScrollToTop";
import AnimatedPage from "./components/AnimatedPages";
import { Typewriter } from "react-simple-typewriter";
import Footer from "./components/Footer";
import { portfolioClient } from "./portfolioClient";
import { useState } from "react";
import Skills from "./components/Skills";
import Services from "./components/Services";

function App({ session, funcTopNav, funcSideNav }) {
  funcTopNav(true);
  funcSideNav(false);
  const [cvUrl, setCvUrl] = useState();

  const certifications = [
    {
      Institution: "East West University",
      certificate: "Bachelor in CSE",
      logo: "https://i.imgur.com/ptq7E9Q.jpg",
      Issued: "2015-2020",
    },
    {
      Institution: "freeCodeCamp",
      certificate: "JS Algorithms and Data Structures",
      logo: "https://i.imgur.com/1FWhJeT.png",
      Issued: "December 9.2020",
    },
    {
      Institution: "freeCodeCamp",
      certificate: "Responsive Web Design",
      logo: "https://i.imgur.com/1FWhJeT.png",
      Issued: "February 3,2021",
    },
    {
      Institution: "freeCodeCamp",
      certificate: "Front End Development Libraries",
      logo: "https://i.imgur.com/1FWhJeT.png",
      Issued: "March 27,2021",
    },
    {
      Institution: "freeCodeCamp",
      certificate: "Back End Development and APIs",
      logo: "https://i.imgur.com/1FWhJeT.png",
      Issued: "June 12,2021",
    },
  ];
  const downloadCVUrl = () => {
    let { data, error } = portfolioClient.storage
      .from("image")
      .getPublicUrl("CV/CV of Sabbir Hossain.pdf");
    if (error) {
      console.log(error);
    } else {
      setCvUrl(data);
    }
  };

  return (
    <AnimatedPage>
      <div>
        <div>
          <div className="relative bg-white dark:bg-slate-800">
            <header className="pointer-events-none relative z-50 flex flex-col">
              {/* <div className="order-last mt-[calc(theme(spacing.16)-theme(spacing.3))]"></div> */}
              <div className="sm:px-8 top-0 order-last -mb-3 pt-3 mt-24">
                <div className="mx-auto max-w-7xl lg:px-8">
                  <div className="relative px-4 sm:px-8 lg:px-12">
                    <div className="mx-auto max-w-2xl lg:max-w-5xl">
                      <div className="relative">
                        <a
                          aria-label="Home"
                          className="block h-16 w-16 origin-left pointer-events-auto"
                          style={{
                            transform: "var(--avatar-image-transform)",
                          }}
                          href="#"
                        >
                          <img
                            alt=""
                            src="https://aliltdblkhwtxvwqhipo.supabase.co/storage/v1/object/public/image/avatar.png"
                            width="512"
                            height="512"
                            className="rounded-full bg-zinc-100 object-cover dark:bg-zinc-800 h-16 w-16"
                            style={{ color: "transparent" }}
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </header>
            <div style={{ height: "var(--content-offset)" }}></div>
            <main>
              <div className="sm:px-8 mt-9">
                <div className="mx-auto max-w-7xl lg:px-8">
                  <div className="relative px-4 sm:px-8 lg:px-12">
                    <div className="mx-auto max-w-2xl lg:max-w-5xl">
                      <div className="max-w-2xl">
                        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
                          <span>
                            <Typewriter
                              loop
                              cursor
                              cursorStyle="|"
                              typeSpeed={70}
                              deleteSpeed={50}
                              delaySpeed={1000}
                              cursorColor="rgb(20,184,166)"
                              words={[
                                "Front End Developer",
                                "Full Stack Developer",
                                "javaScript Developer",
                              ]}
                            />
                          </span>
                        </h1>
                        <p className="typingeffect mt-6 text-base text-zinc-600 dark:text-zinc-400">
                          Hello, I'm <span className="text-teal-500">Sabbir</span>, a
                          web developer based in Dhaka, Bangladesh. I have
                          experience building websites based on React JS, Next
                          JS and other cool frameworks. I love to learn new
                          things everyday.
                        </p>
                        <div className="mt-6 flex gap-6">
                          <a
                            className="group -m-1 p-1"
                            aria-label="Follow on GitHub"
                            href="https://github.com/Sabbirhossain97"
                          >
                            <svg
                              viewBox="0 0 24 24"
                              aria-hidden="true"
                              className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-teal-400"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M12 2C6.475 2 2 6.588 2 12.253c0 4.537 2.862 8.369 6.838 9.727.5.09.687-.218.687-.487 0-.243-.013-1.05-.013-1.91C7 20.059 6.35 18.957 6.15 18.38c-.113-.295-.6-1.205-1.025-1.448-.35-.192-.85-.667-.013-.68.788-.012 1.35.744 1.538 1.051.9 1.551 2.338 1.116 2.912.846.088-.666.35-1.115.638-1.371-2.225-.256-4.55-1.14-4.55-5.062 0-1.115.387-2.038 1.025-2.756-.1-.256-.45-1.307.1-2.717 0 0 .837-.269 2.75 1.051.8-.23 1.65-.346 2.5-.346.85 0 1.7.115 2.5.346 1.912-1.333 2.75-1.05 2.75-1.05.55 1.409.2 2.46.1 2.716.637.718 1.025 1.628 1.025 2.756 0 3.934-2.337 4.806-4.562 5.062.362.32.675.936.675 1.897 0 1.371-.013 2.473-.013 2.82 0 .268.188.589.688.486a10.039 10.039 0 0 0 4.932-3.74A10.447 10.447 0 0 0 22 12.253C22 6.588 17.525 2 12 2Z"
                              ></path>
                            </svg>
                          </a>
                          <a
                            className="group -m-1 p-1"
                            aria-label="Follow on LinkedIn"
                            href="https://www.linkedin.com/in/sabbir-hossain-b73726214/"
                          >
                            <svg
                              viewBox="0 0 24 24"
                              className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-teal-400"
                            >
                              <path d="M18.335 18.339H15.67v-4.177c0-.996-.02-2.278-1.39-2.278-1.389 0-1.601 1.084-1.601 2.205v4.25h-2.666V9.75h2.56v1.17h.035c.358-.674 1.228-1.387 2.528-1.387 2.7 0 3.2 1.778 3.2 4.091v4.715zM7.003 8.575a1.546 1.546 0 01-1.548-1.549 1.548 1.548 0 111.547 1.549zm1.336 9.764H5.666V9.75H8.34v8.589zM19.67 3H4.329C3.593 3 3 3.58 3 4.297v15.406C3 20.42 3.594 21 4.328 21h15.338C20.4 21 21 20.42 21 19.703V4.297C21 3.58 20.4 3 19.666 3h.003z"></path>
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="sm:px-8 mt-16 md:mt-24">
                <div className="mx-auto max-w-7xl lg:px-8">
                  <div className="relative px-4 sm:px-8 lg:px-12">
                    <div className="mx-auto max-w-2xl lg:max-w-5xl">
                      <div className=" grid max-w-xl grid-cols-1 gap-y-10 lg:max-w-none lg:grid-cols-2">
                        <BlogFeed session={session} />
                        <div className=" mt-24 space-y-6 lg:pl-12 xl:pl-18">
                          <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
                            <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                              <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                aria-hidden="true"
                                className="h-6 w-6 flex-none"
                              >
                                <path
                                  d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
                                  className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
                                ></path>
                                <path
                                  d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
                                  className="stroke-zinc-400 dark:stroke-zinc-500"
                                ></path>
                              </svg>
                              <span className="ml-3">
                                Education and Certifications
                              </span>
                            </h2>
                            <ol className="mt-6 space-y-4">
                              {certifications.map((item, key) => (
                                <li key={key} className="flex gap-4">
                                  <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                                    <img
                                      alt=""
                                      src={item.logo}
                                      width="32"
                                      height="32"
                                      decoding="async"
                                      data-nimg="future"
                                      className="rounded-full h-10 w-10"
                                      loading="lazy"
                                      style={{ color: "transparent" }}
                                    />
                                  </div>
                                  <dl className="flex flex-auto flex-wrap gap-x-2">
                                    <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                                      {item.certificate}
                                    </dd>

                                    <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                                      {item.Institution}
                                    </dd>

                                    <dd className="ml-auto text-xs text-zinc-400 dark:text-zinc-500">
                                      <span aria-hidden="true">
                                        {item.Issued}
                                      </span>
                                    </dd>
                                  </dl>
                                </li>
                              ))}
                            </ol>
                            <a
                              className="inline-flex items-center gap-2 justify-center rounded-md py-2 px-3 text-sm outline-offset-2 transition active:transition-none bg-zinc-50 font-medium text-zinc-900 hover:bg-zinc-100 active:bg-zinc-100 active:text-zinc-900/60 dark:bg-zinc-800/50 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-teal-400 dark:active:bg-zinc-800/50 dark:active:text-zinc-50/70 group mt-6 w-full"
                              href={cvUrl ? cvUrl.publicUrl : "#"}
                              target="_self"
                              onClick={(e) => downloadCVUrl(e)}
                              download
                            >
                              Download CV
                              <svg
                                viewBox="0 0 16 16"
                                fill="none"
                                aria-hidden="true"
                                className="animate-bounce h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-teal-400 dark:group-active:stroke-zinc-50"
                              >
                                <path
                                  d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                ></path>
                              </svg>
                            </a>
                          </div>
                        </div>
                      </div>
                      {/* services */}
                      <Services />
                      {/* skills */}
                      <div>
                        <Skills />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </main>
            <ScrollToTop />
            <Footer />
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
}

export default App;
