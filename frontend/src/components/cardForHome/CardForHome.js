import React, { useState } from "react";
import MyVerticallyCenteredModal from "../modal/Model";
import { IconButton } from "@mui/material";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import "./Cardforhom.scss"
const CardForHome = (props) => {
    const { singlePost } = props;
    const [modalShow, setModalShow] = useState(false);
    const [like, setLike] = useState(0);
    var indexForAnswer = 1;
    const handleAnswerPost = () => {
        setModalShow(true);
    };
    return (
        <> <div className="card">
            <div className="question">{singlePost?.question}</div>
            <div className="answer-wrapper">
                {singlePost?.answer?.map((answer) => {
                    return <div className="answer">{`${indexForAnswer++}. ${answer.answer}`}</div>
                })
                }
            </div>
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
                        singlePost={singlePost}
                        question={singlePost?.question}
                        id={singlePost._id}
                        title="Answer"
                        onHide={() => setModalShow(false)}
                    />
                </span>
            </section>
            <div className="username">
                <span className="actual-date"> You can Post Answer Here</span>
            </div>
        </div></>
    )
}

export default CardForHome


