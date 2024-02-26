// import { Cardholder } from "../../components/CardHolder/Cardholder.jsx";
import { Sidebar, Cardholder, Ellipse, Analytics } from "../../components/index.js";
import "./Dashboard.css";

const Dashboard = () => {
  const items = ['Backlog Tasks', 'Todo Tasks', 'In-Progress Tasks', 'Completed Tasks']
  const items2 = ['Low Priority', 'Moderate Priority', 'High Priority', 'Due Date Tasks']
  
  return (
    <div className="Dash-container">
      <Sidebar />
      <div className="analytics-container">
        <div className="analytics-heading">
            <h1>Analytics</h1>
        </div>
        <Analytics items={items} />
        <Analytics items={items2} />
      </div>      
    </div>
  );
};

export default Dashboard;
