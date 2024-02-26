import React from 'react'
import './Dropdown.css'

const Dropdown = () => {
  return (
    <div className='dropdown-container'>
        <select className='dropdown-select'>
            <option value="">This Week</option>
            <option value="option1">Today</option>
            <option value="option2">This Month</option>
        </select>
    </div>
  )
}

export  {Dropdown}