import { useState } from "react";
import { data } from "../../data/faqData";

import FaqAccordian from "./FaqAccordian";
const Faq = () => {
  const [open, setOpen] = useState(false);

  const toggle = (index) => {
    if (open === index) {
      return setOpen(null);
    }

    setOpen(index);
  };

  return (
    <section
      id="FAQs"
      className="flex-col text-white text-3xl w-full h-screen px-[5%] md:px-[10%] overflow-auto"
    >
      <h3 className="text-[#FFD866] text-center mb-[5%] text-[50px] md:text-[72px] font-roboto font-medium tracking-wider">
        FAQ's
      </h3>
      <div className="grid gap-5 grid-cols-1 md:grid-cols-2">
        {data.map((item, i) => (
          <FaqAccordian
            key={i}
            toggle={() => toggle(i)}
            open={i === open}
            faq={item.faq}
            ans={item.ans}
            index={i}
          />
        ))}
      </div>
    </section>
  );
};

export default Faq;
