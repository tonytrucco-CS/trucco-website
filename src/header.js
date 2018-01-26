import React from 'react'
import { NavLink } from 'react-router-dom'

class Header extends React.Component {
  render() {
    return (
      <header className='header'>
        <div className='container'>
          <ul>
            <li>
              <NavLink exact activeClassName='active' to='/'>
                tonytrucco.com
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName='active' to='/movies'>
                <i className='fa fa-film mobile-only' />
                <span className='mobile-hidden'>Movies I Watch</span>
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName='active' to='/music'>
                <i className='fa fa-music mobile-only' />
                <span className='mobile-hidden'>Music I Listen To</span>
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName='active' to='/games'>
                <i className='fa fa-gamepad mobile-only' />
                <span className='mobile-hidden'>Games I Play</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </header>
    )
  }
}

export default Header;
