import "./Taskshow.css";
const Taskshow = ({ task = {} }) => {
  return (
    <div className="input-inside">
      <div className="inpt-radio">
        <div className="inpt-radio"></div>
      </div>
      <h3>{task?.title}</h3>
    </div>
  );
};

export { Taskshow };
