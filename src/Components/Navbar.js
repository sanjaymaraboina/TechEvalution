import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SidebarData } from './Sidebar';
import{NavbarData} from './Sidebar'
import './Navbar.css';
import { IconContext } from 'react-icons';

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
 

  return (
    <div>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar'>
          <p>Tech <br></br> Evalution</p>
          <div className='nav-menu'>
          {NavbarData.map((item, index) => {
              return (
                <div>
                
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
                </div>
                
              );
            })}
          </div>
        </div>
        <nav className={sidebar ? 'side-menu active' : 'side-menu '}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              
            </li>
            
            {SidebarData.map((item, index) => {
              return (
                <div>
                
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
                </div>
                
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </div>
  );
}

export default Navbar;