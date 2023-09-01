import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineTwitter,
} from "react-icons/ai";
import { FaDiscord } from "react-icons/fa";

const Socialicons = () => {
  return (
    <section className="flex gap-2 py-2">
      <div className=" rounded cursor-pointer transition-all p-2 hover:bg-[#212d45] transform ">
        <a href="#" target="_blanck">
          <AiFillLinkedin className="text-5xl bg-transparent" />
        </a>
      </div>
      <div className=" rounded cursor-pointer transition-all p-2 hover:bg-[#212d45] transform ">
        <a href="#" target="_blanck">
          <AiFillInstagram className="text-5xl bg-transparent" />
        </a>
      </div>
      <div className=" rounded cursor-pointer transition-all p-2 hover:bg-[#212d45] transform ">
        <a href="#" target="_blanck">
          <AiOutlineTwitter className="text-5xl bg-transparent" />
        </a>
      </div>

      <div className=" rounded cursor-pointer transition-all p-2 hover:bg-[#212d45] transform ">
        <a href="#" target="_blanck">
          <FaDiscord className="text-5xl bg-transparent " />
        </a>
      </div>
      <div className=" rounded cursor-pointer transition-all p-2 hover:bg-[#212d45] transform ">
        <a href="#" target="_blanck">
          <AiFillGithub className="text-5xl bg-transparent" />
        </a>
      </div>
    </section>
  );
};

export default Socialicons;
