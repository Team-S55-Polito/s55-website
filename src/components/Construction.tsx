import logo from "/src/assets/teams55-logo.png";

export default function Construction() {
    return (
        <div className="text-3xl flex flex-col justify-start items-center leading-normal font-normal h-screen overflow-hidden p-5 dark:bg-black dark:text-white">
            <img
                src={logo}
                className="h-56 p-6 bg-black rounded-xl shadow-md"
                alt="Team s55 logo"
            />
            <h1>Team S55 beta website</h1>
            <p className="read-the-docs">
                This page is under construction. Please check back later.
            </p>
        </div>
    );
}


