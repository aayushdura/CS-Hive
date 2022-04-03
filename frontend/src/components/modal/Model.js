import React, { useState } from "react";
import { Button } from "@mui/material";
import "./Modal.scss";
import Modal from "react-bootstrap/Modal";
import { Form } from "react-bootstrap";
import { randomTestData } from "../../Utils/MockData/DemoData";
import axios from "axios";
import moment from "moment";
import { baseURL } from "../../Utils/baseURI";

const MyVerticallyCenteredModal = (props) => {
  const { title, questionStatus, question, singlePost, userId } = props;
  const [post, setPost] = useState({
    id: singlePost?._id,
    username: "",
    question: "",
    answer: [],
    likeCount: 0,
  });
  const [answerString, setAnswerString] = useState("");
  const handleAskAnswerSubmit = () => {
    if (questionStatus) {
      updatePost();
    } else {
      updateAnswer();
    }
  };
  const updateAnswer = async () => {
    await axios.post(`${baseURL}/answer/create`, { question: singlePost?._id, user: userId, answer: answerString }).then((response) => {
      console.log(response);
    })
  };
  const updatePost = async () => {
    await axios.post(`${baseURL}/posts/create`, post)
      .then((response) => {
        alert("Question Posted");
        const newPost = response?.data?.question
        randomTestData.unshift({ id: response?.data?._id, username: "", question: newPost, answers: [], date: moment().startOf("now").fromNow() })
        setPost()

      })
      .catch((error) => {
        console.log(error)
        setPost("");
      })
  };
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <h4>{title}</h4>
        </Modal.Title>
      </Modal.Header>
      {questionStatus ? (
        <Modal.Body>
          <Form.Control
            type="text"
            placeholder="Question...?"
            className="questionbar"
            onChange={(e) => setPost(`{ question: e.target.value } ?`)}
          />

        </Modal.Body>
      ) : (
        <Modal.Body>
          <p>{question}</p>
          <Form.Control
            as="textarea"
            placeholder="Write your own Answer ... "
            className="answerbar"
            onChange={(e) => setAnswerString(e.target.value)}
          />
        </Modal.Body>
      )}
      <Modal.Footer>
        <Button
          style={{
            backgroundColor: "aliceblue",
          }}
          onClick={handleAskAnswerSubmit}
        >
          {questionStatus ? "ASK" : "ANSWER"}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default MyVerticallyCenteredModal;
// await axios.post(`${baseURL}/answer/create`, {})
  //     .then((response) => {
  //       alert("Answer Posted");
  //       const newAnswer = response?.data?.answer
  //       randomTestData.unshift({ id: response?.data?._id, username: userDetails?.name, question:"", answers: answers.unshift(newAnswer), date: moment().startOf("now").fromNow() })

  //     })
  // .catch((error) => {
  //   console.log(error)
  //   setAnswerString("");
  // })