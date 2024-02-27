import { useState } from 'react'
import { useSelector } from 'react-redux'
import { Button, PriorityHolder } from '../../index'
import './inputModal.css'
const InputModal = ({ closeModal }) => {
  const xyz = useSelector((state) => state.task)
  const [value, setValue] = useState({
    title: '',
    priority: '',
    label: '',
    date: '',
    tasks: [],
  })
  const handleSetValue = (field, fieldValue) => {
    setValue((prevValue) => {
      if (field === 'tasks' && Array.isArray(fieldValue)) {
        return {
          ...prevValue,
          tasks: [...prevValue.tasks, ...fieldValue],
        }
      } else {
        return {
          ...prevValue,
          [field]: fieldValue,
        }
      }
    })
  }
  console.log(value)
  return (
    <div className="relative">
      <div className="input-m-container">
        <div className="title-m">
          <h2>Title</h2>
          <input
            type="text"
            placeholder="Enter Task Title"
          />
        </div>
        <div className="priority-m">
          <h2>Select Priority</h2>
          <div className="priority-labels">
            <PriorityHolder>HIGH</PriorityHolder>
            <PriorityHolder>MODERATE</PriorityHolder>
            <PriorityHolder>LOW</PriorityHolder>
          </div>
        </div>
        <h2 className="checklist-m">Checklist (0/0)</h2>
        <div className="scrollable-m"></div>

        <div className="buttons-m">
          <Button
            width="185px"
            border="1px solid #e2e2e2"
            color="#707070"
            shadow="0 2px 12px 0 rgba(130, 105, 140, 0.2)"
            bg="none"
          >
            Select Due Date
          </Button>
          <div className="down-m-button">
            <Button
              onclick={closeModal}
              width="162.5px"
              bg={'#ffffff'}
              border={'1px solid #cf3636'}
              color="#cf3636"
            >
              Cancel
            </Button>
            <Button
              width="162.5px"
              bg="#17a2bb"
              border="none"
              color="#ffffff"
            >
              Save
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export { InputModal }
