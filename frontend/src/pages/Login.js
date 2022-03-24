import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "../components/styles/login.scss";
import Avatar from "@mui/material/Avatar";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import { randomArrayOfNames } from "../MockData/DemoArray";
import { generateRandomName } from "../MockData/DemoMethods";
import axios from "axios";
const Login = () => {
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/api/login", { formValues })
      .then((res) => {
        alert(res.data?.msg);
        if (res.status === 200) {
          alert(res.data?.msg);
          // localStorage.setItem("token", res.data.token);
          navigate("/container");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <main>
      <Form className="form-container" onSubmit={handleSubmit}>
        <h3>Log In</h3>
        <Avatar
          style={{
            color: "rgb(28, 36, 105)",
            marginLeft: "auto",
            marginRight: "auto",
            marginBottom: "4px",
          }}
          sx={{ height: "1in", width: "1in" }}
          alt={generateRandomName(randomArrayOfNames)}
          src="image-source"
        />
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            required
            placeholder="Enter email"
            value={formValues?.email}
            onChange={(e) => {
              setFormValues({ ...formValues, email: e.target.value });
            }}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            required
            value={formValues?.password}
            onChange={(e) => {
              setFormValues({ ...formValues, password: e.target.value });
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Remember-Me" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
        <p className="text-muted" id="text-muted2">
          Not a member{" "}
          <Link to="/" style={{ textDecoration: "none" }}>
            Register
          </Link>
        </p>
      </Form>
    </main>
  );
};

export default Login;
