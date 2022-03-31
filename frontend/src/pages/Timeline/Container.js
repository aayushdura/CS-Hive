import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import Button from "@mui/material/Button";
import Card from "../../components/card/Card";
import Header from "../../components/headerNavbar/Header";
import LeftNavBar from "../../components/leftsection/LeftNavBar";
import RightNavBar from "../../components/rightsection/RightNavBar";
import "./Container.scss";
import { randomTestData } from "../../Utils/MockData/DemoData";
import axios from "axios";
import { baseURL } from "../../baseURI";
import moment from "moment"
const Container = () => {
  const [userDetails, setUserDetails] = useState({});
  const [allPosts, setAllPosts] = useState([]);
  const [post, setPost] = useState();
  const fetchPosts = async () => {
    await axios.get(`${baseURL}/posts`)
      .then((response) => {
        setAllPosts(response?.data)
      })
      .catch((error) => console.log(error))
  }
  const createPosts = async () => {
    await axios.post(`${baseURL}/posts/create`, post)
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
              placeholder={`What's that curiosity on your brain.... Dear ${userDetails?.name?.slice(0, 7)}`}
              style={{ height: "8ch" }}
              className="questionbar"
              onChange={(e) => setPost({ question: e.target.value })}
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

            {allPosts?.map((post) => {
              return <Card key={post._id} post={post} />;
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
