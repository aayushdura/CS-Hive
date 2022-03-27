import React from "react";
import "./Header.scss";
import Badge from "@mui/material/Badge";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import { Button, IconButton } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { Form, NavDropdown } from "react-bootstrap";
const Header = ({ username }) => {
  const navigate = useNavigate();
  // const [users, setUsers] = useState([]);
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
        <NavDropdown title={username} size="lg">
          <NavDropdown.Item className="dropdown-item-1">
            <Button
              onClick={() => {
                localStorage.clear();
                navigate("/login");
              }}
            >
              LogOut
            </Button>
          </NavDropdown.Item>
        </NavDropdown>
      </div>
    </nav>
  );
};

export default Header;
