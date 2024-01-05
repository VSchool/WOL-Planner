import React from "react"
import { AuthLayout } from '../../components/authlayout/AuthLayout';
import './dashboard.css'
import hamburger_menu from '../../images/dash/hamburger_menu.svg'
import hankHill from '../../images/dash/Hank_Hill.webp'

export const Dashboard = () => {
  //With Testing

    return (
        <AuthLayout className="h-screen">
            <div className="page">
            <button className="burger">
                <img src={hamburger_menu} alt="" className="hamburger_menu_dash" />
            </button>

            <div className="profile_dash">
                <img src={hankHill} alt="" className="profile_dash" />
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


            <button className="balance">
                <span className="btn-font">Cash Flow</span>
            </button>


            <button className="balance">
                <span className="btn-font">Balance</span>
            </button>

            <div className="userBtn">
                <button >

                </button>
            </div>
            </div>
        </AuthLayout>
    )
}
