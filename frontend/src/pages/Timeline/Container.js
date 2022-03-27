import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import Button from "@mui/material/Button";

import Card from "../../components/card/Card";
import Header from "../../components/headerNavbar/Header";
import LeftNavBar from "../../components/leftsection/LeftNavBar";
import RightNavBar from "../../components/rightsection/RightNavBar";
import "./Container.scss";
import { randomTestData } from "../../Utils/MockData/DemoData";
const Container = () => {
  const [userDetails, setUserDetails] = useState({});
  const [post, setPost] = useState({});

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
          <h2>Welcome {userDetails.name}</h2>
          <div className="post-creator">
            <Form.Control
              type="text"
              placeholder={`What's that curiosity on your brain.... Dear ${userDetails?.name?.slice(0, 6)}`}
              style={{ height: "8ch" }}
              className="questionbar"
              onChange={(e) => setPost({ question: e.target.value })}
            />
            <Button
              variant="contained"
              style={{ backgroundColor: "black ", width: "20%", color: "white", float: "right" }}
            >
              Create A Post
            </Button>
          </div>
          <>
            {randomTestData.map((data) => {
              return <Card key={data.id} data={data} />;
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

export default Container;