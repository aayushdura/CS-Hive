import React from "react";
import "./styles/Header.scss";
import Badge from "@mui/material/Badge";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import Avatar from "@mui/material/Avatar";
import { Button, IconButton } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { Form } from "react-bootstrap";
import { randomArrayOfNames } from "../MockData/DemoArray";
import { generateRandomName } from "../MockData/DemoMethods";
const Header = () => {
  const navigate = useNavigate();
  return (
    <nav className="header-navbar">
      <div>
        <Link
          to="/container"
          style={{ textDecoration: "none", color: "black" }}
        >
          <h2>CS-HIVE</h2>
        </Link>
      </div>
      <div className="searchbar-navbar">
        <Form.Control
          type="search"
          placeholder="Search..."
          className="searchbar"
          // value={formValues?.email}
          // onChange={(e) => {
          //   setFormValues({ ...formValues, email: e.target.value });
          // }}
        />
      </div>
      <div className="right-div-navbar">
        <IconButton>
          <Badge badgeContent={5} variant="dot" color="error">
            <NotificationsOutlinedIcon />
          </Badge>
        </IconButton>
        <Avatar
          style={{ color: "rgb(28, 36, 105)" }}
          alt={generateRandomName(randomArrayOfNames)}
          src="image-source"
        />
        <Button
          onClick={() => {
            localStorage.clear();
            navigate("/login");
          }}
        >
          LogOut
        </Button>
      </div>
    </nav>
  );
};

export default Header;
