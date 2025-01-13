import BlogFeed from "./components/Blogs/BlogFeed";
import Skills from "./components/Skills/Skills";
import Services from "./components/Services/Services";
import Hero from "./components/Hero/Hero";
import AboutMe from "./components/About Me/AboutMe";
import useAOS from "./hooks/useAOS";

function App() {
  useAOS();

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

export default App;
