import BlogFeed from "./BlogFeed";
import Skills from "./Skills";
import Services from "./Services";
import Hero from "./Hero";
import AboutMe from "../About/AboutMe";

function Home() {
  return (
    <div className="relative bg-white dark:bg-slate-800 overflow-hidden">
      <Hero />
      <AboutMe />
      <Services />
      <Skills />
      <BlogFeed />
    </div>
  );
}

export default Home;


