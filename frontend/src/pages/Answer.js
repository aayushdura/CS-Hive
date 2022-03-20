import React from "react";
import { demoAnswer } from "../MockData/DemoAnswer";
import "../components/styles/Answer.scss";
import Card from "../components/Card";
import Header from "../components/Header";
import LeftNavBar from "../components/LeftNavBar";
import RightNavBar from "../components/RightNavBar";
const Answer = () => {
  return (
    <>
      <Header />
      <div className="primary-section">
        <div className="leftnav-body">
          <LeftNavBar />
        </div>
        <div className="routing-section">
          <h2>Answers</h2>
          {demoAnswer.reverse().map((data) => {
            return <Card key={data.id} data={data} />;
          })}
        </div>
        <div className="rightnav-body">
          <RightNavBar />
        </div>
      </div>
    </>
  );
};
export default Answer;
