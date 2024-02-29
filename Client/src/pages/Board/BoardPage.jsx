import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Cardholder, Dropdown } from "../../components";
import { getAllTodos, useGetAllTodosQuery } from "../../store/api/todoapi";
import { DateToday } from "../../utils/date";
import "./Board.css";
const BoardPage = () => {
  const {
    userInfo: { userName },
  } = useSelector((state) => state.auth);
  const { data, refetch, isLoading, isSuccess } = useGetAllTodosQuery();
  useEffect(() => {
    refetch();
  }, []);
  const BACKLOG = data?.todos.filter((x) => x.label === "BACKLOG");
  const TODO = data?.todos.filter((x) => x.label === "TO-DO");
  const DONE = data?.todos.filter((x) => x.label === "DONE");
  const PROGRESS = data?.todos.filter((x) => x.label === "PROGRESS");
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
          <Cardholder todos={BACKLOG} heading="Backlog" plusSymbol={false} />
          <Cardholder todos={TODO} heading="To-do" plusSymbol={true} />
          <Cardholder todos={PROGRESS} heading="Progress" plusSymbol={false} />
          <Cardholder heading="Done" todos={DONE} plusSymbol={false} />
        </div>
      </div>
    </div>
  );
};

export default BoardPage;
