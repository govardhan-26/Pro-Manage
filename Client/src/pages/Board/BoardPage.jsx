import { useSelector } from "react-redux";
import { Cardholder, Dropdown } from "../../components";
import "./Board.css";
import { DateToday } from "../../utils/date";
const BoardPage = () => {
  const {
    userInfo: { userName },
  } = useSelector((state) => state.auth);
  return (
    <div className="board-container">
      <div className="board-upper">
        <div className="board-upper-content">
          <div className="board-welcome-text">
            <div className="w-text">Welcome! {userName}</div>
            <div className="w-date">{DateToday}</div>
          </div>
          <div className="board-heading">
            <p className="board-heading-text">Board</p>
            <Dropdown />
          </div>
        </div>
      </div>
      <div className="board-wrapper">
        <div className="board-cards">
          <Cardholder />
          <Cardholder />
          <Cardholder />
          <Cardholder />
        </div>
      </div>
    </div>
  );
};

export default BoardPage;
