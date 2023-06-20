import "./Navbar.css";
import { ReactComponent as SearchIcon } from "../../Assets/Icons/search.svg";
import { ReactComponent as CalendarIcon } from "../../Assets/Icons/calendar.svg";
import { ReactComponent as QnAIcon } from "../../Assets/Icons/qna.svg";
import { ReactComponent as NotificationIcon } from "../../Assets/Icons/notification.svg";
import { ReactComponent as UserImageIcon } from "../../Assets/Icons/user.svg";
import { ReactComponent as DownArrowIcon } from "../../Assets/Icons/downArrow.svg";
import { ReactComponent as HideIcon } from "../../Assets/Icons/hide.svg";
import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { ReactComponent as TopMenuIcon } from "../../Assets/Icons/topMenu.svg";


import { Input } from "antd";
const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };
  return (
    <>
      <nav className="navbar">
        <div className="container">
  <div style={{
    display:'flex',
    alignItems:'center',
    paddingBottom:'5px'
  }}>
  <div className="mobile-logo" style={{
        
        alignItems:'center',
        justifyContent:'space-between',
        gap:'8px',
        marginLeft:'25px',
        
      }}>
        <TopMenuIcon/>
        <p>Project M.</p>
      </div>
          <div className="menu-icon" onClick={handleShowNavbar}>
            <HideIcon style={{
              marginTop:'0px',
              position:'absolute',
              right:'20px',
             bottom:'10px'
             
            }} />
          </div>
  </div>
          <div className={`nav-elements  ${showNavbar && "active"}`}>
            <ul style={{ listStyle: "none", marginTop:'0px' }} className="navabr-list-container">
              
              <li>
                <div className="input_container">
                  
                  <SearchIcon className="input-img" id='input-image'
                  style={{
                    position: 'absolute',
                    top:'25px',
                    zIndex:'1',
                    marginLeft:'10px',
                    
                  }} 
                  />
                  <Input
                    style={{
                      borderRadius: "5px",
                      backgroundColor: "#F5F5F5",
                      color: "#787486",
                      paddingLeft:'50px',
                      width:'400px',
                      height:'40px',
                      fontWeight:'400',
                      fontSize:'14px'
                    }}
                    placeholder="Search for anything..."
                    className="input"
                  />
                </div>
                </li>
                
                <li>
                <div className="navbar-icon" style={{}}>
                    <CalendarIcon className="navbar-icon" />
                    <QnAIcon className="navbar-icon" />
                    <NotificationIcon className="navbar-icon" />
                  </div>
                  
                </li>
                <li>
                <h5 className="username" style={{
                  marginRight:'10px'
                }}>Anima Agrawal</h5>
              <h6 className="city">U.P, India</h6>
                </li>
                <li>
                <UserImageIcon />
              <DownArrowIcon className="down-arrow" style={{margin:'10px'}} />
                </li>
              
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
