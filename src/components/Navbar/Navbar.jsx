import { Link } from "react-scroll";
import "./Navbar.css";

import { navs } from "./NavItems";

const Navbar = () => {
  return (
    <section className="bg-[#0d0f16] fixed w-full z-50">
      <div className="w-[80%] bg-[#0d0f16] mx-auto flex items-center justify-between">
        <div>
          <Link
            duration={100}
            smooth={true}
            className=" cursor-pointer"
            to="hero"
          >
            <img
              className="__drop_shadow"
              src={"Images/reva-logo.png"}
              alt="logo"
              height={70}
              width={70}
            />
          </Link>
        </div>
        <div className="flex gap-14 font-[500]">
          {navs.map((item, i) => (
            <Link
              key={i}
              className="underline-hover cursor-pointer text-white text-sm tracking-widest hover:text-secondary transition-all duration-200 ease-in-out"
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
