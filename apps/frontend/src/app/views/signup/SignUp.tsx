import React, { useState, useContext, useEffect } from "react"
import "./signup.css"
import  loginListThreeFilled from "../../images/logos/loginListThreeFilled.svg"
import  loginVector from "../../images/logos/loginVector.svg"
import  loginCrystalBall from "../../images/logos/loginCrystalBall.svg"
import  loginGroup103 from "../../images/logos/loginGroup103.svg"
import { createUserWithEmailAndPassword } from "firebase/auth"
import { auth } from "../../firebase/firebase"
import { useNavigate } from 'react-router-dom';
import { AuthLayout } from '../../components/authlayout/AuthLayout';
import { signUpUser, getUsersFromSearch } from "../../api-client/apiModules/users"
import { UserContext } from "../../../app/app"


export const SignUp = () => {

    const context = useContext(UserContext)

    const [isDisabled, setIsDisabled] = React.useState(true)
    const [authError, setAuthError] = React.useState(false)
    const [emailError, setEmailError] = React.useState(true)
    const navigate = useNavigate()
    const [firstName, setFirstName] = React.useState('')
    const [lastName, setLastName] = React.useState('')
    const [username, setUsername] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [inputError, setInputError] = React.useState(false)
    

    useEffect(() => {
        const emailRegex = new RegExp(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/);
        if (!emailRegex.test(email)) {
            setIsDisabled(true)
        } else if(password.length < 8) {
            setIsDisabled(true)
        } else {
            setIsDisabled(false)
        }
    })

    const signUp = async () => {
        const response = await signUpUser({email, password, firstName, lastName, username})
        console.log(response)
        if(response.success !== false) {
            context.setUser(response)
            navigate("/dashboard")
            // console.log(context.user)
        } else {
            setAuthError(true)
            alert(response.message)
        }
    } 
    function whiteSpace() {
        return <span style={{paddingLeft: "5px"}}>{""}</span>
    }

    return (
        <AuthLayout>
            <div className="signupLayout">
                <div className='signupGroup103Container' style={{gridRowStart: "1", gridRowEnd: "2"}}>
                    <img src={loginGroup103} alt="" className="signupGroup103" />
                </div>
                <div className='signupLogoContainer' style={{gridRowStart: "2", gridRowEnd: "3"}}>
                    <div className="signupLogo" >
                        <h1 className="signupW">W</h1>
                        <img src={loginListThreeFilled} alt="" className="signupListThreeFilled"/>
                        <h1 className="signupL">L</h1>
                        <img src={loginVector} alt="" className="signupVector"/>
                        <img src={loginCrystalBall} alt="" className="signupCrystalBall"/>
                    </div>
                </div>
                <div className="signupIndicatesRequiredContainer" style={{gridRowStart: "3", gridRowEnd: "4"}}>
                    <p className="signupIndicatesRequired">{authError ? "* Indicates Required" : <>&nbsp;</>}</p>
                </div>
                <div className="signupBodyContainer">
                    <div className="signupFirstNameContainer" style={{gridRowStart: "1", gridRowEnd: "2"}}>
                        <h2 className="signupFirstName" ><span className="signupAsterisk">{authError ? "*" : whiteSpace()}</span>First Name</h2>
                        <div className="signupFirstNameInputContainer">
                            <input className="signupFirstNameInput" type="text" onChange={(e) => setFirstName(e.target.value)}/>
                        </div>
                    </div>
                    <div className="signupLastNameContainer" style={{gridRowStart: "2", gridRowEnd: "3"}}>
                        <h2 className="signupLastName"><span className="signupAsterisk">{authError ? "*" : whiteSpace()}</span>Last Name</h2>
                        <div className="signupLastNameInputContainer">
                            <input className="signupLastNameInput" type="text" onChange={(e) => setLastName(e.target.value)}/>
                        </div>
                    </div>
                    <div className="signupUsernameContainer" style={{gridRowStart: "3", gridRowEnd: "4"}}>
                        <h2 className="signupUsername"><span className="signupAsterisk">{authError ? "*" : whiteSpace()}</span>Username</h2>
                        <div className="signupUsernameInputContainer">
                            <input className="signupUsernameInput" type="text" onChange={(e) => setUsername(e.target.value)}/>
                        </div>
                    </div>
                    <div className="signupEmailContainer" style={{gridRowStart: "4", gridRowEnd: "5"}}>
                        <h2 className="signupEmail"><span className="signupAsterisk">{authError ? "*" : whiteSpace()}</span>Email</h2>
                        <div className="signupEmailInputContainer">
                            <input className="signupEmailInput" type="text" onChange={(e) => setEmail(e.target.value)}/>
                        </div>
                    </div>
                    <div className="signupEmailErrorContainer" style={{gridRowStart: "5", gridRowEnd: "6"}}>
                        <p className="signupEmailError">{authError ? "Please enter a valid email address" : ""}</p>
                    </div>
                    <div className="signupPasswordContainer" style={{gridRowStart: "6", gridRowEnd: "7"}}>
                        <h2 className="signupPassword"><span className="signupAsterisk">{authError ? "*" : whiteSpace()}</span>Password</h2>
                        <div className="signupPasswordInputContainer">
                            <input className="signupPasswordInput" required type="password" onChange={(e) => setPassword(e.target.value)}/>
                        </div>
                    </div>
                    <div className="signupPasswordErrorContainer" style={{gridRowStart: "7", gridRowEnd: "8"}}>
                        <p className="signupPasswordError">{authError ? "Password must be at least 8 characters" : ""}</p>
                    </div>
                    <div className="signupButtonContainer" style={{gridRowStart: "8", gridRowEnd: "9"}}>
                        <button className="signupButton" onClick={signUp}  disabled={isDisabled} style={{backgroundColor: isDisabled ? "#6F6F6F" : "#000"}}>
                            <span className="signupButtonText">Submit</span>
                        </button>
                    </div>
                </div>
            </div>
        </AuthLayout>
    )
}