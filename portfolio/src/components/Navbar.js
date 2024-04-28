import "../index.css";
import NavItem from "./NavItem";

function NavBar({ pages, page, handleOnClickNavItem, toggleTheme, darkMode }) {
    return (
        <div className="flex flex-col w-1/2 md:text-base text-xs md:mt-9 mt-3">
            <div id="navbar" className="">
                {pages.map((name, index) => (
                    <NavItem
                        name={name}
                        link=""
                        key={index}
                        index={index}
                        currpage={page}
                        handleOnClickNavItem={handleOnClickNavItem}
                    />
                ))}
                <div className="nav-item">
                    <span
                        id=""
                        className="relative navbaritem z-50 cursor-pointer h-full inline-block pt-3 pb-1.5 sm:pb-1 sm:pt-4"
                    >
                        <a
                            href="https://github.com/cthdarren"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <div className="flex items-center">
                                GitHub{" "}
                                <img className="ml-1 sm:w-3 w-2" src="newtab.png" alt="" />
                            </div>
                        </a>
                    </span>
                </div>

                <div className="nav-item">
                    <span
                        id=""
                        className="relative navbaritem z-50 cursor-pointer h-full inline-block pt-3 pb-1.5 sm:pb-1 sm:pt-4"
                        onClick={() => toggleTheme()}
                    >
                        <div className="flex items-center text-nowrap">
                            {darkMode ? "Dark Mode" : "Light Mode"}
                        </div>
                    </span>
                </div>
            </div>
        </div>
    );
}

export default NavBar;
