import React from "react";
import "./Timeline.css";
import "./Timeline2.js";

const Timeline = () => {
  return (
    <section
      id="Timeline"
      className="flex-col text-white text-3xl w-full h-screen flex items-center justify-center"
    >
      <p>Timeline</p>

      <div class="custom-section mb-[20%]">
        <div id="progressbar" class="timeline-main">
          <div class="progress-wrap">
            <div class="pogress"></div>
          </div>
          <ul>
            
            <li class="adding">
              <div class="custom-box">
                <h3>Contrary to popular</h3>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here'.</p>
              </div>
            </li>
            
            <li class="">
              <div class="custom-box">
                <h3>Contrary to popular</h3>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here'.</p>
              </div>
            </li>
            
            <li class="">
              <div class="custom-box">
                <h3>Contrary to popular</h3>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here'.</p>
              </div>
            </li>
            
            <li class="">
              <div class="custom-box">
                <h3>Contrary to popular</h3>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here'.</p>
              </div>
            </li>
            
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
