import React from "react";
import "./Timeline.css";
import timelineElements from "./timelineElements";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import sponsorbg from "../../assets/sponsorBg.png";

function Timeline() {
  const workIconStyles = { background: "#939AFF" };
  const schoolIconStyles = { background: "#EC6548" };

  return (
    <section
      id="Timeline"
      className="flex-col text-white text-3xl h-auto flex items-center justify-center ti-bg"
    >
      <img
        className="absolute z-10 mt-[-500%] sm:mt-[-450%] md:mt-[-250%] xl:mt-[-175%]"
        src={sponsorbg}
        alt="Sponsor Background"
      />
      <p className="flex-col flex items-center justify-center text-7xl mb-[5%] mt-[140%] md:mt-[70%] xl:mt-[28%] font-roboto">
        Timeline
      </p>
      <div>
        <VerticalTimeline layout="1-column-left" lineColor="rgba(13, 15, 22, 0.1)">
          {timelineElements.map((element) => {
            const isWorkIcon = element.icon === "work";
            const titleColor = isWorkIcon
              ? workIconStyles.background
              : schoolIconStyles.background;

            return (
              <VerticalTimelineElement
                key={element.key}
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
                
                  <h1
                    className="vertical-timeline-element-title font-roboto mb-6"
                    style={{ color: titleColor }}
                  >
                    {element.title}
                  </h1>
                <div className="items-left justify-left">
                  <table className="table-auto">
                    <thead className="rounded-xl">
                      <tr>
                        <th className="border rounded-lg px-4 py-2">Time</th>
                        <th className="border rounded-lg px-4 py-2">Description</th>
                      </tr>
                    </thead>
                    <tbody className="rounded-xl">
                      <tr>
                        <td
                          className="border rounded px-4 py-2 w-1/4"
                          style={{
                            fontFamily: "Fira Code, monospace",
                            textAlign: "center",
                          }}
                        >
                          <p id="time">{element.time1}</p>
                        </td>
                        <td
                          className="border rounded px-4 py-2 w-3/4"
                          style={{
                            fontFamily: "Fira Code, monospace",
                            textAlign: "center",
                          }}
                        >
                          <p id="description">{element.description}</p>
                        </td>
                      </tr>
                      <tr>
                        <td
                          className="border rounded px-4 py-2 w-1/4"
                          style={{
                            fontFamily: "Fira Code, monospace",
                            textAlign: "center",
                          }}
                        >
                          <p id="time">{element.time2}</p>
                        </td>
                        <td
                          className="border rounded px-4 py-2 w-3/4"
                          style={{
                            fontFamily: "Fira Code, monospace",
                            textAlign: "center",
                          }}
                        >
                          <p id="description">{element.description1}</p>
                        </td>
                      </tr>
                      <tr>
                        <td
                          className="border rounded px-4 py-2 w-1/4"
                          style={{
                            fontFamily: "Fira Code, monospace",
                            textAlign: "center",
                          }}
                        >
                          <p id="time">{element.time3}</p>
                        </td>
                        <td
                          className="border rounded px-4 py-2 w-3/4"
                          style={{
                            fontFamily: "Fira Code, monospace",
                            textAlign: "center",
                          }}
                        >
                          <p id="description">{element.description2}</p>
                        </td>
                      </tr>
                      <tr>
                        <td
                          className="border rounded px-4 py-2 w-1/4"
                          style={{
                            fontFamily: "Fira Code, monospace",
                            textAlign: "center",
                          }}
                        >
                          <p id="time">{element.time4}</p>
                        </td>
                        <td
                          className="border rounded px-4 py-2 w-3/4"
                          style={{
                            fontFamily: "Fira Code, monospace",
                            textAlign: "center",
                          }}
                        >
                          <p id="description">{element.description3}</p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
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
