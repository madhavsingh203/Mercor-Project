import { ReactComponent as HomeIcon } from "../../Assets/Icons/HomeIcon.svg";
import { ReactComponent as MessageIcon } from "../../Assets/Icons/messages.svg";
import { ReactComponent as TasksIcon } from "../../Assets/Icons/tasks.svg";
import { ReactComponent as MembersIcon } from "../../Assets/Icons/members.svg";
import { ReactComponent as SettingsIcon } from "../../Assets/Icons/settings.svg";
import { ReactComponent as ThoughtsIcon } from "../../Assets/Icons/thoughts.svg";
import { ReactComponent as TopMenuIcon } from "../../Assets/Icons/topMenu.svg";
import { ReactComponent as HideIcon } from "../../Assets/Icons/hide.svg";
import { ReactComponent as BulbIcon } from "../../Assets/Icons/bulb.svg";
import { ReactComponent as LightIcon } from "../../Assets/Icons/light.svg";

import "./Sidebar.css";
import { useState } from "react";
import { Input } from "antd";
const Sidebar = () => {
  const [showNavbar, setShowNavbar] = useState(true)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }
  const SidebarMenu = [
    {
      key: "1",
      icon: <HomeIcon />,
      label: "Home"
    },
    { key: "2", icon: <MessageIcon />, label: "Messages" },
    { key: "3", icon: <TasksIcon />, label: "Tasks" },
    { key: "4", icon: <MembersIcon />, label: "Members" },
    { key: "5", icon: <SettingsIcon />, label: "Settings" }
  ];

  const sidebarProjects = [
    {
      key: "1",
      color: "#7AC555",
      label: "Mobile App",
      bgColor: "5030E5"
    },
    {
      key: "2",
      color: "#FFA500",
      label: "Website Redesign"
    },
    {
      key: "3",
      color: "#E4CCFD",
      label: "Design System"
    },
    {
      key: "4",
      color: "#76A5EA",
      label: "Wireframes"
    }
  ];

 

  return (
    <>

      <div  className="sidebar-container">
        <div className="sidebar-top-main">
          <div className="sidebar-top">
            <TopMenuIcon />
            <h3  style={{ marginLeft: "9px" }}>Project M.</h3>
          </div>
          <div >
            <HideIcon style={{ marginRight: "0px" }} />
          </div>
         
        </div>
        <div >
        <div className="sidebar-row-container">
          {SidebarMenu.map((menuItem) => (
            <div key={menuItem.key} className="sidebar-row">
              <span className="sidebar-label"> {menuItem.icon} </span>
              <label className="sidebar-label">{menuItem.label}</label>
            </div>
          ))}
        </div>

        <div className="project-header">
          <h5>MY PROJECTS</h5>
          <button className="header-btn">+</button>
        </div>
        <div className="my-projects-container">
          {sidebarProjects.map((project) => (
            <div
              key={project.key}
              className={`my-projects `}
              style={{
                backgroundColor: `${project.key === "1" ? "#5030E514" : "#fff"}`,
                borderRadius:'10px',
                paddingLeft:'0px',
                
              }}
            >
              
              <button
                className={
                  `${project.key === "1" ? "projects-first-button" : "projects-btn"}`

                }
                style={{
                backgroundColor: `${project.key === "1" ? "#5030E514" : ""}`,
                borderRadius:'8px',
                display:'flex',
                alignItems:'center'
              }}
              >
                <div
                className="project-indicator"
                style={{ backgroundColor: project.color, 
                marginBottom:`${project.key === "1" ? "10px" : "10px"}`,
                marginLeft:'10px'
             
              }}
              ></div>
              <div style={{
                marginLeft:'16px'
              }}>

                {project.label}
              </div>
              </button>
            </div>
          ))}
        </div>
        <div className="thoughts">
          <LightIcon className="light"/>
          <BulbIcon className="bulb"/>
          <ThoughtsIcon className="thought"/>
          <div className="thoughts_content_container">
          <h4>Thoughts Time</h4>
          <p>We don’t have any notice for you, till then you can share your thoughts with your peers.</p>
          <Input style={{
            width:'166px',
            borderRadius:'5px',
            padding:'12px 27px 12px 27px'
          }} 
          placeholder="Write a message"
          />
          </div>
        </div>
        </div>
      </div>
    </>
  );
};
export default Sidebar;
