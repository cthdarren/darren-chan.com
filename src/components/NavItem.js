function NavItem({ name, link, index, currpage, handleOnClickNavItem}) {
    return (
        <div className="nav-item">
            {index === currpage? (
            <span id="" className="relative selectednavbaritem font-bold z-50 cursor-pointer h-full text-sm 2xl:text-base inline-block pt-3 pb-1.5 sm:pt-3 sm:pb-1">
                {name}
            </span>
            ) : (
            <span id="" className="relative navbaritem z-50 cursor-pointer h-full inline-block text-sm 2xl:text-base  pt-3 pb-1.5 sm:pb-1 sm:pt-3" onClick={() => handleOnClickNavItem(index)}>
                {name}
            </span>
            )}
        </div>
    );
}
export default NavItem;
