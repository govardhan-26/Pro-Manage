
import { Sidebar } from "../../components/index.js";
import AnalyticsPage from "../Analytics/Analytics.jsx";
import "./Dashboard.css";
import SettingsPage from "../Settings/Settings.jsx";
import BoardPage from "../Board/BoardPage.jsx";
const Dashboard = () => {

  return (
    <div className="Dash-container">
      <Sidebar />
      {/* <AnalyticsPage/> */}
      {/* <SettingsPage/> */}
      <BoardPage/>
    </div>
  );
};

export default Dashboard;
