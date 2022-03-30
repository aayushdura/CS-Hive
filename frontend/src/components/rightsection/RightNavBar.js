import React, { useEffect, useState } from "react";
import "./RightNavBar.scss";
import Button from "@mui/material/Button";
import MyVerticallyCenteredModal from "../modal/Model";
import UserList from "../userlist/UserList";
import axios from "axios";
import { baseURL } from "../../baseURI";

const RightNavBar = () => {
  const [modalShow, setModalShow] = useState(false);
  const [registeredUsers, setRegisteredUsers] = useState([])
  const fetchUser = async () => {
    await axios.get(`${baseURL}/users/getall`).then((res) => {
      setRegisteredUsers(res.data.users)
      console.log(res)
    }).catch((error) => console.log(error))
  }
  useEffect(() => {
    fetchUser()
  }, [])
  return (
    <div className="rightnavbar-container">
      <Button
        variant="contained"
        style={{ backgroundColor: "black ", width: "80%" }}
        onClick={() => setModalShow(true)}
      >
        ?ASK A NEW QUESTION?
      </Button>
      <MyVerticallyCenteredModal
        show={modalShow}
        title="Ask Anything"
        questionStatus={true}
        onHide={() => setModalShow(false)}
      />
      <h4>Registered Users</h4>

      <>
        {registeredUsers.map((user) => {
          return <UserList user={user} key={user._id} />
        })}
      </>
    </div>
  );
};

export default RightNavBar;
