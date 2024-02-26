import { Cardholder, Dropdown } from "../../components"
import "./Board.css"


const BoardPage = () => {
  return (
    <div className="board-container">
      <div className="board-upper">
        <div className="board-upper-content">  
          <div className="board-welcome-text">
            <div className="w-text">
              Welcome! Kumar
            </div>
            <div className="w-date">
              12th Jan 2024
            </div>
          </div>
          <div className="board-heading">
            <p className="board-heading-text">
              Board
            </p>
            <Dropdown/>
          </div>
        </div>
      </div>
      <div className="board-wrapper">

      <div className="board-cards">
        <Cardholder/>
        <Cardholder/>
        <Cardholder/>
        <Cardholder/>
      </div>
      </div>
    </div>
  )
}

export default BoardPage;

