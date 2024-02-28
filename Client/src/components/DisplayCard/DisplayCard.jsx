import { Badge, Ellipse, RedDateBadge, Taskshow } from "../index";
import "./DisplayCard.css";
import { useState } from "react";
import dropdown from "../../assets/drop-down.svg";
import dropup from "../../assets/drop-up.svg";
import dots from "../../assets/three-dots.svg";
import { getFormattedDate } from "../../utils/formatDate";
const DisplayCard = ({
  priority = "HIGH",
  title = "",
  date = new Date(),
  tasks = [],
}) => {
  const [drop, setDrop] = useState(true);
  const array = [1, 2, 3];
  let bg =
    priority === "HIGH"
      ? "#FF2473"
      : priority === "MODERATE"
        ? "#18B0FF"
        : "#63C05B";
  let dueDate = getFormattedDate(date);
  return (
    <div className="todo-card-container">
      <div className="todo-card-content">
        <div className="todo-card-priority">
          <div className="todo-card-prior">
            <Ellipse bg={bg} />
            <div className="todo-card-priority-text">{`${priority} PRIORITY`}</div>
          </div>
          <div className="todo-cards-dots">
            <img src={dots} alt="dots" />
          </div>
        </div>
        <div className="todo-card-heading">
          <div className="todo-card-heading-text">{title}</div>
        </div>
        <div className="todo-card-checklist">
          <div className="todo-checklist-heading">
            <h2>Checklist (0/3)</h2>
            <div className="down-icon" onClick={() => setDrop(!drop)}>
              {drop ? (
                <img src={dropup} alt="dropup" />
              ) : (
                <img src={dropdown} alt="dropdown" />
              )}
            </div>
          </div>
          {drop ? (
            <div className="todo-checklist-content">
              {tasks.map((item, index) => {
                return <Taskshow task={item} />;
              })}
            </div>
          ) : (
            <></>
          )}
        </div>
        <div className="todo-card-progress">
          <div className="todo-card-progress-1">
            <RedDateBadge>{dueDate}</RedDateBadge>
          </div>
          <div className="todo-card-progress-2">
            <Badge width="42px">PROGRESS</Badge>
            <Badge width="42px">TODO</Badge>
            <Badge width="42px">DONE</Badge>
          </div>
        </div>
      </div>
    </div>
  );
};

export { DisplayCard };
