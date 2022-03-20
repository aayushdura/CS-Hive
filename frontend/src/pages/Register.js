import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../components/styles/register.scss";
import axios from "axios";
import { useNavigate } from "react-router";

const Register = () => {
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({
    userName: "",
    email: "",
    password: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    const params = new URLSearchParams();
    params.append("fullName", formValues.userName);
    params.append("email", formValues.email);
    params.append("password", formValues.password);
    console.log(formValues);
    axios
      .post("http://localhost:8080/api/auth/register", params, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      })
      .then((result) => {
        alert(result.data?.msg);
        if (result.status === 201) {
          alert(result.data?.msg);
          navigate("/container");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }
  return (
    <main>
      <h1 className="primary-title">Welcome To CS-hive</h1>
      <p className="text-muted1">Hive For Computer Science associates</p>
      <Form className="form-container" onSubmit={handleSubmit}>
        <h4 className="primary-title-form">Register</h4>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Full-Name"
            required
            value={formValues?.userName}
            onChange={(e) => {
              setFormValues({ ...formValues, userName: e.target.value });
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            required
            value={formValues?.email}
            onChange={(e) => {
              setFormValues({ ...formValues, email: e.target.value });
            }}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group controlId="formBasicPassword" className="mb-3">
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
          Already a member{" "}
          <Link to="/login" style={{ textDecoration: "none" }}>
            LogIn
          </Link>
        </p>
      </Form>
    </main>
  );
};

export default Register;
