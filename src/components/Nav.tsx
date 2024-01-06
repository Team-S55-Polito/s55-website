import { useState, useEffect } from "react";

const Nav = () => {
    let Links = [
        { name: "Home", link: "/" },
        { name: "About", link: "/" },
        { name: "Team", link: "/" },
        { name: "Sponsors", link: "/" },
        { name: "Contact", link: "/" },

    ];
    let [open, setOpen] = useState(false);

    const [isDarkMode, setIsDarkMode] = useState(
        window.matchMedia("(prefers-color-scheme: dark)").matches
    );

    useEffect(() => {
        const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
        const handleChange = () => setIsDarkMode(mediaQuery.matches);
        mediaQuery.addEventListener("change", handleChange);
        // Set the initial theme based on the system preference
        toggleTheme(isDarkMode);
        return () => mediaQuery.removeEventListener("change", handleChange);
    }, []);

    const toggleTheme = darkMode => {
        if (darkMode) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    };
    return (
        <div className="shadow-md w-full sticky top-0 bg-white dark:bg-black dark:text-white dark:shadow-slate-900">
            <div className="md:flex items-center justify-between pt-2 md:py-2.5 md:px-12 px-7 max-w-screen-xl mx-auto">
                <div className="font-bold text-2xl cursor-pointer flex items-center font-mono pl-5">
                    S55
                </div>

                <div
                    onClick={() => setOpen(!open)}
                    className="text-3xl absolute right-8 top-1 cursor-pointer md:hidden "
                >
                    <ion-icon name={open ? "close" : "menu"}></ion-icon>
                </div>

                <ul
                    className={`md:flex md:items-center md:pb-0 shadow-md md:shadow-none absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-12 pb-5 transition-all ease-in dark:shadow-slate-900 cursor-pointer md:px-10 ${
                        open ? "top-6 bg-white dark:bg-black" : "top-[-490px]"
                    }`}
                >
                    {Links.map(link => (
                        <li
                            key={link.name}
                            className="md:ml-10 text-xl md:my-0 my-7 "
                        >
                            <a
                                href={link.link}
                                className="no-underline  hove:text-gree"
                            >
                                {link.name}
                            </a>
                        </li>
                    ))}

                    <span
                        onClick={() => {
                            setIsDarkMode(!isDarkMode);
                            toggleTheme(!isDarkMode);
                        }}
                        className="text-xl my-7 md:ml-10 md:my-3 md:pt-1 "
                    >
                        <ion-icon name="moon"></ion-icon>
                    </span>
                </ul>
            </div>
        </div>
    );
};

export default Nav;
