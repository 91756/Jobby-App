import {withRouter, Link} from 'react-router-dom'
import Cookies from 'js-cookie'
import {FiLogOut} from 'react-icons/fi'
import {HiHome} from 'react-icons/hi'
import {BsBriefcaseFill} from 'react-icons/bs'
import './index.css'

const Header = props => {
  const onClickLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <nav className="nav-header">
      <div className="nav-content">
        <Link to="/">
          <img
            src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
            className="logo-img"
            alt="website logo"
          />
        </Link>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/jobs" className="nav-link">
              Jobs
            </Link>
          </li>
        </ul>
        <button
          type="button"
          className="logout-desktop-btn"
          onClick={onClickLogout}
        >
          Logout
        </button>
      </div>

      <div className="nav-content-mobile">
        <Link to="/">
          <img
            src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
            className="logo-img"
            alt="website logo"
          />
        </Link>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              <HiHome />
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/jobs" className="nav-link">
              <BsBriefcaseFill />
            </Link>
          </li>
        </ul>
        <button
          type="button"
          className="logout-desktop-btn"
          onClick={onClickLogout}
        >
          <FiLogOut />
        </button>
      </div>
    </nav>
  )
}
export default withRouter(Header)
