import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "./login.scss";
import Avatar from "@mui/material/Avatar";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import { randomArrayOfNames } from "../../Utils/MockData/DemoArray";
import { generateRandomName } from "../../Utils/MockData/DemoMethods";
import axios from "axios";
import { baseURL } from "../../baseURI";
const Login = () => {
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });
  const [errorFromBackend, setErrorFromBackend] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      const { data } = await axios.post(`${baseURL}/users/login`, formValues, config);
      localStorage.setItem("userInfo", JSON.stringify(data));
      navigate("/container");
    } catch (error) {
      console.log(error.response.data);
      setErrorFromBackend(error.response.data);
    }
  };

  return (
    <main>
      <h1 className="primary-title">Welcome Back</h1>

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
        <Button style={{ backgroundColor: "#293035" }} type="submit">
          LogIn
        </Button>
        {errorFromBackend?.length > 0 && (
          <div className="error-display">{errorFromBackend}</div>
        )}
        <p className="text-muted" id="text-muted2">
          Not a member{" "}
          <Link to="/register" style={{ textDecoration: "none" }}>
            Register
          </Link>
        </p>
      </Form>
    </main>
  );
};

export default Login;
