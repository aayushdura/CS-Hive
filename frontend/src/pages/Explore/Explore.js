import React, { useEffect, useState } from "react";
// import { Form } from "react-bootstrap";
// import Button from "@mui/material/Button";
import Card from "../../components/card/Card";
import Header from "../../components/headerNavbar/Header";
import LeftNavBar from "../../components/leftsection/LeftNavBar";
import RightNavBar from "../../components/rightsection/RightNavBar";
import "./Explore.scss";
import { randomTestData } from "../../Utils/MockData/DemoData";

const Explore = () => {
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
          <h2>Explore</h2>
          <h4>Recommended posts for you dear {userDetails.name}</h4>
          <>
            {randomTestData.map((post) => {
              return <Card key={post.id} post={post} explorePage={true} />;
            })}
          </>
        </section>
        <div className="rightnav-body">
          <RightNavBar />
        </div>
      </div>
    </>
  );
};

export default Explore;
