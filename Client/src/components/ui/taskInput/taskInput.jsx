import './taskInput.css'
import deleteIcon from '../../../assets/delete.svg'
const TaskInput = () => {
  return (
    <div className="inpt-container">
      <div className="inpt-contents">
        <div className="input-left">
          <div className='inpt-radio'></div>
          <input placeholder="Add a task"></input>
        </div>
        <img src={deleteIcon} />
      </div>
    </div>
  )
}

export { TaskInput }
