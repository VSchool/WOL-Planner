import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthLayout } from '../../components/authlayout/AuthLayout';
import hamburger_menu from '../../images/dash/hamburger_menu.svg';
import hankHill from '../../images/dash/Hank_Hill.webp';
import image103 from '../../images/logos/loginGroup103.svg';
import HamburgerNav from '../../components/hamburger-nav/HamburgerNav';
import './assets.css';

export const AssetsInput = () => {
  return (
    <div>
      <img src="../../images/dash/hamburger_menu.svg" alt="" />
      <div className="headline">
        <p className="p_headline">
          Let's get an understanding of your assets this month
        </p>
      </div>
      <div className="btn-container">
        <button className="asset_type_button">Select Asset Type</button>
      </div>
      <div className="asset_input_main_div">
        <hr className="horizontal_line"></hr>
        <p className="asset_p">Personal</p>
        <hr className="horizontal_line"></hr>
        <p className="asset_p">Investable</p>
        <hr className="horizontal_line"></hr>
        <p className="asset_p">Non-Investable</p>
        <hr className="horizontal_line"></hr>
        <div className="value_div">
          <p className="asset_p_value">Value:</p>
        </div>
        <button className="asset_button_large">Use Last Month</button>
        <button className="asset_button_large">Update Assets</button>
      </div>
    </div>
  );
};
