import "./index.css";
import NavItem from "./NavItem";

function NavBar({ pages, page, handleOnClickNavItem }) {
    return (
        <div className="flex flex-col md:text-base text-xs md:mt-9 mt-3">
            <div id="navbar" className="z-50">
                {pages.map((name, index) => 
                <NavItem
                    name={name}
                    link=""
                    key={index}
                    index={index}
                    currpage={page}
                    handleOnClickNavItem = {handleOnClickNavItem}
                />
                )}
            </div>
        </div>
    );
}

export default NavBar;
