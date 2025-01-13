import { useState, useEffect } from "react";
import { ArrowTop } from "../SVG/SvgComponents";

export default function ScrollToTop() {

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      {isVisible && (
        <button
          onClick={() => {
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
          }}
          className="fixed p-4 text-xs bottom-6 right-6 transition-opacity duration-300 bg-zinc-200 hover:bg-zinc-300 dark:bg-zinc-800 text-white rounded-full text-center dark:hover:bg-zinc-900/50"
        >
          <ArrowTop />
        </button>
      )}
    </div>
  );
}
