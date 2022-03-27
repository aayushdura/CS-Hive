import React, { useState } from "react";
import { Button } from "@mui/material";
// import { demoAnswer } from "../MockData/DemoAnswer";
import "./Modal.scss";
import Modal from "react-bootstrap/Modal";
import { Form } from "react-bootstrap";
import { randomTestData } from "../../Utils/MockData/DemoData";
// import axios from "axios";
// import { useNavigate } from "react-router";

const MyVerticallyCenteredModal = (props) => {
  const { title, question, questionStatus, id } = props;
  const [post, setPost] = useState({
    id,
    username: "",
    question,
    answer: [],
    likeCount: 0,
  });
  const [answerString, setAnswerString] = useState("");

  // const [demoAnswer, setDemoAnswer] = useState([]);
  // console(demoAnswer);
  const handleAskAnswerSubmit = () => {
    if (questionStatus) {
      updatePost();
    } else {
      updateAnswer();
    }
  };
  const updateAnswer = () => {
    const toUpdatePost = randomTestData.find((x) => x.id === id);
    toUpdatePost.answers.push(answerString);
    setAnswerString("");
    alert(`Answer Submitted`);
  };
  const updatePost = () => {
    //   ...randomTestData,

    setPost("");
    alert(`Question Submitted`);
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
            onChange={(e) => setPost({ question: e.target.value })}
          />
          <Form.Control
            type="text"
            placeholder="UserName...?"
            className="questionbar"
            onChange={(e) => setPost({ username: e.target.value })}
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
