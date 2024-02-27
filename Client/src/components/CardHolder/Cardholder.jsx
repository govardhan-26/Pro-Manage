import { useState } from 'react'
import fold from '../../assets/fold.svg'
import plus from '../../assets/plus.svg'
import './Cardholder.css'
import { InputModal } from '../Modal/InputModal/inputModal'
const Cardholder = () => {
  const [isModalVisible, setIsModalVisible] = useState(false)
  return (
    <div className="card-container">
      <div className="Card-Header-up">
        <h4>To do</h4>
        <div className="Card-icons-up">
          <img
            onClick={() => setIsModalVisible(true)}
            src={plus}
          />
          <img src={fold} />
        </div>
        {isModalVisible && <InputModal closeModal={()=>setIsModalVisible(false)} />}
      </div>
    </div>
  )
}
export { Cardholder }
