import React, { ChangeEvent, useEffect, useContext } from 'react';
import { auth } from "../../firebase/firebase"
import { sendPasswordResetEmail, getAuth } from "firebase/auth"
import { UserContext } from '../../app';
import axios from 'axios';
import { createUserData, sendVerificationCode } from '../../api-client/apiModules/users';
import { AuthLayout } from '../../components/authlayout/AuthLayout';
import { Link, useNavigate } from 'react-router-dom';
import  googleGImage from "../../images/logos/googleGImage.svg"
import  loginListThreeFilled from "../../images/logos/loginListThreeFilled.svg"
import  loginVector from "../../images/logos/loginVector.svg"
import  loginCrystalBall from "../../images/logos/loginCrystalBall.svg"
import  loginGroup103 from "../../images/logos/loginGroup103.svg"
import "./forgotpassword.css"

export const ForgotPassword = () => {

    const context = useContext(UserContext)

    const [email, setEmail] = React.useState("")
    const [isDisabled, setIsDisabled] = React.useState(true)

    useEffect(() => {
        const emailRegex = new RegExp(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/);
        if (!emailRegex.test(email)) {
            setIsDisabled(true)
        } else {
            setIsDisabled(false)
        }
    })

    const onEmailChange = (e: React.ChangeEvent<any>) => {
        setEmail(e.target.value)
        // setAuthError("")
    }
    const reset = async () => {
        try {
            console.log(auth, email)
            const response = await sendPasswordResetEmail(getAuth(), email)
            console.log(response)
        } catch(error) {
            console.log(error)
        }
    } 

    return (
        <AuthLayout>
            <div className="fpLayout">
                <div className='fpGroup103Container' style={{gridRowStart: "1", gridRowEnd: "2"}}>
                    <img src={loginGroup103} alt="" className="fpGroup103"/>
                </div>
                <div className='fpLogoContainer'style={{gridRowStart: "2", gridRowEnd: "3"}}>
                    <div className="fpLogo">
                        <h1 className="fpW">W</h1>
                        <img src={loginListThreeFilled} alt="" className="fpListThreeFilled"/>
                        <h1 className="fpL">L</h1>
                        <img src={loginVector} alt="" className="fpVector"/>
                        <img src={loginCrystalBall} alt="" className="fpCrystalBall"/>
                    </div>
                </div>
                <div className="fpEnterContainer" style={{gridRowStart: "3", gridRowEnd: "4"}}>
                    <h2 className="fpEnter">Enter a valid email address to receive a verification code</h2>
                </div>
                <div className="fpEmailContainer" style={{gridRowStart: "4", gridRowEnd: "5"}}>
                    <h2 className="fpEmail">Email</h2>
                    <div className="fpEmailInputContainer">
                        <input required className="fpEmailInput" type="text" value={email} onChange={onEmailChange} />
                    </div>
                </div>
                <div className='loginButtonContainer' style={{gridRowStart: "5", gridRowEnd: "6"}}>
                    <button className="loginButton" type="submit" onClick={reset}  disabled={isDisabled} style={{backgroundColor: isDisabled ? "#6F6F6F" : "#000"}}>
                        <span className="loginButtonText">
                            Submit
                        </span>
                    </button>
                </div>
                <div className="signupForgot" style={{gridRowStart: "6", gridRowEnd: "7"}}>
                    <button className="loginSignupButton">
                        <span className="loginSignupButtonText">
                            <Link to="/signup">Sign Up</Link>
                        </span>
                    </button>
                    <button className="forgotButton">
                        <span className="forgotButtonText">
                            <Link to="/forgotPassword">Forgot Password</Link>
                        </span>
                    </button>
                </div>
            </div>
        </AuthLayout>
    )
}