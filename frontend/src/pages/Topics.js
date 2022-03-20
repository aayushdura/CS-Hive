import React from "react";
// import Card from "../components/Card";
import Header from "../components/Header";
import LeftNavBar from "../components/LeftNavBar";
import RightNavBar from "../components/RightNavBar";
import "../components/styles/Topics.scss";
import { randomArrayOfTopics } from "../MockData/DemoArray";
// import { randomTestData } from "../MockData/DemoData";

const Topics = () => {
  return (
    <>
      <Header />
      <div className="primary-section">
        <div className="leftnav-body">
          <LeftNavBar />
        </div>
        <section className="routing-section">
          <h2>Topics</h2>
          <aside className="routing-container">
            {randomArrayOfTopics.map((data) => {
              return (
                <span key={Math.random()} className="routing-component">
                  {data}
                </span>
              );
            })}
          </aside>
        </section>
        <div className="rightnav-body">
          <RightNavBar />
        </div>
      </div>
    </>
  );
};

export default Topics;
