import { useEffect } from "react";
import { ArrowTop } from "../SVG/SvgComponents";

export default function App() {

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <div>
      <div style={{ height: "5px" }} />
      <button
        onClick={() => {
          window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        }}
        className="fixed p-4 text-xs bottom-6 right-6 transition duration-300 bg-zinc-200 hover:bg-zinc-300 dark:bg-zinc-900 text-white rounded-full text-center dark:hover:bg-zinc-800"
      >
        <ArrowTop />
      </button>
    </div>
  );
}
