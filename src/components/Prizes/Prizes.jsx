import React from "react";
import "./Prizes.css";

const Prizes = () => {
  return (
    <div>
      <section
        id="Prizes"
        className="flex-col text-white text-3xl w-full h-screen flex items-center justify-center"
      >
        <p className="text-8xl text-secondary">Prizes</p>

        <div className="container glass">
          <ul id="nav">
            <li>Bounty</li>
            <li>Participation Perks</li>
          </ul>
          <hr id="h" />
          <div className="prize-tag container">
            <h4>Total Prize Pool of</h4>
            <h4 className="INR">INR 5,00,00,000+</h4>
          </div>
          <div className="prize-1 container">
            <div className="prize">
              <h5>1st Prize</h5>
              <p className="prize-amt">₹ 40,000</p>
            </div>
          </div>
          <div className="prizes container" id="prizes-2">
            <div className="prize">
              <h5 className="prize-title">2nd Prize</h5>
              <p className="prize-amt">₹ 30,000</p>
            </div>
            <div className="prize" id="prize-3">
              <h5 className="prize-title">3rd Prize</h5>
              <p className="prize-amt">₹ 20,000</p>
            </div>
          </div>
          <div className="prizes container" id="prizes-2">
            <div className="prize prize3">
              <h5 className="prize-title">Best Female Team</h5>
              <p className="prize-amt">₹ 5,000</p>
            </div>
            <div className="prize prize3 prize3-2">
              <h5 className="prize-title">Best Virtual Team</h5>
              <p className="prize-amt">₹ 5,000</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Prizes;
