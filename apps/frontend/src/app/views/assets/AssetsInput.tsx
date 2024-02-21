import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthLayout } from '../../components/authlayout/AuthLayout';
import hamburger_menu from '../../images/dash/hamburger_menu.svg';
import hankHill from '../../images/dash/Hank_Hill.webp';
import image103 from '../../images/logos/loginGroup103.svg';
import HamburgerNav from '../../components/hamburger-nav/HamburgerNav';
import './assets.css';
import styles from '../../app.module.scss';

export const AssetsInput = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showInputForm, setShowInputForm] = useState<string>('')

  const handleAddButtonClick = (sectionName: string) => {
    setShowInputForm(sectionName)
  }
  return (
    <AuthLayout>
      {!isOpen ? (
        <div className={styles['hamburger-menu-section']}>
          <button onClick={() => setIsOpen(!isOpen)}>
            <img
              src={hamburger_menu}
              alt="HamburgerMenu"
              className={styles['profile-image']}
            />
          </button>
          <div className="dashboard-content">
            <img
              src={hankHill}
              alt="Frame2"
              className={styles['profile-image']}
            />
          </div>
        </div>
      ) : (
        <div onClick={() => setIsOpen(!isOpen)}>
          <HamburgerNav />
        </div>
      )}
      <div>
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
          <div className="button-div">
            <p className="asset_p">Personal</p>
            <div className="button-and-form-container">
             
            <button className="add_btn" onClick={() => handleAddButtonClick('personal')}>Add</button>
            {showInputForm === 'personal' && (
                <div className='form-container'>
                    <form className='asset-form'>
                        <input type='text'placeholder='Asset Name'></input>
                        <input type='text' placeholder='$00.00'></input>
                        <button className='asset-form-button'>Select Category</button>
                    </form>
                </div>
            )}
          </div>
          </div>
          <hr className="horizontal_line"></hr>
          <div className="button-div">
            <p className="asset_p">Investable</p>
            <div className="button-and-form-container">
             
            <button className="add_btn" onClick={() => handleAddButtonClick('investable')}>Add</button>
            {showInputForm === 'investable' && (
                <div className='form-container'>
                    <form className='asset-form'>
                        <input type='text'placeholder='Asset Name'></input>
                        <input type='text' placeholder='$00.00'></input>
                        <button className='asset-form-button'>Select Category</button>
                    </form>
                </div>
                
            )}
            </div>
          </div>
          <hr className="horizontal_line"></hr>
          <div className="button-div">
            <p className="asset_p">Non-Investable</p>
            <div className="button-and-form-container">
             
            <button className="add_btn" onClick={() => handleAddButtonClick('non-investable')}>Add</button>
            {showInputForm === 'non-investable' && (
                <div className='form-container'>
                    <form className='asset-form'>
                        <input type='text'placeholder='Asset Name'></input>
                        <input type='text' placeholder='$00.00'></input>
                        <button className='asset-form-button'>Select Category</button>
                    </form>
                </div>
                
            )}
            </div>
            
          </div>
          <hr className="horizontal_line"></hr>
          <div className="value_div">
            <p className="asset_p_value">Value:</p>
          </div>
          <button className="asset_button_large">Use Last Month</button>
          <button className="asset_button_large">Update Assets</button>
        </div>
      </div>
    </AuthLayout>
  );
};
