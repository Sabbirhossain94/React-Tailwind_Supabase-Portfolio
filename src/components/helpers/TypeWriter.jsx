import { Typewriter } from "react-simple-typewriter";

function TypeWriter() {
    return (
        <Typewriter
            loop
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            cursorColor="#52525b"
            words={[
                "Front End Developer",
                "Full Stack Developer",
                "JavaScript Developer",
            ]}
        />
    )
}

export default TypeWriter