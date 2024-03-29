import React from "react"
import "./Header.scss"
import { Link } from "react-router-dom"
import  {ReactComponent as Logo} from "../../assests/crown.svg" 
import {auth} from "../../firebase/firebase.utils"
import {connect} from "react-redux"


const Header = ({currentUser}) => {
    console.log(currentUser)
    return(
    <div className="header">
        <Link to="">
            <Logo className="logo"/>
        </Link>
        <div className="options">
            <Link className="option" to="/shop">SHOP</Link>
            <Link className="option" to="/contact">CONTACT</Link>
            {
                currentUser?(
                    <div className="option" onClick={()=>auth.signOut()}>SIGN OUT</div>):<Link className="option" to="/signin">SIGN IN</Link>
                
            }
        </div>
    </div>
)}

const mapStateToProps = state => ({
    currentUser:state.user.currentUser
})
export default connect(mapStateToProps)(Header)