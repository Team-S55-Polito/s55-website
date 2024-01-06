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

    const toggleTheme = (darkMode: any) => {
        if (darkMode) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    };
    return (
        <div className="shadow-md w-full sticky top-0 bg-white dark:bg-black dark:text-white dark:shadow-slate-900">
            <div className="md:flex items-center justify-between md:pl-12 px-7 py-3 max-w-screen-xl mx-auto">
                <div className="font-bold text-2xl cursor-pointer font-mono">
                    S55
                </div>

                <div
                    onClick={() => setOpen(!open)}
                    className="text-3xl absolute right-8 top-3 cursor-pointer md:hidden "
                >
                    <ion-icon name={open ? "close" : "menu"}></ion-icon>
                </div>

                <ul
                    className={`md:flex md:items-center md:pb-0 shadow-md md:shadow-none absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto pl-10 transition-all ease-in dark:shadow-slate-900 cursor-pointer ${
                        open ? "top-14 bg-white dark:bg-black" : "top-[-490px]"
                    }`}
                >
                    {Links.map(link => (
                        <li
                            key={link.name}
                            className="md:mx-5 text-xl md:my-0 my-4 "
                        >
                            <a
                                href={link.link}
                                className="no-underline"
                            >
                                {link.name}
                            </a>
                        </li>
                    ))}

                    <div
                        onClick={() => {
                            setIsDarkMode(!isDarkMode);
                            toggleTheme(!isDarkMode);
                            setOpen(false); // Close the menu
                        }}
                        className="text-xl md:mx-5 my-4 md:my-0 h-6"
                    >
                        <ion-icon name="moon"></ion-icon>
                    </div>
                </ul>
            </div>
        </div>
    );
};

export default Nav;
