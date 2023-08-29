import React from "react";
import "./Timeline.css";

import timelineElements from "./timelineElements";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

function Timeline() {
  let workIconStyles = { background: "#06D6A0" };
  let schoolIconStyles = { background: "#f9c74f" };

  return (
    <section
      id="Timeline"
      className="flex-col text-white text-3xl w-full h-screen flex items-center justify-center mt-[100%] mb-[70%]"
    >
      <p className="text-5xl mb-[5%]">Timeline</p>
      <div>

      <VerticalTimeline layout="1-column-left">
        {timelineElements.map((element) => {
          let isWorkIcon = element.icon === "work";

          return (
            <VerticalTimelineElement
              key={element.key}
              date={element.date}
              dateClassName="date"
              iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
              icon={isWorkIcon ? <img src="/Images/work.svg" alt="Work Icon" /> : <img src="/Images/school.svg" alt="School Icon" />} 
            >
            <div className="backgroundColor-black h-full w-full bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100">
              <h3 className="vertical-timeline-element-title">
                {element.title}
              </h3>
              <h5 className="vertical-timeline-element-subtitle">
                {element.location}
              </h5>
              <p id="description">{element.description}</p>
            </div>
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
      </div>
    </section>
  );
};

export default Timeline;
