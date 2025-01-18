import { AnimatePresence } from 'framer-motion'
import { AnimatedIntro } from '../../helpers/AnimatedItems'
import { useDelay } from '../../../hooks/useDelay'

function Intro() {

    const { showIntro } = useDelay();

    return (
        <AnimatePresence mode='wait'>
            {showIntro && (
                <AnimatedIntro>
                    <div className="flex h-screen justify-center items-center">
                        <h1 className="font-poppins flex gap-1 font-semibold whitespace-nowrap tracking-[1px] dark:text-white text-3xl sm:text-4xl">
                            <span className="text-sky-400 dark:text-teal-500">{`{`}</span>
                            <span>{`SH`}</span>
                            <span className="text-sky-400 dark:text-teal-500">{`}`}</span>
                        </h1>
                    </div>
                </AnimatedIntro>
            )}
        </AnimatePresence>
    )
}

export default Intro