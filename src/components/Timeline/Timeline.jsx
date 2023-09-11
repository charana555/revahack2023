import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./Timeline.css";
import timelineElements from "./timelineElements";

import sponsorbg from "../../assets/sponsorBg.png";

function Timeline() {
  const workIconStyles = { background: "#939AFF" };
  const schoolIconStyles = { background: "#EC6548" };

  return (
    <section className="flex-col text-white text-3xl h-auto flex items-center justify-center ti-bg">
      <img
        className="absolute z-10 mt-[-500%] sm:mt-[-450%] md:mt-[-250%] xl:mt-[-175%]"
        src={sponsorbg}
      />
      <p className="flex-col flex items-center justify-center text-7xl mb-[5%] mt-[140%] md:mt-[70%] xl:mt-[28%] font-roboto">
        Timeline
      </p>
      <div>
        <VerticalTimeline
          layout="1-column-left"
          lineColor="rgba(13, 15, 22, 0.1)"
        >
          {timelineElements.map((element) => {
            const isWorkIcon = element.icon === "work";
            const titleColor = isWorkIcon
              ? workIconStyles.background
              : schoolIconStyles.background;

            return (
              <VerticalTimelineElement
                key={element.key}
                // date={element.date}
                // dateClassName="date"
                iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
                icon={
                  isWorkIcon ? (
                    <img src="./Images/work.svg" alt="work icon" />
                  ) : (
                    <img src="./Images/school.svg" alt="school icon" />
                  )
                }
                contentStyle={{ background: "rgba(13, 15, 22)", color: "#fff" }}
                className="vertical-timeline-element"
              >
                <div className="">
                  <h1
                    className="vertical-timeline-element-title font-roboto"
                    style={{ color: titleColor }}
                  >
                    {element.title}
                  </h1>
                  <div
                    className="h-[10%] w-full xl:w-[50%] xl:ml-[2%] bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10"
                    style={{ fontFamily: "Fira Code, monospace" }}
                  >
                    <p id="description">{element.description}</p>
                  </div>
                </div>
              </VerticalTimelineElement>
            );
          })}
        </VerticalTimeline>
      </div>
    </section>
  );
}

export default Timeline;
