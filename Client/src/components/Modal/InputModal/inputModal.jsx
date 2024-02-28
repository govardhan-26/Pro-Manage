import { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import plus from '../../../assets/plus.svg'
import { Button, PriorityHolder, TaskInput } from '../../index'
import './inputModal.css'
const InputModal = ({ closeModal }) => {
  const xyz = useSelector((state) => state.task)
  const [title, setTitle] = useState('')
  const [date, setDate] = useState('')
  const [priority, setPriority] = useState('')
  const [tasks, setTasks] = useState([])
  const SetValues = (e) => {
    setInValue((prevInpt) => ({
      ...prevInpt,
      [name]: e.target.value,
    }))
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
        <div
          className="addNew"
          onClick={addNewTask}
        >
          <img src={plus} />
          <h3>Add New</h3>
        </div>

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
