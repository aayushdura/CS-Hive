import React, { useEffect, useState } from "react";
import "./RightNavBar.scss";
import Button from "@mui/material/Button";
import MyVerticallyCenteredModal from "../modal/Model";
import UserList from "../userlist/UserList";
import { fetchUsers } from "../../features/userSlice"
import { useDispatch, useSelector } from "react-redux"

const RightNavBar = () => {

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchUsers)
  }, [dispatch])
  const [modalShow, setModalShow] = useState(false);
  const registeredUsers = useSelector((state) => state.user.userLists)
  console.log(registeredUsers)
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
          console.log("userfrom map", user)
          return <UserList user={user} key={user._id} />
        })}
      </>
    </div>
  );
};

export default RightNavBar;
