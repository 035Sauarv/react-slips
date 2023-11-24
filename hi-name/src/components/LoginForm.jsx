import React, { useState } from "react";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const validateCredentials = () => {
    // Simple validity check
    if (username === "Admin" && password === "Pass123") {
      setMessage("Login successful");
      console.log("Login successful");
    } else {
        setMessage("Unauthorized. Please check your credentials.");
      console.log("Unauthorized. Please check your credentials.");
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
        <h2>Login</h2>
      <label>
        Username:
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </label>
      <br />
      <button type="button" onClick={validateCredentials}>
        Submit
      </button>
      <p
        style={{
          color: message.includes("Unauthorized") ? "red" : "green",
        }}
      >
        {message}
      </p>
      <hr/>
    </div>
    
  );
};

export default LoginForm;
