import NavBarItem from "./NavBarItem";

const Navbar = () => {
    return (
        <nav className="w-full fixed z-40">
            <div className="
            px-4
            md:px-16
            py-6
            flex
            flex-row
            items-center
            transition
            duration-500
            bg-zinc-900
            big-opacity-90">
            
            <img className="h-4 lg:h-7" src="/images/logo.png" alt="Logo"></img>
                <div className="
                flex-row
                ml-8
                gap-7
                hidden
                lg:flex">
                    <NavBarItem label="Home" />
                    <NavBarItem label="Series" />
                    <NavBarItem label="Films" />
                    <NavBarItem label="New & Popular" />
                    <NavBarItem label="My List" />
                    <NavBarItem label="Browse By Languages" />
                </div>
            </div>
        </nav>
    )
}

export default Navbar;