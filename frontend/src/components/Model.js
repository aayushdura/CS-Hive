import React, { useState } from "react";
import Button from "@mui/material/Button";
// import { demoAnswer } from "../MockData/DemoAnswer";
import "./styles/Modal.scss";
import Modal from "react-bootstrap/Modal";
import { Form } from "react-bootstrap";
import { randomTestData } from "../MockData/DemoData";
// import axios from "axios";
// import { useNavigate } from "react-router";

const MyVerticallyCenteredModal = (props) => {
  const { title, question } = props;
  const [questionString, setQuestionString] = useState("");
  const [answerString, setAnswerString] = useState("");
  const [demoAnswer, setDemoAnswer] = useState([]);
  console.log(demoAnswer);

  const handleAskAnswerSubmit = () => {
    if (question) {
      updateQuestion();
    } else {
      updateAnswer();
    }
  };
  const updateAnswer = () => {
    let newAnswer = {
      id: Date.now(),
      username: Date.now(),
      answer: answerString,
      upvoteCount: parseInt(Math.random() * 1000),
    };
    setDemoAnswer([...demoAnswer, newAnswer]);
    setAnswerString("");
    alert(`Answer Submitted`);
  };
  const updateQuestion = () => {
    // console.log(questionString);
    randomTestData = [
      ...randomTestData,
      {
        id: Date.now(),
        username: "",
        question: questionString,
        answer: "",
        upvoteCount: parseInt(Math.random() * 1000),
      },
    ];
    setQuestionString("");
    alert(`Question Submitted`);
  };
  // let params = new URLSearchParams();
  // if (Question) {
  //   params.append("question", questionString);
  //   axios
  //     .post("http://localhost:8080/api/post/create", params, {
  //       headers: {
  //         "x-access-token": localStorage.getItem("token"),
  //         "Content-Type": "application/x-www-form-urlencoded",
  //       },
  //     })
  //     .then((result) => {
  //       alert(result.data?.msg);
  //       if (result.status === 200) {
  //         alert(`${result.data?.msg} Question Submitted`);
  //       }
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // } else {
  //   params.append("answer", answerString);
  //   axios
  //     .post("http://localhost:8080/api/post/addanswer", params, {
  //       headers: {
  //         "x-access-token": localStorage.getItem("token"),
  //         "Content-Type": "application/x-www-form-urlencoded",
  //       },
  //     })
  //     .then((result) => {
  //       alert(result.data?.msg);
  //       if (result.status === 200) {
  //         alert(`${result.data?.msg} Question Submitted`);
  //       }
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // }
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
      {question ? (
        <Modal.Body>
          <p>Hey This is the question asking section</p>
          <Form.Control
            type="text"
            placeholder="Question...?"
            className="questionbar"
            onChange={(e) => setQuestionString(e.target.value)}
          />
        </Modal.Body>
      ) : (
        <Modal.Body>
          <p>Hey This is the Answering section</p>
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
            color: "rgb(62, 224, 124)",
          }}
          onClick={handleAskAnswerSubmit}
        >
          {question ? "ASK" : "ANSWER"}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default MyVerticallyCenteredModal;
