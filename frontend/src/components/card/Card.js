import React, { useState } from "react";
import MyVerticallyCenteredModal from "../modal/Model";
import { IconButton } from "@mui/material";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import "./Card.scss";
const Card = (props) => {
  const { post } = props;
  const [modalShow, setModalShow] = useState(false);
  const [like, setLike] = useState(0);
  var indexForAnswer = 1;
  const handleAnswerPost = () => {
    setModalShow(true);
  };
  return (
    <>
      <div className="card">
        <div className="question">{post?.question}</div>
        {post?.answers?.map((answer) => {
          return (<div className="answer">{`${indexForAnswer++}. ${answer}`}</div>)
        })
        }
        <section>
          <div className="like-button">
            <IconButton color="default" onClick={() => setLike(like + 1)}>
              <ThumbUpIcon />
            </IconButton>
            <>{like}</>
          </div>
          <span className="answer-button">
            <IconButton variant="contained" onClick={handleAnswerPost}>
              <QuestionAnswerIcon />
            </IconButton>
            <MyVerticallyCenteredModal
              show={modalShow}
              question={post.question}
              id={post.id}
              title="Answer"
              onHide={() => setModalShow(false)}
            />
          </span>
        </section>
        <div className="username">
          Posted By:<span className="actual-username"> {post?.username}</span>
          <span className="actual-date">{post?.date} </span>
        </div>
      </div>


    </>
  )



}

export default Card;
