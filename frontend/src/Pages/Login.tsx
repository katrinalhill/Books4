import React from 'react';


export const Login = () => {


  return (
    <div className="login-container">
      {/* <h1 className="login-header">Welcome back!</h1> */}
      <form className="login-form">
        <label className="login-label">Username:</label>
        <input className="login-input" type="text" name="username"/>
        <br />
        <label className="login-label">Password:</label>
        <input className="login-input" type="password" name="password"/>
        <br />
        <button className="login-button">Log In</button>
        <p className="login-message">Forgot your password? <a href="#">Reset here</a></p>
      </form>
    </div>
  );
};
