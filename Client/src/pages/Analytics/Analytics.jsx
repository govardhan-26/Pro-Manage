import { Analytics } from '../../components'
import "./Analytics.css"
const AnalyticsPage = () => {
  const items = [
    'Backlog Tasks',
    'Todo Tasks',
    'In-Progress Tasks',
    'Completed Tasks',
  ]
  const items2 = [
    'Low Priority',
    'Moderate Priority',
    'High Priority',
    'Due Date Tasks',
  ]

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
