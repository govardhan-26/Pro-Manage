import { Ellipse } from '../Ellipse/Ellipse'
import './PriorityHolder.css'

const PriorityHolder = ({ children }) => {
  let width, bg;
  width =
    children === 'HIGH' ? '135px' : children === 'MODERATE' ? '175px' : '132px'
bg=    children === 'HIGH' ? '#FF2473' : children === 'MODERATE' ? '#18B0FF' : '#63C05B'
  const styles = {
    width: width,
  }
  return (
    <div
      style={styles}
      className="pr-container"
    >
      <Ellipse bg={bg} />
      <p> {`${children} PRIORITY`}</p>
    </div>
  )
}

export { PriorityHolder }
