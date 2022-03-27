import React, { useEffect, useState } from "react";
// import Card from "../components/Card";
import Header from "../../components/headerNavbar/Header";
import LeftNavBar from "../../components/leftsection/LeftNavBar";
import RightNavBar from "../../components/rightsection/RightNavBar";
import "./Topics.scss";
import { randomArrayOfTopics } from "../../Utils/MockData/DemoArray";
// import { randomTestData } from "../MockData/DemoData";

const Topics = () => {
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
