function NavItem({ name, link, index, currpage, handleOnClickNavItem}) {
    return (
        <div className="">
            {index === currpage? (
            <span id="" className="relative selectednavbaritem font-bold z-50 cursor-pointer h-full inline-block pt-3 pb-1.5 sm:pt-2.5 sm:pb-1">
                {name}
            </span>
            ) : (
            <span id="" className="relative navbaritem z-50 cursor-pointer h-full inline-block pt-3 pb-1.5 sm:pb-1 sm:pt-2.5" onClick={() => handleOnClickNavItem(index)}>
                {name}
            </span>
            )}
        </div>
    );
}
export default NavItem;
