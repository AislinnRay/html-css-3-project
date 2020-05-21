import React from 'react'
import './App.css'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      isMobileMenuOpen: false,
    }
  }

  toggleMobileMenu = () => {
    this.setState({
      isMobileMenuOpen: !this.state.isMobileMenuOpen,
    })
  }

  render() {
    return (
      <div className="App">
        <header className="header">
          <div className="nav-container">
          <div className="logo-container">
            <img
              alt="Logo"
              src="https://blackrockdigital.github.io/startbootstrap-agency/assets/img/navbar-logo.svg"
              className="logo-img"/>
          </div>
          <nav className="nav">
              <a className="nav-list-item" href="#">SERVICES</a>
              <a className="nav-list-item" href="#">PORTFOLIO</a>
              <a className="nav-list-item" href="#">ABOUT</a>
              <a className="nav-list-item" href="#" >TEAM</a>
              <a className="nav-list-item" href="#">CONTACT</a>
          </nav>
          <nav className="mobile-nav">
            {/* <span className="menu-text">Menu</span> */}
            <img
              className="hamburger"
              src="https://pngimage.net/wp-content/uploads/2018/06/white-menu-icon-png-8.png"
              alt="Hamburger"
              onClick={this.toggleMobileMenu}/>
          {/* {this.state.isMobileMenuOpen &&  */}
            <ul
              className={`mobile-nav-list ${
                this.state.isMobileMenuOpen ? 'mobile-nav-list-open' : null
              }`}
              >
              <a className="mobile-nav-list-item" href="#">SERVICES</a>
              <a className="mobile-nav-list-item" href="#">PORTFOLIO</a>
              <a className="mobile-nav-list-item" href="#">ABOUT</a>
              <a className="mobile-nav-list-item" href="#">TEAM</a>
              <a className="mobile-nav-list-item" href="#">CONTACT</a>
              </ul>
          </nav>
          </div>
        </header>
        <div className="hero-text">
          <h1>
            <span className="welcome">Welcome To Our Studio!</span><br/><span className="greeting">IT'S NICE TO MEET YOU</span>
          </h1>
          <p className="button"><button className="more-box" href="#">TELL ME MORE</button></p>
        </div>
      </div>
    )
  }
}

export default App
