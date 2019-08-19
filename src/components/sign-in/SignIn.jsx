import React, { Component } from 'react'
import "./SignIn.scss"
import FormInput from "../form-input/FormInput"
import CostumButton from "../costum-button/CustomButton"

import {signInWithGoogle} from "../../firebase/firebase.utils"
class SignIn extends Component {
    constructor(props) {
        super(props)
        this.state = {
             email:"",
             password:""
        }
        
    }

    handleSubmit = (e)=>{
        e.preventDefault();
        this.setState({email:"",password:""})
    }
  handleChange = (e) => {
      const {value,name} = e.target
      this.setState({
        [name]:value
      },()=>{
        console.log(this.state)
      }) 
  }
    render() {
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit} >
                    <FormInput  name="email" label="Email" type="text" value={this.state.email} handleChange={this.handleChange}/>
                    <FormInput name="password" label="Password" type="text" value={this.state.password} handleChange={this.handleChange}/>
                    
                    <div className="buttons">
                        <CostumButton type="submit">Submit</CostumButton>
                        <CostumButton isGoogle onClick={signInWithGoogle} >Sign In with Google</CostumButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn
