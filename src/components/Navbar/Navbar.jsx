import "./Navbar.css";
import { Link } from "react-scroll";

import { navs } from "./NavItems";

const Navbar = () => {
  return (
    <section className="bg-primary fixed w-full z-50">
      <div className="w-[80%] bg-primary  mx-auto flex items-center justify-between">
        <div>
          <Link
            duration={100}
            smooth={true}
            className=" cursor-pointer"
            to="hero"
          >
            <img
              className="__drop_shadow"
              src="Images/reva-logo.png"
              alt="logo"
              height={70}
              width={70}
            />
          </Link>
        </div>
        <div className=" flex gap-14 font-[500] ">
          {navs.map((item, i) => (
            <Link
              key={i}
              className=" cursor-pointer uppercase text-white text-sm tracking-widest hover:text-secondary transition-all duration-200 ease-in-out"
              to={item.navid}
              duration={100}
              smooth={true}
            >
              {item.navid}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Navbar;
