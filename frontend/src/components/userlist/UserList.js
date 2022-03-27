import React from "react";
import "./userlist.scss";
const UserList = ({ user }) => {
  return (
    <>
      <div className="user-list-item">{user.username}<br />{user.email}</div>


    </>
  );
};

export default UserList;
