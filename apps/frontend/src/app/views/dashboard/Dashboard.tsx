import React from "react"
import { Link } from "react-router-dom";
import { AuthLayout } from '../../components/authlayout/AuthLayout';
import './dashboard.css'
import hamburger_menu from '../../images/dash/hamburger_menu.svg'
import hankHill from '../../images/dash/Hank_Hill.webp'
import image103 from '../../images/logos/loginGroup103.svg'

export const Dashboard = () => {
    //With Testing

    return (
        <AuthLayout>
            <div className="page">
                <div className="image-103">
                    <img src={image103} alt=""  />
                </div>

                <button className="burger">
                    <img src={hamburger_menu} alt="" className="hamburger_menu_dash" />
                </button>

                <div className="profile-dash-div">
                    <img src={hankHill} alt="" className="profile_dash"/>
                </div>
                <div>
                    <h1 className="greeting-text">Hello, `</h1>
                </div>

                <div className="numbers-font">
                    <p >-275.87</p>
                </div>

                <div className="page-font">
                    <p>Net Worth</p>
                </div>


                <Link to="/">
                    <div className="cash-flow">
                        <button >
                            <span className="btn-font">
                                Cash Flow
                            </span>
                        </button>
                    </div>
                </Link>

                <Link to='/'>
                    <div className="balance">
                        <button>
                            <span className="btn-font">Balance</span>
                        </button>
                    </div>
                </Link>


                <div className="userBtn">
                    <button >

                    </button>
                </div>
            </div>
        </AuthLayout>
    )
}
