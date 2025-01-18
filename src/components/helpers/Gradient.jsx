export const LeftGradient = () => {
    return (
        <div className="absolute top-0 h-full w-full bg-white dark:bg-slate-800"><div className="absolute bottom-auto left-0 top-0 h-[300px] w-[500px] -translate-x-[50%] translate-y-[20%] rounded-full bg-[rgba(56,189,248,0.5)] dark:bg-[rgba(20,184,166,0.5)] opacity-30 blur-[80px]"></div></div>
    )
}

export const RightGradient = () => {
    return (
        <div className="absolute top-0 z-0 h-full w-full bg-white dark:bg-slate-800"><div className="absolute bottom-auto right-0 top-0 h-[300px] w-[500px] translate-x-[50%] translate-y-[20%] rounded-full bg-[rgba(56,189,248,0.5)] dark:bg-[rgba(20,184,166,0.5)] opacity-30 blur-[80px]"></div></div>
    )
}