import React from "react"
import './dashboard.css'
import bSmith from '../../images/dash/b_smith.svg'
import balance from '../../images/dash/balance_btn.svg'
import cashFlow from '../../images/dash/cashflow_btn.svg'
import hamburger_menu from '../../images/dash/hamburger_menu.svg'
import netWorth from '../../images/dash/net_worth.svg'
import profile from '../../images/dash/profile.svg'
import text from '../../images/dash/text.svg'
import userBtn from '../../images/dash/user_btn.svg'

export const Dashboard = () => {
//testing

    return (
        <div className="page">

            <button className="burger">
            <img src={hamburger_menu} alt="" className="hamburger_menu_dash" />
            </button>
            <div className="profile_dash">
            <img src={profile} alt="" className="profile_dash" />
            </div>
            <div className="bsmith">
            <img src={bSmith} alt="" className="bsmith" id="bsmith" />
            </div>
            <div className="text">
            <img src={text} alt="" className="text" />
            </div>
            <div className="networth">
            <img src={netWorth} alt="" className="networth" />
            </div>
            <button className="balance">
            <img src={balance} alt="" className="balance" />
            </button>


                <button className="balance">
            <img src={cashFlow} alt="" className="cashFlow" />
                </button>

                <button className="userBtn">
            <img src={userBtn} alt="" className="userBtn" />
                </button>
                </div>
    )
}
