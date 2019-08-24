import React, { Component } from "react";

import FormInput from "../form-input/FormInput";
import CustomButton from "../costum-button/CustomButton";

import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

import "./SignUp.scss";

export class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      displayName: "",
      password: "",
      confirmPassword: "",
      email: ""
    };
  }
  handleSubmit = async (e)=>{
      e.preventDefault()

    const { email, displayName, password, confirmPassword } = this.state;

    if(password != confirmPassword){
        alert("password dont match")
        return
    }

    try {
        const {user} = await auth.createUserWithEmailAndPassword(email,password)
        createUserProfileDocument(user,{displayName})
    }catch(err){
        console.log("ERROR"+err)
    }

    this.setState({
        displayName: "",
        password: "",
        confirmPassword: "",
        email: ""
    })
  }
  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    const { email, displayName, password, confirmPassword } = this.state;
    return (
      <div className="sign-up">
        <h2 className="title">I do not have an account</h2>
        <span>Sign up with your email and password</span>
        <form action="" className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="displayName"
            onChange={this.handleChange}
            value={displayName}
            label="Display Name"
            required
          />
          <FormInput
            type="email"
            name="email"
            onChange={this.handleChange}
            value={email}
            label="Email"
            required
          />
          <FormInput
            type="password"
            name="password"
            onChange={this.handleChange}
            value={password}
            label="Password"
            required
          />
          <FormInput
            type="password"
            name="confirmPassword"
            onChange={this.handleChange}
            value={confirmPassword}
            label="Confirm Password"
            required
          />
          <CustomButton type="submit">SIGN UP</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignUp;
