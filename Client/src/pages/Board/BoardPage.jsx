import { Cardholder, Dropdown } from "../../components";
import { useGetAllTodosQuery } from "../../store/api/todoapi";
import { DateToday } from "../../utils/date";
import "./Board.css";
const BoardPage = () => {
  // const {
  //   userInfo: { userName },
  // } = useSelector((state) => state.auth)
  let userName = "";

  const { data, isLoading, isSuccess } = useGetAllTodosQuery();
  console.log(data?.todos);
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
          <Cardholder heading="Backlog" plusSymbol={false} />
          <Cardholder todos={data?.todos} heading="To-do" plusSymbol={true} />
          <Cardholder heading="In-Progress" plusSymbol={false} />
          <Cardholder heading="Done" plusSymbol={false} />
        </div>
      </div>
    </div>
  );
};

export default BoardPage;
