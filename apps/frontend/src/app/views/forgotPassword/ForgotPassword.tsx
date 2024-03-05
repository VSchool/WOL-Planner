import React, { ChangeEvent, useEffect, useContext } from 'react';
import { auth } from "../../firebase/firebase"
import { sendPasswordResetEmail } from "firebase/auth"
import { UserContext } from '../../app';
import axios from 'axios';
import { createUserData, sendVerificationCode } from '../../api-client/apiModules/users';
import { AuthLayout } from '../../components/authlayout/AuthLayout';
// import { Link, useNavigate } from 'react-router-dom';
import  googleGImage from "../../images/logos/googleGImage.svg"
import  loginListThreeFilled from "../../images/logos/loginListThreeFilled.svg"
import  loginVector from "../../images/logos/loginVector.svg"
import  loginCrystalBall from "../../images/logos/loginCrystalBall.svg"
import  loginGroup103 from "../../images/logos/loginGroup103.svg"
import "./forgotpassword.css"
// import { useNavigate } from 'react-router-dom';

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
            const response = await sendVerificationCode(email)

        } catch(error) {
            console.log(error)
        }
        // if(response.success !== false) {
        //     context.setUser(response)
        //     // navigate("/dashboard")
        //     // console.log(context.user)
        // } else {
        //     // setAuthError(true)
        //     alert(response.message)
        // }
    } 

    return (
        <AuthLayout className="fpLayout">
            <div className='fpGroup103Container'>
                <img src={loginGroup103} alt="" className="fpGroup103" style={{gridRowStart: "1", gridRowEnd: "2"}}/>
            </div>
            <div className='fpLogoContainer'>
                <div className="fpLogo" style={{gridRowStart: "2", gridRowEnd: "3"}}>
                <h1 className="fpW">W</h1>
                <img src={loginListThreeFilled} alt="" className="fpListThreeFilled"/>
                <h1 className="fpL">L</h1>
                <img src={loginVector} alt="" className="fpVector"/>
                <img src={loginCrystalBall} alt="" className="fpCrystalBall"/>
                </div>
            </div>
            <div>
                <h2>Enter a valid email address to receive a verification code</h2>
            </div>
            <div>
                <h2>Email</h2>
                <div className="loginEmailInputContainer">
                    <input required className="loginEmailInput" type="text" value={email} onChange={onEmailChange} />
                </div>
            </div>
            <div className='loginButtonContainer' style={{gridRowStart: "6", gridRowEnd: "7"}}>
                <button className="loginButton" type="submit" onClick={reset}  disabled={isDisabled} style={{backgroundColor: isDisabled ? "#6F6F6F" : "#000"}}>
                    <span className="loginButtonText">
                        Submit
                    </span>
                </button>
            </div>
            <div>
                <button className="loginSignupButton">
                    <span className="loginSignupButtonText">
                        {/* <Link to="/signup">Sign Up</Link> */}
                    </span>
                </button>
            </div>
        </AuthLayout>
    )
}