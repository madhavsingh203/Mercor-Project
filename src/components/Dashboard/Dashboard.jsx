import Sidebar from "../Sidebar/Sidebar";
import "./Dashboard.css";
import Navbar from "../Navbar/Navbar";
import { Divider } from "antd";
import MainFeed from "../MainFeed/MainFeed";
import Board from "../Board/Board";
import { Layout, Menu } from "antd";
const Dashboard = () => {

  
  return (
    <>
      <div className="top-bar">

        <Sidebar />
        <Navbar />
        <Divider type="" style={{ backgroundColor: "#DBDBDB" }} />
       
      </div>
      <MainFeed />
    </>
  );
};

export default Dashboard;
