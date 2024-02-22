import React from 'react'
import './Dashboard.css'
import signin from "../../assets/signin.svg"

const Dashboard = () => {
  return (
    <div className='dash-container'>
        <div className='welcome'>
            <div className='welcome-content'>
                        <div className='pic-bg'></div>
                <div className='welcome-pic'>
                    <img src={signin} className='wel-pic' alt="pic" />
                </div>
                <div className='welcome-text'>
                    <h1>Welcome abroad my friend</h1>
                    <p>just a couple of clicks and we start</p>
                </div>
            </div>
        </div>
        <div className='signin-container'>

        </div>
    </div>
  )
}

export default Dashboard