import { AiOutlineCaretDown, AiOutlineCaretUp } from "react-icons/ai";
import { Collapse } from "react-collapse";

const FaqAccordian = ({ open, toggle, faq, ans, index }) => {
  return (
    <div>
      <div
        className={` ${!open ? "rounded-lg" : "rounded-t-lg"} ${
          index % 4 < 2 ? "bg-NeonGreen" : "bg-NeonViolet"
        } flex justify-center items-center cursor-pointer text-lg px-4 py-2.5 rounded-t-lg `}
        onClick={toggle}
      >
        <p className="flex-1 text-sm text-center  font-fira">
          {open ? faq : faq.length > 50 ? `${faq.substring(0, 50)}...` : faq}
        </p>
        <div className=" rounded-full p-1 text-[8px] text-black border border-black ">
          {open ? <AiOutlineCaretUp /> : <AiOutlineCaretDown />}
        </div>
      </div>

      <Collapse isOpened={open}>
        <div
          className={` ${
            index % 4 < 2 ? "bg-NeonGreen" : "bg-NeonViolet"
          } text-sm px-4 py-3 tracking-wider rounded-b-lg font-fira text-center   `}
        >
          {ans}
        </div>
      </Collapse>
    </div>
  );
};

export default FaqAccordian;
