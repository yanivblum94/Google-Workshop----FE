import React from "react";
import "./Login.css";

const Login = () => (
  <form action="/" method="get">
    <label htmlFor="username">
      <span className="visually-hidden">שם משתמש</span>
    </label>
    <input
      type="text"
      id="username"
      placeholder="יש להקליד את שם המשתמש"
      name="u"
    />
    <label htmlFor="password">
      <span className="visually-hidden">סִסמה</span>
    </label>
    <input
      type="password"
      id="password"
      placeholder="יש להקליד את הסִסמה"
      name="p"
    />
    <button className="login-button" type="submit">
      כניסה לחשבון
    </button>
  </form>
);

export default Login;
