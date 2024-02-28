import deleteIcon from "../../../assets/delete.svg";
import "./taskInput.css";
const TaskInput = ({ value, setValue, deleteTask }) => {
  return (
    <div className="inpt-container">
      <div className="inpt-contents">
        <div className="input-left">
          <div className="inpt-radio"></div>
          <input
            placeholder="Add a task"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          ></input>
        </div>
        <img
          onClick={deleteTask}
          src={deleteIcon}
          style={{ cursor: "pointer" }}
        />
      </div>
    </div>
  );
};

export { TaskInput };
