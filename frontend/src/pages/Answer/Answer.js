import React, { useEffect, useState } from "react";
import { demoAnswer } from "../../Utils/MockData/DemoAnswer";
import "./Answer.scss";
import Card from "../../components/card/Card";
import Header from "../../components/headerNavbar/Header";
import LeftNavBar from "../../components/leftsection/LeftNavBar";
import RightNavBar from "../../components/rightsection/RightNavBar";
const Answer = () => {
  const [userDetails, setUserDetails] = useState({});
  useEffect(() => {
    const response = JSON.parse(localStorage.getItem("userInfo"));
    setUserDetails(response);
  }, []);

  return (
    <>
      <Header username={userDetails.name} />
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
