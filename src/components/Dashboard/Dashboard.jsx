import Sidebar from "../Sidebar/Sidebar";
import "./Dashboard.css";
import Navbar from "../Navbar/Navbar";
import { Divider } from "antd";
import MainFeed from "../MainFeed/MainFeed";
import Board from "../Board/Board";
import { Layout, Menu } from "antd";
const Dashboard = () => {
  const { Sider } = Layout;
  return (
    <>
      <div className="top-bar">
        <Sidebar />
        <Navbar />
        <Divider type="" style={{ backgroundColor: "#DBDBDB" }} />
        <Divider
          type="vertical"
          className="vertical-divider"
          style={{ height: "100%" }}
        />
      </div>
      <MainFeed />
    </>
  );
};

export default Dashboard;
