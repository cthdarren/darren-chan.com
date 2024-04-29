import "../index.css";
import NavItem from "./NavItem";

function NavBar({ pages, page, handleOnClickNavItem, toggleTheme, darkMode }) {
    return (
        <div className="flex flex-col  md:text-base text-xs md:mt-9 mt-3">
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
                <div className="mt-6 mb-7 -mr-10 w-[12%]">
                <div id="navdivider" className="border-t-[1px] border-[#333]"></div>
                </div>
                <div className="nav-item flex ">
                    <span
                        id=""
                        className="relative border-t-1 navbaritem z-50 cursor-pointer h-full inline-block pb-1.5 sm:pb-1 "
                        onClick={() => toggleTheme()}
                    >
                        <div className="border-white items-center text-nowrap">
                            {darkMode ? "Light" : "Dark"}
                        </div>
                    </span>
                </div>
            </div>
        </div>
    );
}

export default NavBar;
