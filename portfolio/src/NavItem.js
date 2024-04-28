function NavItem({ name, link, index, currpage, handleOnClickNavItem}) {
    return (
        <div className="pb-3">
            {index === currpage? (
            <span id="" className="relative selectednavbaritem font-bold z-50 cursor-pointer">
                {name}
            </span>
            ) : (
            <span id="" className="relative navbaritem z-50 cursor-pointer" onClick={() => handleOnClickNavItem(index)}>
                {name}
            </span>
            )}
        </div>
    );
}
export default NavItem;
