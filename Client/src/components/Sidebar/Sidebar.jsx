import "./Sidebar.css";
import promanage from "../../assets/promanage-icon.svg";
import board from "../../assets/board.svg";
import settings from "../../assets/settings.svg";
import analytics from "../../assets/analytics.svg";

const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <div className="sidebar-element-head">
        <div className="sidebar-head sidebar-items">
          <img src={promanage} />
          <p>Pro Manage</p>
        </div>
      </div>
      <div className="sidebar-element-tails">
        <div className="sidebar-element">
          <div className="sidebar-board sidebar-items active">
            <img src={board} />
            <p>Board</p>
          </div>
        </div>
        <div className="sidebar-element">
          <div className="sidebar-analytics sidebar-items">
            <img src={analytics} />
            <p>Analytics</p>
          </div>
        </div>
        <div className="sidebar-element">
          <div className="sidebar-settings sidebar-items">
            <img src={settings} />
            <p>Settings</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Sidebar };
