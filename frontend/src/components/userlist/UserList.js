import React from "react";
import "./userlist.scss";
const UserList = ({ user }) => {
  console.log("from userlist", user)
  return (
    <>
      <div className="user-list-item">{user.username}</div>
    </>
  );
};

export default UserList;
