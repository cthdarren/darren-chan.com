import "./index.css";
import NavItem from "./NavItem";

function NavBar() {
    return (
        <div className="flex flex-col text-base mt-9">
            <div id="navbar" className="z-50">
                <NavItem name="Home" link="" />
                <NavItem name="Work Experience" link="" />
                <NavItem name="Projects" link="" />
                <NavItem name="Languages" link="" />
                <NavItem name="Education" link="" />
                <NavItem name="Contact" link="" />
            </div>
        </div>
    );
}

export default NavBar;
