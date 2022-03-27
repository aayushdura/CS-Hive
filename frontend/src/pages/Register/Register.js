import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./register.scss";
import axios from "axios";
import { useNavigate } from "react-router";
import { baseURL } from "../../baseURI";

const Register = () => {
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [errorFromBackend, setErrorFromBackend] = useState("");
  useEffect(() => {
    axios.get(`${baseURL}/getall`).then((res) => {
      // setRegisteredUsers(res.data)
      console.log(res.data.users)
    }).catch((error) => console.log(error))
  }, [])
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      const { data } = await axios.post(
        `${baseURL}`,
        formValues,
        config
      );
      localStorage.setItem("userInfo", JSON.stringify(data));
      navigate("/container");
    } catch (error) {
      console.log(error);
      setErrorFromBackend(error.response.data.message);
    }
  };
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
          Register
        </Button>
        {errorFromBackend.length > 0 && (
          <div className="error-display">{errorFromBackend}</div>
        )}
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
