import React, { useState } from "react"
import "./signup.css"
import  loginListThreeFilled from "../../images/logos/loginListThreeFilled.svg"
import  loginVector from "../../images/logos/loginVector.svg"
import  loginCrystalBall from "../../images/logos/loginCrystalBall.svg"
import  loginGroup103 from "../../images/logos/loginGroup103.svg"

export const SignUp = () => {



    return (
        <div className="signupLayout">
            <div className='signupGroup103Container'>
                <img src={loginGroup103} alt="" className="signupGroup103" style={{gridRowStart: "1", gridRowEnd: "2"}}/>
            </div>
            <div className='signupLogoContainer'>
                <div className="signupLogo" style={{gridRowStart: "2", gridRowEnd: "3"}}>
                <h1 className="signupW">W</h1>
                <img src={loginListThreeFilled} alt="" className="signupListThreeFilled"/>
                <h1 className="signupL">L</h1>
                <img src={loginVector} alt="" className="signupVector"/>
                <img src={loginCrystalBall} alt="" className="signupCrystalBall"/>
                </div>
            </div>
            <div className="signupFirstNameContainer">
                <h2 className="signupFirstName">First Name</h2>
                <div className="signupFirstNameInputContainer">
                    <input className="signupFirstNameInput"/>
                </div>
            </div>
            <div className="signupLastNameContainer">
                <h2 className="signupLastName">Last Name</h2>
                <div className="signupLastNameInputContainer">
                    <input  className="signupLastNameInput"/>
                </div>
            </div>
            <div className="signupUsernameContainer">
                <h2 className="signupUsername">Username</h2>
                <div className="signupUsernameInputContainer">
                    <input  className="signupUsernameInput"/>
                </div>
            </div>
            <div className="signupEmailContainer">
                <h2 className="signupEmail">Email</h2>
                <div className="signupEmailInputContainer">
                    <input  className="signupEmailInput"/>
                </div>
            </div>
            <div className="signupPasswordContainer">
                <h2 className="signupPassword">Password</h2>
                <div className="signupPasswordInputContainer">
                    <input  className="signupPasswordInput"/>
                </div>
            </div>
            <div className="signupButtonContainer">
                <button className="signupButton">
                    <span className="signupButtonText">Submit</span>
                </button>
            </div>
        </div>
    )
}