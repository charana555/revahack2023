import { data } from "../../data/faqData";
import { useState } from "react";

import { AiOutlineCaretDown, AiOutlineCaretUp } from "react-icons/ai";

import "./Faq.css";

const Faq = () => {
  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }

    setSelected(i);
  };

  return (
    <section
      id="FAQs"
      className="flex-col text-white text-3xl w-full h-screen px-[10%] overflow-auto"
    >
      <h3 className="text-[#FFD866] text-center mb-[5%] text-6xl font-roboto font-medium tracking-wider">
        FAQ's
      </h3>
      <div className="grid gap-5 grid-cols-1 md:grid-cols-2">
        {data.map((item, i) => (
          <div className="bg-DeepCharcoal text-lg px-4 py-3 rounded-lg">
            <div
              className="text-white flex justify-between items-center cursor-pointer pr-5"
              onClick={() => toggle(i)}
            >
              <h6 className="tracking-wider text-sm text-center flex-1 font-medium ">
                {item.faq.length < 65
                  ? item.faq
                  : selected === i
                  ? item.faq
                  : `${item.faq.substring(0, 65)} ... `}
              </h6>
              <span className="font-bold">
                {selected === i ? <AiOutlineCaretUp /> : <AiOutlineCaretDown />}
              </span>
            </div>

            <div
              className={
                selected === i
                  ? " max-h-full transition-all duration-500 font-fira text-sm my-6"
                  : " opacity-80 max-h-0 overflow-hidden transition-all duration-500 font-fira text-sm"
              }
            >
              {item.ans}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Faq;
