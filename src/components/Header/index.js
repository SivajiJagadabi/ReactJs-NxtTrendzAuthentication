// Write your JS code here
import './index.css'

const Header = () => (
  <nav className="nav-header">
    <div className="nav-content">
      <div className="nav-for-desktop">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          alt="website logo"
          className="header-logo-desktop"
        />
        <div className="nav-menu">
          <ul className="nav-menu">
            <li className="nav-item">Home</li>
            <li className="nav-item">Products</li>
            <li className="nav-item">Cart</li>
          </ul>
          <button type="button" className="logout-btn-desktop">
            Logout
          </button>
        </div>
      </div>
      <div className="nav-for-mobile">
        <div className="logo-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="website logo"
            className="header-logo-mobile"
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
            alt="nav logout"
            className="logout-icon"
          />
        </div>
        <ul className="nav-menu-mobile">
          <li>
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
              alt="nav home"
              className="nav-icon-mobile"
            />
          </li>
          <li>
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
              alt="nav products"
              className="nav-icon-mobile"
            />
          </li>
          <li>
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
              alt="nav cart"
              className="nav-icon-mobile"
            />
          </li>
        </ul>
      </div>
    </div>
  </nav>
)

export default Header
