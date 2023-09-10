import React from "react";
import "./Timeline.css";
import timelineElements from "./timelineElements";
// import {
//   VerticalTimeline,
//   VerticalTimelineElement,
// } from "react-vertical-timeline-component";
// import "react-vertical-timeline-component/style.min.css";

import sponsorbg from "../../assets/sponsorBg.png";

function Timeline() {
  
  const headerStyle = {
    backgroundColor: "#EC6548",
  };
  const headerStyle1 = {
    backgroundColor: "#0CCA4A",
  };
  const headerStyle2 = {
    backgroundColor: "#6D5BF6",
  };
  return (
    <section
      id="Timeline"
      className="flex-col text-white text-3xl h-auto flex items-center justify-center ti-bg"
    >
      <img className="absolute z-10 mt-[-500%] sm:mt-[-450%] md:mt-[-250%] xl:mt-[-175%]" src={sponsorbg} />
      <p className="flex-col flex items-center justify-center text-7xl mb-[5%] mt-[140%] md:mt-[70%] xl:mt-[28%] font-roboto">Timeline</p>
      
      <div class="timeline-table">
        <h2>Table 1</h2>
        <table>
            <thead>
                <tr>
                    <th className="border-b border-r" style={headerStyle1}>Date</th>
                    <th className="border-b" style={headerStyle1}>Event</th>
                </tr>
            </thead>
            <tbody className="bg-gray-400 rounded-md bg-clip-padding bg-opacity-10">
                <tr>
                    <td className="border-r">2000</td>
                    <td>Event 1: Something happened in 2000</td>
                </tr>
                <tr>
                    <td className="border-r">2005</td>
                    <td>Event 2: Another event in 2005</td>
                </tr>
            </tbody>
        </table>
    </div>

    <div class="timeline-table">
        <h2>Table 2</h2>
        <table>
            <thead>
                <tr className="">
                    <th className="border-b border-r" style={headerStyle}>Date</th>
                    <th className="border-b" style={headerStyle}>Event</th>
                </tr>
            </thead>
            <tbody className="bg-gray-400 rounded-md bg-clip-padding bg-opacity-10">
                <tr>
                    <td className="border-r">2010</td>
                    <td>Event 3: A significant milestone in 2010</td>
                </tr>
                <tr>
                    <td className="border-r">2015</td>
                    <td>Event 4: More history in 2015</td>
                </tr>
            </tbody>
        </table>
    </div>

    <div class="timeline-table">
        <h2>Table 3</h2>
        <table>
            <thead>
                <tr>
                    <th className="border-b border-r" style={headerStyle2}>Date</th>
                    <th className="border-b" style={headerStyle2}>Event</th>
                </tr>
            </thead>
            <tbody className="bg-gray-400 rounded-md bg-clip-padding bg-opacity-10">
                <tr>
                    <td className="border-r">2020</td>
                    <td>Event 5: Recent event from 2020</td>
                </tr>
            </tbody>
        </table>
    </div>
    </section>
  );
}

export default Timeline;