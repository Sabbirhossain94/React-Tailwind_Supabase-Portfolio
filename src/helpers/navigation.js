export const navigation = [
    {
        Name: "Home",
        Link: "/",
        property: "end",
        navLinkStyles: ({ isActive, dark, isHovering }) => {
            return {
                color: isHovering
                    ? dark
                        ? "rgb(20,184,166)"
                        : "rgb(56,189,248)"
                    : isActive
                        ? dark
                            ? "rgb(20,184,166)"
                            : "rgb(56,189,248)"
                        : dark
                            ? "white"
                            : "black",
                transition: "color 0.3s ease",
            };
        },
    },
    {
        Name: "About",
        Link: "/about",
        property: "end",
        navLinkStyles: ({ isActive, dark, isHovering }) => {
            return {
                color: isHovering
                    ? dark
                        ? "rgb(20,184,166)"
                        : "rgb(56,189,248)"
                    : isActive
                        ? dark
                            ? "rgb(20,184,166)"
                            : "rgb(56,189,248)"
                        : dark
                            ? "white"
                            : "black",
                transition: "color 0.3s ease",
            };
        },
    },
    {
        Name: "Projects",
        Link: "/projects",
        navLinkStyles: ({ isActive, dark, isHovering }) => {
            return {
                color: isHovering
                    ? dark
                        ? "rgb(20,184,166)"
                        : "rgb(56,189,248)"
                    : isActive
                        ? dark
                            ? "rgb(20,184,166)"
                            : "rgb(56,189,248)"
                        : dark
                            ? "white"
                            : "black",
                transition: "color 0.3s ease",
            };
        },
    },
    {
        Name: "Contact",
        Link: "/contact",
        navLinkStyles: ({ isActive, dark, isHovering }) => {
            return {
                color: isHovering
                    ? dark
                        ? "rgb(20,184,166)"
                        : "rgb(56,189,248)"
                    : isActive
                        ? dark
                            ? "rgb(20,184,166)"
                            : "rgb(56,189,248)"
                        : dark
                            ? "white"
                            : "black",
                transition: "color 0.3s ease",
            };
        },
    },
    // {
    //     Name: "Sign In",
    //     Link: "/sign",
    //     navLinkStyles: ({ isActive }) => {
    //         return {
    //             color: isActive ? "rgb(56,189,248)" : "white",
    //         };
    //     },
    // },
    // {
    //     Name: "Account",
    //     Link: "/account",
    //     navLinkStyles: ({ isActive }) => {
    //         return {
    //             color: isActive ? "rgb(56,189,248)" : "white",
    //         };
    //     },
    // },
    // {
    //     Name: "Dashboard",
    //     Link: "/dashboard",
    //     navLinkStyles: ({ isActive }) => {
    //         return {
    //             color: isActive ? "rgb(56,189,248)" : "white",
    //         };
    //     },
    // },
];