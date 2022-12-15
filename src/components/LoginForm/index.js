// Write your JS code here

import {Component} from 'react'
import './index.css'

class LoginForm extends Component {
  state = {username: '', password: '', showSubmitErr: false, errorMessage: ''}

  onSubmitSuccess = () => {
    const {history} = this.props
    history.replace('/')
  }

  onSubmitFailure = errorMessage => {
    this.setState({showSubmitErr: true, errorMessage})
  }

  onChangePasswordInput = event => {
    this.setState({password: event.target.value})
  }

  onChangeUserInput = event => {
    this.setState({username: event.target.value})
  }

  renderPasswordField = () => {
    const {password} = this.state
    return (
      <div className="input-container">
        <label className="input-label" htmlFor="password">
          PASSWORD
        </label>
        <input
          className="password-input"
          type="password"
          id="password"
          placeholder="Password"
          value={password}
          onChange={this.onChangePasswordInput}
        />
      </div>
    )
  }

  renderUsernameField = () => {
    const {username} = this.state
    return (
      <div className="input-container">
        <label className="input-label" htmlFor="username">
          USERNAME
        </label>
        <input
          className="user-input"
          type="text"
          id="username"
          placeholder="Username"
          value={username}
          onChange={this.onChangeUserInput}
        />
      </div>
    )
  }

  submitForm = async event => {
    event.preventDefault()

    const {username, password} = this.state
    const userDetails = {username, password}

    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data)
    if (response.ok === true) {
      this.onSubmitSuccess()
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  render() {
    const {showSubmitErr, errorMessage} = this.state
    return (
      <div className="login-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          alt="website logo"
          className="mobile-logo-img"
        />
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          alt="website login"
          className="login-image"
        />
        <form className="login-form" onSubmit={this.submitForm}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="website logo"
            className="logo-desktop-img"
          />
          {this.renderUsernameField()}
          {this.renderPasswordField()}
          <button type="submit" className="login-btn">
            Login
          </button>
          {showSubmitErr && <p className="error-message">*{errorMessage}</p>}
        </form>
      </div>
    )
  }
}

export default LoginForm
