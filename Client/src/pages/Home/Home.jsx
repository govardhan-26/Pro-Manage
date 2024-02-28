import { Badge, DateBadge, Ellipse, LoginInput, TaskInput, Taskholder,Taskshow } from '../../components'
import './Home.css'
import dots from '../../assets/three-dots.svg'
import dropup from '../../assets/drop-up.svg'
import dropdown from '../../assets/drop-down.svg'
import { useState } from 'react'



const Home = () => {

  const [drop, setDrop] = useState(true); 

  const array = [1,2,3];

  const handleDrop = () =>{
    if(drop)setDrop(false);
    else setDrop(true);
  }

  return (
    <div style={{margin : "50px"}}>
    <div className='todo-card-container'>
      <div className='todo-card-content'>
        <div className='todo-card-priority'>
          <div className='todo-card-prior'>
            <Ellipse bg = "green"/>
            <div className='todo-card-priority-text'>HIGH PRIORITY</div>
          </div>
          <div className='todo-cards-dots'>
            <img src={dots} alt="dots" />
          </div>
        </div>
        <div className='todo-card-heading'>
          <div className='todo-card-heading-text'>
            Hero Section  
          </div>
        </div>
        <div className="todo-card-checklist">
          <div className='todo-checklist-heading'>
            <h2>Checklist (0/3)</h2>
            <div className='down-icon' onClick={handleDrop}>
              {drop ? (
                <img src={dropup} alt="dropup" />
                ) :(
                <img src={dropdown} alt="dropdown" />
              )
              }
            </div>
          </div>
          {drop ? (<div className='todo-checklist-content'>
            {
              array.map((item, index) => {
                  return (<Taskshow/>)
              })
            }
          </div>) : (<></>)}
        </div>
        <div className="todo-card-progress">
          <div className='todo-card-progress-1'>
            <DateBadge>Feb 10th</DateBadge>
          </div>
          <div className='todo-card-progress-2'>
            <Badge width="42px">PROGRESS</Badge>
            <Badge width="42px">TODO</Badge>
            <Badge width="42px">DONE</Badge>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Home
