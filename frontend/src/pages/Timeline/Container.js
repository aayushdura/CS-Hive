import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import Button from "@mui/material/Button";
import Header from "../../components/headerNavbar/Header";
import LeftNavBar from "../../components/leftsection/LeftNavBar";
import RightNavBar from "../../components/rightsection/RightNavBar";
import "./Container.scss";
import { randomTestData } from "../../Utils/MockData/DemoData";
import axios from "axios";
import { baseURL } from "../../Utils/baseURI";
import moment from "moment"
import CardForHome from "../../components/cardForHome/CardForHome";
const Container = () => {
  const [userDetails, setUserDetails] = useState({});
  const [allPosts, setAllPosts] = useState([]);
  const [postFromStatusBox, setPostFromStatusBox] = useState();
  const fetchPosts = async () => {
    await axios.get(`${baseURL}/posts`)
      .then((response) => {
        setAllPosts(response?.data)
      })
      .catch((error) => console.log(error))
  }
  const createPosts = async () => {
    await axios.post(`${baseURL}/posts/create`, postFromStatusBox)
      .then((response) => {
        alert("Post Posted")
        const newPost = response?.data?.question
        randomTestData.unshift({ id: response?.data?._id, username: userDetails?.name, question: newPost, answers: [], date: moment().startOf("now").fromNow() })
      })
      .catch((error) => {
        console.log(error)
      })
  }
  useEffect(() => {
    fetchPosts()
    setUserDetails(JSON.parse(localStorage.getItem("userInfo")));
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
              placeholder={`What's that curiosity on your brain.... Dear ${userDetails?.name?.slice(0, 7)}`}
              style={{ height: "8ch" }}
              className="questionbar"
              onChange={(e) => setPostFromStatusBox({ question: e.target.value })}
            />
            <Button
              variant="contained"
              style={{ backgroundColor: "black ", width: "20%", color: "white", float: "right" }}
              onClick={createPosts}
            >
              Create A Post
            </Button>
          </div>
          <>
            {allPosts?.map((singlePost) => {
              return <CardForHome key={singlePost._id} singlePost={singlePost} userInfo={userDetails} />;
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
