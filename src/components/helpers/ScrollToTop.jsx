import { useState, useEffect } from "react";
import { ArrowTop } from "../SVG/SvgComponents";
import { AnimatePresence } from "framer-motion";
import { AnimatedScrollToTop } from "./AnimatedItems";

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
      <AnimatePresence>
        {isVisible && (
          <AnimatedScrollToTop>
            <button
              onClick={() => {
                window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
              }}
              data-aos="zoom-in"
              className="fixed p-4 text-xs bottom-6 right-6 transition-opacity duration-300 bg-zinc-200 hover:bg-zinc-300/50 dark:bg-zinc-800 text-white rounded-full text-center dark:hover:bg-zinc-900/50"
            >
              <ArrowTop />
            </button>
          </AnimatedScrollToTop>
        )}
      </AnimatePresence>
    </div>
  );
}
