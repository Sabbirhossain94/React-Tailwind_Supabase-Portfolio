import { useEffect, useState } from "react";
import BlogFeed from "./components/Blogs/BlogFeed";
import ScrollToTop from "./components/helpers/ScrollToTop";
// import Footer from "./components/Footer/Footer";
import Skills from "./components/Skills/Skills";
import Services from "./components/Services/Services";
import Loader from "./components/helpers/Loader";
import Hero from "./components/Hero/Hero";
import AboutMe from "./components/About Me/AboutMe";
import useAOS from "./hooks/useAOS";

function App({ funcTopNav, funcSideNav }) {
  useAOS();
  funcTopNav(true);
  funcSideNav(false);
  const [delay, setDelay] = useState(0);

  setTimeout(() => {
    setDelay(1);
  }, 2000);

  return delay === 0 ? (
    <Loader />
  ) : (
    <div className="relative bg-white dark:bg-slate-800 overflow-hidden">
      <Hero />
      <AboutMe />
      <Services />
      <Skills />
      <BlogFeed />
      <ScrollToTop />
    </div>
  );
}

export default App;
