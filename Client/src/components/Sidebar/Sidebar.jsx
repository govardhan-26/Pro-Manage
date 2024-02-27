import { useDispatch } from 'react-redux'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import analytics from '../../assets/analytics.svg'
import board from '../../assets/board.svg'
import logout from '../../assets/logout.svg'
import promanage from '../../assets/promanage-icon.svg'
import settings from '../../assets/settings.svg'
import './Sidebar.css'
import { logOut } from '../../store/slices/authSlice'
import { toast } from 'sonner'
const Sidebar = () => {
  const blackColors = {
    color: '#000000',
  }
  const dispatch = useDispatch()
  const navigate = useNavigate()

  function logoutHandler() {
    dispatch(logOut());
    toast.success("Logged Out succesfull!")
    localStorage.removeItem('userInfo')
  }
  const sideElementStyle = {
    backgroundColor: '#4391ed1a',
    cursor: 'pointer',
  }
  return (
    <div className="sidebar-container">
      <div className="sidebar-element-head">
        <div className="sidebar-head sidebar-items">
          <img src={promanage} />
          <p>Pro Manage</p>
        </div>
      </div>
      <div className="sidebar-element-tails">
        <div className="isAc">
          <NavLink
            to={'/'}
            className=" sidebar-element"
          >
            <div className="sidebar-board sidebar-items">
              <img src={board} />
              <p>Board</p>
            </div>
          </NavLink>
        </div>
        <div className="isAc">
          <NavLink
            to={'/analytics'}
            className="sidebar-element"
          >
            <div className="sidebar-analytics sidebar-items">
              <img src={analytics} />
              <p>Analytics</p>
            </div>
          </NavLink>
        </div>
        <div className="isAc">
          <NavLink
            to={'/settings'}
            className="sidebar-element"
          >
            <div className="sidebar-settings sidebar-items">
              <img src={settings} />
              <p>Settings</p>
            </div>
          </NavLink>
        </div>
      </div>
      <div className="sidebar-items">
        <Link
          to={'/register'}
          className="logout-item"
        >
          <div className="sidebar-logout logout-items">
            <img src={logout} />
            <p className="logout">Logout</p>
          </div>
        </Link>
      </div>
    </div>
  )
}

export { Sidebar }
