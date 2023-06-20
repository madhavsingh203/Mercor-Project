import "./Navbar.css";
import { ReactComponent as SearchIcon } from "../../Assets/Icons/search.svg";

import { ReactComponent as CalendarIcon } from "../../Assets/Icons/calendar.svg";
import { ReactComponent as QnAIcon } from "../../Assets/Icons/qna.svg";
import { ReactComponent as NotificationIcon } from "../../Assets/Icons/notification.svg";
import { ReactComponent as UserImageIcon } from "../../Assets/Icons/user.svg";
import { ReactComponent as DownArrowIcon } from "../../Assets/Icons/downArrow.svg";
import { Input } from "antd";
const Navbar = () => {
  return (
    <>
      <div className="navbar-flex">
        <div className="container">
          <div className="top-menu"></div>

          <div id="input_container">
            <SearchIcon id="input_img" />
            <Input placeholder="Search for anything..." id="input" />
          </div>
        </div>
        <div className="navbar-flex">
          <div className="navbar-icon navbar-flex">
            <CalendarIcon className="navbar-icon" />
            <QnAIcon className="navbar-icon" />
            <NotificationIcon className="navbar-icon" />
          </div>
          <div className="navbar-flex">
            <div>
              <h5 className="username">Anima Agrawal</h5>
              <h6 className="city">U.P, India</h6>
            </div>
            <div className="navbar-flex">
              <UserImageIcon />
              <DownArrowIcon className="down-arrow" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Navbar;
