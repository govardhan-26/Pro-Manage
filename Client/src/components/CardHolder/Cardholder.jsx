import { useState } from "react";
import fold from "../../assets/fold.svg";
import plus from "../../assets/plus.svg";
import "./Cardholder.css";
import { InputModal } from "../Modal/InputModal/inputModal";
import { DisplayCard } from "../DisplayCard/DisplayCard";

const Cardholder = ({ heading, plusSymbol }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const displaycards = [1, 2, 3];

  return (
    <div className="card-container">
      <div className="Card-Header-up">
        <h4>{heading}</h4>
        <div className="Card-icons-up">
          {plusSymbol && (
            <img onClick={() => setIsModalVisible(true)} src={plus} />
          )}
          <img src={fold} />
        </div>
        {isModalVisible && (
          <InputModal closeModal={() => setIsModalVisible(false)} />
        )}
      </div>
      <div className="board-card-container">
        {displaycards.map((item, index) => (
          <DisplayCard />
        ))}
      </div>
    </div>
  );
};
export { Cardholder };
