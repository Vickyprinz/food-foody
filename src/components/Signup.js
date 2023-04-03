

import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { useNavigate, Link } from "react-router-dom";

const slideIn = keyframes`
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const slideOut = keyframes`
  from {
    transform: translateX(0);
    opacity: 1;
  }
  to {
    transform: translateX(-100%);
    opacity: 0;
  }
`;

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 40px;
  background-color: #fff;
  border-radius: 8px;
  animation: ${slideIn} 0.5s forwards;
  ${({ isHidden }) =>
    isHidden &&
    `
    animation: ${slideOut} 0.5s forwards;
  `}
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 40px;
  color: #333;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  margin-bottom: 20px;
  padding: 10px;
  border: none;
  border-radius: 8px;
  background-color: #f2f2f2;
  font-size: 16px;
`;

const Button = styled.button`
  padding: 10px;
  border: none;
  border-radius: 8px;
  background-color: #4caf50;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
`;

const Message = styled.p`
  margin-top: 20px;
  text-align: center;
  font-size: 16px;
  color: ${({ isError }) => (isError ? "red" : "green")};
`;

const LinkWrapper = styled.div`
  margin-top: 20px;
  text-align: center;
`;

const CustomLink = styled(Link)`
  color: #4caf50;
`;

function Signup() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [message, setMessage] = useState("");
  const nav = useNavigate();

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setMessage("Passwords do not match");
      return;
    }
  
    fetch("https://food-carty-api.onrender.com/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Signup failed");
        }
      })
      .then((data) => {
        nav("/home");
        setMessage("Signup successful");
      })
      .catch((error) => {
        setMessage("Signup failed");
        console.error(error);
      });
  }
  

  return (
    <Container>
      <Title>Sign up</Title>
      <Form onSubmit={handleSubmit}>
      <Input
          type="username"
          placeholder="User Name"
          name="username"
          id="username"
          onChange={handleChange}
          value={formData.username}
        />
        <Input
          type="email"
          placeholder="Email Address"
          name="email"
          id="email"
          onChange={handleChange}
          value={formData.email}
        />
        <Input
          type="password"
          placeholder="Password"
          name="password"
          id="password"
          onChange={handleChange}
          value={formData.password}
        />
        <Input
          type="password"
          placeholder="Confirm Password"
          name="confirmPassword"
          id="confirmPassword"
          onChange={handleChange}
          value={formData.confirmPassword}
        />
        <Button type="submit">Sign up</Button>
        {message && <Message isError={message.includes("Passwords do not match")}>{message}</Message>}
      </Form>
      <LinkWrapper>
  <p>Already have an account?</p>
  <CustomLink to="/login">Login</CustomLink>
</LinkWrapper>
</Container>
);
}
export default Signup;