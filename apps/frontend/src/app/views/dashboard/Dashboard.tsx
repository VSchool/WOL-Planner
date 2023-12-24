import React from "react"
import bSmith from '../../images/dash/b_smith.svg'
import balance from '../../images/dash/balance_btn.svg'
import cashFlow from '../../images/dash/cashflow_btn.svg'
import hamburger_menu from '../../images/dash/hamburger_menu.svg'
import netWorth from '../../images/dash/net_worth.svg'
import profile from '../../images/dash/profile.svg'
import text from '../../images/dash/text.svg'
import userBtn from '../../images/dash/user_btn.svg'

export const Dashboard = () => {


    return (
        <div className="images">
            <img src={hamburger_menu} alt="" className="hamburger_menu_dash" />
            <img src={profile} alt="" className="profile_dash" />
            <img src={bSmith} alt="" className="bsmith" />
            <img src={text} alt="" className="text" />
            <img src={netWorth} alt="" className="networth" />
<button>

            <img src={balance} alt="" className="balance" />
</button>


                <button>
            <img src={cashFlow} alt="" className="cashFlow" />
                </button>

                <button>
            <img src={userBtn} alt="" className="userBtn" />
                </button>

        </div>
    )
}
