import React from 'react'
import SignIn from "../../components/sign-in/SignIn"
import SignUp from "../../components/SignUp/SignUp"
import "./SIgnInAndOutPage.scss"

const SIgnInAndOutPage = () => {
    return (
        <div className="sign-in-and-sign-up">
            <SignIn />
            <SignUp />
        </div>
    )
}

export default SIgnInAndOutPage
