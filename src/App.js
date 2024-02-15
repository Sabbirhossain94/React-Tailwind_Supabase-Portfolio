import BlogFeed from "./components/Blogs/BlogFeed";
import ScrollToTop from "./components/helpers/ScrollToTop";
import AnimatedPage from "./components/helpers/AnimatedPages";
import Footer from "./components/Footer/Footer";
import { useState } from "react";
import Skills from "./components/Skills/Main";
import Services from "./components/Services/Services";
import Loader from "./components/helpers/Loader";
import Hero from "./components/Hero/Hero";
import Header from "./components/Hero/Header";
import AboutMe from "./components/About Me/AboutMe";

function App({ funcTopNav, funcSideNav }) {
  funcTopNav(true);
  funcSideNav(false);
  const [delay, setDelay] = useState(0);

  setTimeout(() => {
    setDelay(1);
  }, 2000);

  return delay === 0 ? (
    <Loader />
  ) : (
    <AnimatedPage>
      <div className="relative bg-white dark:bg-slate-800">
        <Header />
        <Hero />
        <AboutMe />
        <Services />
        <Skills />
        <BlogFeed />
        <ScrollToTop />
        <Footer />
      </div>
    </AnimatedPage>
  );
}

export default App;
