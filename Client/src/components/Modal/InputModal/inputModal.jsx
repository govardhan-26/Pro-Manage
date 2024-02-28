import { useState } from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import plus from '../../../assets/plus.svg'
import { Button, PriorityHolder, TaskInput } from '../../index'
import './inputModal.css'
const InputModal = ({ closeModal }) => {
  const [title, setTitle] = useState('')
  const [date, setDate] = useState('')
  const [cal, setCal] = useState(false)
  const [priority, setPriority] = useState('')
  const [tasks, setTasks] = useState([])
  const SetValues = (e) => {
    setInValue((prevInpt) => ({
      ...prevInpt,
      [name]: e.target.value,
    }))
  }
  const handleDateChange = (newDate) => {
    setDate(newDate)
    setCal(false)
  }
  const formatDate = (date) => {
    const day = date.getDate().toString().padStart(2, '0')
    const month = (date.getMonth() + 1).toString().padStart(2, '0')
    const year = date.getFullYear()
    return `${month}/${day}/${year}`
  }

  const addNewTask = () => {
    setTasks([...tasks, { text: '', completed: false }])
  }
  const deleteTask = (index) => {
    const updatedTasks = [...tasks]
    updatedTasks.splice(index, 1)
    setTasks(updatedTasks)
  }
  const handleTaskChange = (index, newText) => {
    const updatedTasks = [...tasks]
    updatedTasks[index].text = newText
    setTasks(updatedTasks)
  }
  return (
    <div className="relative">
      <div className="input-m-container">
        <div className="add-new-content">
          <div className="title-m">
            <h2>Title</h2>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              placeholder="Enter Task Title"
            />
          </div>
          <div className="priority-m">
            <h2>Select Priority</h2>
            <div className="priority-labels">
              <PriorityHolder
                setPriority={setPriority}
                priority={priority}
              >
                HIGH
              </PriorityHolder>
              <PriorityHolder
                setPriority={setPriority}
                priority={priority}
              >
                MODERATE
              </PriorityHolder>
              <PriorityHolder
                setPriority={setPriority}
                priority={priority}
              >
                LOW
              </PriorityHolder>
            </div>
          </div>
          <h2 className="checklist-m">Checklist (0/0)</h2>

          {tasks.length != 0 ? (
            <div className="scrollable-m">
              <div className="input-holder">
                {tasks.map((task, index) => {
                  return (
                    <TaskInput
                      value={task.text}
                      setValue={(ans) => handleTaskChange(index, ans)}
                      deleteTask={() => deleteTask(index)}
                    />
                  )
                })}
              </div>
            </div>
          ) : (
            <></>
          )}

          <div className="addNew">
            <div
              className="addNew-button"
              onClick={addNewTask}
            >
              <img src={plus} />
              <h3>Add New</h3>
            </div>
          </div>
        </div>
        <div className="buttons-m">
          <Button
            onclick={() => setCal(true)}
            text={date ? formatDate(date) : 'Select Due Date'}
            width="185px"
            border="1px solid #e2e2e2"
            color="#707070"
            bg="none"
          ></Button>
          {cal && (
            <Calendar
              value={date}
              onChange={handleDateChange}
              className="calendar"
            />
          )}
          <div className="down-m-button">
            <Button
              text="Cancel"
              onclick={closeModal}
              width="162.5px"
              bg={'#ffffff'}
              border={'1px solid #cf3636'}
              color="#cf3636"
            ></Button>
            <Button
              text="Save"
              width="162.5px"
              bg="#17a2bb"
              border="none"
              color="#ffffff"
            ></Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export { InputModal }
