import React, { useState } from "react";

const Login = () => {
  const [shakeMessage, setShakeMessage] = useState("");

  const validateLoginForm = (event) => {
    // Prevent default form submission
    event.preventDefault();

    // Example validation
    const mobileNumber = event.target.mobilenumber.value;
    const password = event.target.password.value;

    if (mobileNumber === "" && password === "") {
      setShakeMessage("Please fill Mobile Number and Password");
    } else if (mobileNumber === "") {
      setShakeMessage("Please fill Mobile Number");
    } else if (password === "") {
      setShakeMessage("Please fill Password");
    } else {
      // Proceed with form submission if both fields are filled
      event.target.submit();
    }

    // Clear shake message after 5 seconds
    setTimeout(() => {
      setShakeMessage("");
    }, 5000);
  };

  return (
    <div className="wrapper" style={{ marginTop: "200px" }}>
      <h1>Login</h1>
      <form id="loginForm" onSubmit={validateLoginForm}>
        <input
          type="number"
          id="mobilenumber"
          placeholder="Enter Mobile Number"
        />
        <input type="password" id="password" placeholder="Password" />
        <div className="recover"></div>
        <button type="submit">Login</button>
      </form>
      {shakeMessage && (
        <div id="shakeMessage" className="shake-message">
          {shakeMessage}
        </div>
      )}
    </div>
  );
};

export default Login;
