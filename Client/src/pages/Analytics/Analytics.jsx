import { useSelector } from 'react-redux'
import { Analytics } from '../../components'
import './Analytics.css'
const AnalyticsPage = () => {
  const data = useSelector(state=>state.task);
  console.log(data);
  const items = [
    { name: 'Backlog Tasks', count: data.backlogs },
    { name: 'Todo Tasks', count: data.todotasks },
    { name: 'In-Progress Tasks', count: data.progresstasks },
    { name: 'Completed Tasks', count: data.completedTasks },
  ];
  
  const items2 = [
    { name: 'Low Priority', count: data.lowPriority },
    { name: 'Moderate Priority', count: data.moderatePriority },
    { name: 'High Priority', count: data.highPriority },
    { name: 'Due Date Tasks', count: data.dueDateTasks },
  ];
  
  
  return (
    <div className="analytics-container">
      <div className="analytics-heading">
        <h3>Analytics</h3>
      </div>
      <div className="analytic-card-container">
        <Analytics items={items} />
        <Analytics items={items2} />
      </div>
    </div>
  )
}

export default AnalyticsPage
