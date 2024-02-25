// Dashboard.js
import React, { useContext } from 'react';
import { AuthLayout } from '../../components/authlayout/AuthLayout';
import hamburger_menu from '../../images/dash/hamburger_menu.svg';
import hankHill from '../../images/dash/Hank_Hill.webp';
import HamburgerNav from "../../components/hamburger-nav/HamburgerNav";
import { UIContext } from '../../UIContext';
import './dashboard.css';

export const Dashboard = () => {
    const { displaySideBar, toggleSideBar } = useContext(UIContext);

    return (
        <AuthLayout>
            <form onSubmit={(e) => e.preventDefault()}>
                <HamburgerNav/>
                <div className='hamburger-menu-section'>
                    <button onClick={toggleSideBar}>
                        <img
                            src={hamburger_menu}
                            alt="HamburgerMenu"
                            className='profile-image'
                        />
                    </button>
                </div>
                <div className='dashboard-content'>
                    <img
                        src={hankHill}
                        alt="Frame2"
                        className='profile-image'
                    />

                    <div id="hello" className='greeting-text'>Hi, Bsmith</div>

                    <div className='net-worth-section'>
                        <div className='net-worth-value'>###.##</div>
                        <div className='net-worth-label'>Net worth</div>
                    </div>

                    <div className='buttons-section'>
                        <button 
                            id="CashFlowBTN" 
                            className='dashboard-button'
                        >
                            Cash Flow
                        </button>
                        <button 
                            id="AssetTrackerBTN"
                            className='dashboard-button'
                        >
                            Balance Sheet
                        </button>
                        <button 
                            id="FirstTimeUserBTN"
                            className='first-time-user-text'
                        >
                            First Time User?
                        </button>
                    </div>
                </div>
            </form>
        </AuthLayout>
    );
};
