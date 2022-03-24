import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../components/styles/register.scss";
import axios from "axios";
import { useNavigate } from "react-router";
import { baseURL } from "../baseURI";

const Register = () => {
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({
    username: "",
    email: "",
    password: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    axios
      .post(`${baseURL}/users`, { formValues })
      .then((res) => {
        alert(res.data?.msg);
        if (res.status === 201) {
          alert(res.data?.msg);
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
          <Form.Label>User Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter an User Name"
            required
            value={formValues?.username}
            onChange={(e) => {
              setFormValues({ ...formValues, username: e.target.value });
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
