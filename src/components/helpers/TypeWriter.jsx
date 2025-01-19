import { Typewriter } from "react-simple-typewriter";
import { useDarkMode } from "../../hooks/useDarkMode";

function TypeWriter() {

    const { dark } = useDarkMode();

    return (
        <Typewriter
            loop
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            cursorColor={dark ? "#14b8a6" : "#38bdf8"}
            words={[
                "Front End Developer",
                "Full Stack Developer",
                "JavaScript Developer",
            ]}
        />
    )
}

export default TypeWriter