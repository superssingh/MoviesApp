import React from "react";
import Form from "../jsx/form";
import Joi from "joi-browser";
// import Notes from "../js/Notes";
// const create_username_pattern = "^[a-zA-Z0-9_]+$"; // username with lowerUpper alfanumeric and _ only.
// const create_password_pattern =
//   "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[#$^+=!*()@%&])";

// import { TextField } from "@mui/material";

class LoginForm extends Form {
  state = {
    data: { username: "", password: "" },
    errors: {},
  };

  schema = {
    username: Joi.string()
      // .regex(RegExp(username_pattern))
      .alphanum()
      .required()
      .max(20)
      .label("Username"),
    password: Joi.string()
      // .regex(RegExp(password_pattern))
      .max(20)
      .label("Password"),
  };

  doSubmit = () => {
    // Call the server
    console.log("Submitted");
  };

  render() {
    return (
      <div className="container">
        <div className="Login">
          <h1>Log In</h1>

          <form onSubmit={this.handleSubmit}>
            {this.renderInput("username", "Username")}
            {this.renderInputPassword("password", "Password")}
            {this.renderButton("Login")}
          </form>
        </div>
      </div>
    );
  }
}

export default LoginForm;
