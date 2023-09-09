import { Collapse } from "react-collapse";
import { AiOutlineCaretDown, AiOutlineCaretUp } from "react-icons/ai";

const FaqAccordian = ({ open, toggle, faq, ans, index }) => {
  return (
    <div>
      <div
        className={` ${!open ? "rounded-lg" : "rounded-t-lg"} ${
          index % 4 < 2 ? "bg-[#23282E]" : "bg-[#23282E]"
        } flex justify-center items-center cursor-pointer text-lg px-5 py-4  rounded-t-lg  `}
        onClick={toggle}
      >
        <p className="flex-1 text-sm text-center  font-fira">
          {open ? faq : faq.length > 50 ? `${faq.substring(0, 50)}...` : faq}
        </p>
        <div className=" rounded-full p-1 text-[8px] text-white border border-white ">
          {open ? <AiOutlineCaretUp /> : <AiOutlineCaretDown />}
        </div>
      </div>

      <Collapse isOpened={open}>
        <div
          className={` ${
            index % 4 < 2 ? "bg-[#23282E]" : "bg-[#23282E]"
          } text-sm px-5 py-4 tracking-wider rounded-b-lg font-fira text-center   `}
        >
          {ans}
        </div>
      </Collapse>
    </div>
  );
};

export default FaqAccordian;
