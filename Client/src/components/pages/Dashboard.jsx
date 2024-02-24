import React from 'react'
import './Dashboard.css'
import signin from "../../assets/signin.svg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

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
            <form action="" className='signin-form'>
                <div className='login-label'>
                    <label htmlFor="Login" >Login</label>
                </div>
                <div className='login-inputs'>
                    <i class="icon fas fa-envelope"></i>
                    <input type="text" placeholder='Email' />
                    <input type="password" />
                </div>
            </form>
        </div>
    </div>
  )
}

export default Dashboard