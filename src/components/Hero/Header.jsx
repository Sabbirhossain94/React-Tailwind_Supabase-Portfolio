import React from 'react'

function Header() {
    
    const avatarUrl = process.env.REACT_APP_STORAGE_MYAVATAR_PUBLIC_URL;

    return (
        <header className="pointer-events-none relative z-50 flex flex-col mt-20">
            <div className="sm:px-8 top-0 order-last -mb-3 pt-3 mt-24">
                <div className="mx-auto max-w-7xl lg:px-8">
                    <div className="relative px-4 sm:px-8 lg:px-12">
                        <div className="mx-auto max-w-2xl lg:max-w-5xl">
                            <div className="relative">
                                <a
                                    aria-label="Home"
                                    className="block h-16 w-16 origin-left pointer-events-auto"
                                    style={{
                                        transform: "var(--avatar-image-transform)",
                                    }}
                                    href="#"
                                >
                                    <img
                                        alt=""
                                        src={avatarUrl}
                                        width="512"
                                        height="512"
                                        className="rounded-full bg-zinc-100 object-cover dark:bg-zinc-800 h-16 w-16"
                                        style={{ color: "transparent" }}
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header