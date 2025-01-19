import { AnimatePresence } from 'framer-motion'
import { AnimatedIntro } from '../../helpers/AnimatedItems'
import { useIntro } from '../../../hooks/useIntro';
import { Typewriter } from 'react-simple-typewriter';

function Intro() {

    const { showIntro, showTypeWriter } = useIntro();

    return (
        <AnimatePresence mode='wait'>
            {showIntro && (
                <AnimatedIntro>
                    <div className="flex h-screen justify-center items-center">
                        <h1 className="font-poppins flex gap-1 font-semibold whitespace-nowrap tracking-[1px] dark:text-white text-3xl sm:text-4xl">
                            <span className="text-sky-400 dark:text-teal-500">{`{`}</span>
                            <span>{`S`}</span>
                            {showTypeWriter && <Typewriter
                                typeSpeed={50}
                                deleteSpeed={50}
                                delaySpeed={2000}
                                cursorColor="#52525b"
                                words={["abbir"]}
                            />}
                            <span>{`H`}</span>
                            {showTypeWriter && <Typewriter
                                typeSpeed={50}
                                deleteSpeed={50}
                                delaySpeed={2000}
                                cursorColor="#52525b"
                                words={["ossain"]}
                            />}
                            <span className="text-sky-400 dark:text-teal-500">{`}`}</span>
                        </h1>
                    </div>
                </AnimatedIntro>
            )}
        </AnimatePresence>
    )
}

export default Intro