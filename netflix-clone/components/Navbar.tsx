import NavBarItem from "./NavBarItem";

import { BsChevronDown, BsSearch, BsBell } from 'react-icons/bs';
import MobileMenu from "./MobileMenu";
import { useCallback, useState } from "react";
import AccountMenu from "./AccountMenu";

const Navbar = () => {
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const [showAccountMenu, setShowAccountMenu] = useState(false);


    const toggleMobileMenu = useCallback(() => {
        setShowMobileMenu((current) => !current);
    }, []);

    const toggleAccountMenu = useCallback(() => {
        setShowAccountMenu((current) => !current);
    }, []);

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
                <div onClick={toggleMobileMenu} className="lg:hidden flex flex-row items-center gap-2 ml-8 cursor-pointer relative">
                    <p className="text-white text-sm">Browse</p>
                        <BsChevronDown className={`text-white transition ${showMobileMenu ? 'rotate-180' : 'rotate-0' }`}></BsChevronDown>
                        <MobileMenu visible={showMobileMenu}/>
                </div>
                <div className="flex flex-row ml-auto gap-7 items-center">
                    <div className="text-gray-200 hover:text-gray-300 cursor-pointer transition">
                        <BsSearch></BsSearch>
                    </div>
                    <div className="text-gray-200 hover:text-gray-300 cursor-pointer transition">
                        <BsBell></BsBell>
                    </div>
                    <div onClick={toggleAccountMenu} className="flex flex-row items-center gap-2 cursor-pointer relative">
                        <div className="w-6 h-6 lg:w-10 lg:h-10 rounded-md overflow-hidden">
                            <img src="/images/default-slate.png" alt=""></img>
                        </div>
                        <BsChevronDown className={`text-white transition ${showAccountMenu ? 'rotate-180' : 'rotate-0' }`}></BsChevronDown>
                        <AccountMenu visible={showAccountMenu}/>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;