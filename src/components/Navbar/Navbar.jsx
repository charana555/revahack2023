import { Link } from "react-scroll";
import { useState } from "react";
import "./Navbar.css";
import { navs } from "./NavItems";

const Navbar = () => {
    const [menubarOpen, setMenubarOpen] = useState(false);

    const toggleMenubar = () => {
        setMenubarOpen(!menubarOpen);
    };

    const closeMenubar = () => {
        setMenubarOpen(false);
    };

    return (
        <nav className="bg-primary fixed w-full z-50 backdrop-filter backdrop-blur-lg bg-opacity-30">
            <div className="container mx-auto flex flex-wrap items-center justify-between p-4 font-roboto">
                {/* Logo */}
                <div>
                    <Link duration={100} smooth={true} className="cursor-pointer" to="hero">
                        <img src={"Images/reva-logo.png"} alt="logo" height={70} width={70} />
                    </Link>
                </div>
                {/* Navlinks for Desktop */}
                <div className={`hidden md:flex md:gap-14 ${menubarOpen ? "hidden" : ""}`}>
                    {navs.map((item, i) => (
                        <Link
                            key={i}
                            className="underline-hover cursor-pointer text-white text-md tracking-widest hover:text-secondary transition-all duration-200 ease-in-out"
                            to={item.navid}
                            duration={100}
                            smooth={true}
                            onClick={closeMenubar}
                        >
                            {item.navid}
                        </Link>
                    ))}
                </div>
                {/* Hamburger Menu */}
                <div className="md:hidden">
                    <button
                        className="text-white cursor-pointer menu-button"
                        onClick={toggleMenubar}
                    >
                        ☰{/* Hamburger icon */}
                    </button>
                </div>
                {/* Menubar */}
                {menubarOpen && (
                    <div className="md:hidden text-center w-full mt-4">
                        {navs.map((item, i) => (
                            <Link
                                key={i}
                                className="block text-[#737373] cursor-pointer py-2 transition-all duration-200 ease-in-out hover:text-[#81D9D2FF]"
                                to={item.navid}
                                duration={100}
                                smooth={true}
                                onClick={closeMenubar}
                            >
                                {item.navid}
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
