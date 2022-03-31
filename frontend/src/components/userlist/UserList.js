import React from "react";
import "./userlist.scss";
const UserList = ({ user }) => {
  return (
    <>
      <div className="user-list-item">{user.username}</div>


    </>
  );
};

export default UserList;
