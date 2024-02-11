import BlogFeed from "./components/Blogs/BlogFeed";
import ScrollToTop from "./components/helpers/ScrollToTop";
import AnimatedPage from "./components/helpers/AnimatedPages";
import Footer from "./components/Footer/Footer";
import { portfolioClient } from "./portfolioClient";
import { useState } from "react";
import Skills from "./components/Skills/Main";
import Services from "./components/Services/Services";
import Loader from "./components/helpers/Loader";
import Hero from "./components/Hero/Hero";
import Header from "./components/Hero/Header";

function App({ session, funcTopNav, funcSideNav }) {
  funcTopNav(true);
  funcSideNav(false);
  const [_, setCvUrl] = useState();
  const [delay, setDelay] = useState(0);

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
  setTimeout(() => {
    setDelay(1);
  }, 2000);

  return delay === 0 ? (
    <Loader />
  ) : (
    <AnimatedPage>
      <div>
        <div className="relative bg-white dark:bg-slate-800">
          <Header />
          <Hero />
          <div className="sm:px-8 mt-16 md:mt-24">
            <div className="mx-auto max-w-7xl lg:px-8">
              <div className="relative px-4 sm:px-8 lg:px-12">
                <div className="mx-auto max-w-2xl lg:max-w-5xl">
                  <div className="grid max-w-xl grid-cols-1 gap-y-10 lg:max-w-none lg:grid-cols-2">
                    <BlogFeed session={session} />
                    {/* <div className="mt-24 space-y-6 lg:pl-12 xl:pl-18">
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
                            <span className="ml-3 mt-1">
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
                      </div> */}
                  </div>
                  <Services />
                  <Skills />
                </div>
              </div>
            </div>
          </div>
          <ScrollToTop />
          <Footer />
        </div>
      </div>
    </AnimatedPage>
  );
}

export default App;
