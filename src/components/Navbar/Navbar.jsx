import { Link } from "react-scroll";
import "./Navbar.css";

import { navs } from "./NavItems";

const Navbar = () => {
  return (
      <section className="bg-[#0B0B0B] fixed w-full z-50 backdrop-filter backdrop-blur-lg bg-opacity-30 font-roboto">
        <div className="w-90%]  mx-auto flex items-center justify-around">
          {/* logo */}
          <div>
            <Link
                duration={100}
                smooth={true}
                className=" cursor-pointer"
                to="hero"
            >
              <img
                  src={"Images/reva-logo.png"}
                  alt="logo"
                  height={70}
                  width={70}
              />
            </Link>
          </div>
          {/* navlinks */}
          <div className="flex gap-14 font-[500] ">
            {navs.map((item, i) => (
                <Link
                    key={i}
                    // underline-hover color-transition class can be added
                    className="underline-hover cursor-pointer text-white text-md tracking-widest hover:text-secondary transition-all duration-200 ease-in-out"
                    to={item.navid}
                    duration={100}
                    smooth={true}
                >
                  {item.navid}
                </Link>
            ))}
          </div>
          {/* timer */}
        </div>
      </section>
  );
};

export default Navbar;