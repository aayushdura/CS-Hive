import React, { useState } from "react";
import MyVerticallyCenteredModal from "./Model";
import { IconButton, Button } from "@mui/material";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import "./styles/Card.scss";
const Card = ({ data }) => {
  const [modalShow, setModalShow] = useState(false);
  const [like, setLike] = useState(0);
  const [disLike, setDisLike] = useState(0);

  return (
    <div className="card">
      <div className="question">{data.question}</div>
      <div className="answer">{data.answer}</div>
      <section>
        <span className="like-button">
          <IconButton color="primary" onClick={() => setLike(like + 1)}>
            <ThumbUpIcon />
          </IconButton>
          <>{like}</>
          <IconButton color="primary" onClick={() => setDisLike(disLike + 1)}>
            <ThumbDownIcon />
          </IconButton>
          <>{disLike}</>
        </span>
        <span className="answer-button">
          <Button
            variant="contained"
            style={{
              backgroundColor: "rgb(62, 224, 124) ",
              borderRadius: "2ch",
            }}
            onClick={() => setModalShow(true)}
          >
            Answer
          </Button>
          <MyVerticallyCenteredModal
            show={modalShow}
            title="Answer"
            // Answer={true}
            onHide={() => setModalShow(false)}
          />
        </span>
      </section>
      <div className="username">
        Posted By:<span className="actual-username"> {data.username}</span>
        <span className="actual-date">{data.date} ago</span>
      </div>{" "}
    </div>
  );
};

export default Card;
