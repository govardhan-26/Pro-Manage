import './Dropdown.css'
const Dropdown = ({ setFilter }) => {
  const handleFilterChange = (event) => {
    const selectedFilter = event.target.value
    setFilter(selectedFilter)
  }

  return (
    <div className="dropdown-container">
      <select
        className="dropdown-select"
        onChange={handleFilterChange}
      >
        <option value="week">This Week</option>
        <option value="day">Today</option>
        <option value="month">This Month</option>
      </select>
    </div>
  )
}

export { Dropdown }
