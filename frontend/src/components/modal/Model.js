import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
import "./Modal.scss";
import Modal from "react-bootstrap/Modal";
import { Form } from "react-bootstrap";
import { randomTestData } from "../../Utils/MockData/DemoData";
import axios from "axios";
import moment from "moment";
import { baseURL } from "../../baseURI";

const MyVerticallyCenteredModal = (props) => {
  const { title, question, questionStatus, id } = props;
  const [post, setPost] = useState({
    id,
    username: "",
    question,
    answer: [],
    likeCount: 0,
  });
  const [userDetails, setUserDetails] = useState({});
  useEffect(() => {

    const response = JSON.parse(localStorage.getItem("userInfo"));
    setUserDetails(response);
  }, []);
  const [answerString, setAnswerString] = useState("");



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
  const updatePost = async () => {
    await axios.post(`${baseURL}/posts/create`, post)
      .then((response) => {
        alert("Question Posted");
        const newPost = response?.data?.question
        randomTestData.unshift({ id: response?.data?._id, username: userDetails?.name, question: newPost, answers: [], date: moment().startOf("now").fromNow() })
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
            onChange={(e) => setPost({ question: e.target.value })}
          />

        </Modal.Body>
      ) : (
        <Modal.Body>
          <p>{question}</p>
          <Form.Control
            as="textarea"
            placeholder="Write your own Answer ... "
            className="answerbar"
            onChange={(e) => setAnswerString(`${e.target.value}?`)}
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
