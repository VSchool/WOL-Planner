import React, { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { UserContext } from '../../app';
import hamburger_menu from '../../images/dash/hamburger_menu.svg';
import HamburgerNav from '../hamburger-nav/HamburgerNav';

export default function Header() {
  const { user, setUser } = React.useContext(UserContext);

  const [showSidebar, setShowSidebar] = useState(false);
  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const container: any = useRef(null);
  const adminContainer: any = useRef(null);

  const [showUserMenu, setShowUserMenu] = useState(false);
  const [currentHeader, setCurrentHeader] = useState('');

  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const [showAdminMenu, setShowAdminMenu] = useState(false);

  const defaultUserPhotoURL =
  'https://www.gravatar.com/avatar/00000000000000000000000000000000';
  const userPhotoURL = user.picture || defaultUserPhotoURL;

  const hasAdminAccess = user.roles?.includes('Admin');

  useEffect(() => {
    const currentUrl = window.location.pathname.split('/')[1];
    console.log(currentUrl);
    setCurrentHeader(currentUrl);
  }, []);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (!container?.current?.contains(event.target)) {
        if (!showUserMenu) return;
        setShowUserMenu(false);
      }
    };

    window.addEventListener('click', handleOutsideClick);
    return () => window.removeEventListener('click', handleOutsideClick);
  }, [showUserMenu, container]);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (!adminContainer?.current?.contains(event.target)) {
        if (!showAdminMenu) return;
        setShowAdminMenu(false);
      }
    };

    window.addEventListener('click', handleOutsideClick);
    return () => window.removeEventListener('click', handleOutsideClick);
  }, [showAdminMenu, adminContainer]);

  const handleLogout = () => {
    setUser({ firstName: null, lastName: null, id: null, joinDate: null, email: null, userType: 'Reader', roles: ['None'] });
    localStorage.clear();
  }

  const onMenuItemClick = (path: any) => {
    setShowUserMenu(false);
    setShowAdminMenu(false);
    setShowMobileMenu(false);
    setCurrentHeader(path);
  };

  function classNames(...classes: any[]) {
    return classes.filter(Boolean).join(' ');
  }

    return (
        <header className="py-5 bg-white lg:bg-black">
          <nav className="relative z-50 flex justify-center">
            <div className="flex w-full flex-wrap items-center justify-start px-3">
              <button
                  onClick={toggleSidebar}
                  className="border-0 bg-transparent px-2 text-xl leading-none Transition-shadow duration-150 ease-in-out lg:hidden"
                  type="button"
                  data-te-collapse-init
                  data-te-target="#navbarSupportedContentY"
                  aria-controls="navbarSupportedContentY"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <img
                    src={hamburger_menu}
                    alt="Hamburger Menu"
                    className="w-10 h-10"
                  />
              </button>
              <div onClick={toggleSidebar} className='lg:hidden'>
              <HamburgerNav 
                show={showSidebar} 
                />
              </div>
              <div
                  className="!visible hidden grow basis-[100%] items-center lg:!flex lg:basis-auto ml-7 flex justify-center"
                  id="navbarSupportedContentY"
                  data-te-collapse-item
                >
                  <ul className="flex flex-col lg:flex-row" 
                  >

                    <li className="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
                      <NavLink
                        className={`block transition duration-150 ease-in-out lg:p-2 ${
                          currentHeader === "about" ? "text-white bg-black rounded" : ""
                        }`}
                        to="/dashboard"
                        data-te-nav-link-ref
                        data-te-ripple-init
                        data-te-ripple-color="light"
                        onClick={() => onMenuItemClick("dashboard")}
                      >
                        Dashboard
                      </NavLink>
                    </li>
                    <li className="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
                      <NavLink
                        className={`block transition duration-150 ease-in-out lg:p-2 ${
                          currentHeader === "about" ? "text-white bg-black rounded" : ""
                        }`}
                        to="/cashflow"
                        data-te-nav-link-ref
                        data-te-ripple-init
                        data-te-ripple-color="light"
                        onClick={() => onMenuItemClick("cashflow")}
                      >
                        Cash Flow
                      </NavLink>
                    </li>
                    <li className="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
                      <NavLink
                        className={`block transition duration-150 ease-in-out lg:p-2 ${
                          currentHeader === "about" ? "text-white bg-black rounded" : ""
                        }`}
                        to="/assets"
                        data-te-nav-link-ref
                        data-te-ripple-init
                        data-te-ripple-color="light"
                        onClick={() => onMenuItemClick("assets")}
                      >
                        Assets
                      </NavLink>
                    </li>
                    <li className="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
                      <NavLink
                        className={`block transition duration-150 ease-in-out lg:p-2 ${
                          currentHeader === "about" ? "text-white bg-black rounded" : ""
                        }`}
                        to="/liabilities"
                        data-te-nav-link-ref
                        data-te-ripple-init
                        data-te-ripple-color="light"
                        onClick={() => onMenuItemClick("liabilities")}
                      >
                        Liabilities
                      </NavLink>
                    </li>
                  </ul>
              </div>
            </div>
          </nav>
        </header>
        
  )
}