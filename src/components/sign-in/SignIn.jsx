import React, { Component } from "react";
import "./SignIn.scss";
import FormInput from "../form-input/FormInput";
import CostumButton from "../costum-button/CustomButton";

import { signInWithGoogle, auth } from "../../firebase/firebase.utils";
class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  handleSubmit = async e => {
    e.preventDefault();
    const { email, password } = this.state;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: "", password: "" });
    } catch (error) {
      console.log(error);
    }
  };
  handleChange = e => {
    const { value, name } = e.target;
    this.setState({
      [name]: value
    });
  };
  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            label="Email"
            type="text"
            value={this.state.email}
            handleChange={this.handleChange}
          />
          <FormInput
            name="password"
            label="Password"
            type="text"
            value={this.state.password}
            handleChange={this.handleChange}
          />

          <div className="buttons">
            <CostumButton type="submit">Submit</CostumButton>
            <CostumButton isGoogle onClick={signInWithGoogle}>
              Sign In with Google
            </CostumButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
