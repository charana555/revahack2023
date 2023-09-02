  import React from "react";
  import "./Timeline.css";
  import timelineElements from "./timelineElements";
  import {
    VerticalTimeline,
    VerticalTimelineElement,
  } from "react-vertical-timeline-component";
  import "react-vertical-timeline-component/style.min.css";



  function Timeline() {
    const workIconStyles = { background: "#939AFF"};
    const schoolIconStyles = { background: "#EC6548"};
    
    return (
      <section
        id="Timeline"
        className="flex-col text-white text-3xl w-full h-auto flex items-center justify-center mt-[120%] mb-[120%] xl:mt-[40%] xl:mb-[40%]"
      >
        <p className="text-7xl mb-[5%] font-roboto">Timeline</p>
        <div>
          <VerticalTimeline layout="1-column-left">
            {timelineElements.map((element) => {
              const isWorkIcon = element.icon === "work";
              const titleColor = isWorkIcon ? workIconStyles.background : schoolIconStyles.background;

              return (
                <VerticalTimelineElement
                  key={element.key}
                  date={element.date}
                  dateClassName="date"
                  iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
                  icon={isWorkIcon ? (
                    <img src="/Images/work.svg" alt="Work Icon" />
                  ) : (
                    <img src="/Images/school.svg" alt="School Icon" />
                  )}
                  contentStyle={{ background: '#0d0f16', color: '#fff' }}
                >
                  <h1 className="vertical-timeline-element-title font-roboto" style={{ color: titleColor }}>{element.title}</h1>
                  <div className="h-full w-full bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10"
                    style={{ fontFamily: "Fira Code, monospace" }}
                  >
                    <p id="description">{element.description}</p>
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
