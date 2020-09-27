import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as HiIcons from 'react-icons/hi';
import { SidebarData } from './SidebarData';
import { IconContext } from 'react-icons';
import Search from './Search';
import DonateBtn from './DonateBnt';
import Filters from './Filters';
import Settings from './Settings';

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  return (
    <>
      <IconContext.Provider value={{ color: '#ffffff' }}>
        <div className="navbar">
          <Link to="#" className="menu-bars">
            <HiIcons.HiOutlineMenuAlt1 onClick={showSidebar} />
          </Link>
          <Search />
          <DonateBtn />
        </div>
        <Filters />
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <HiIcons.HiOutlineX />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon} <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
          <div>
            <Settings/>
          </div>
          <div className="footer">
            <h1 className="footer__organization">
              @2020 deepverse.io, All Right Reserved. Terms | Privacy | Cookie
              Policy
            </h1>
          </div>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
