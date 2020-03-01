import React from 'react'
import logo from '../../logo.svg'
import '../css/App.css'

class LogoArea extends React.Component {
  render () {
    return (
      <div className='logo_area'>
        <img src={logo} className='App-logo' alt='logo' />
        <h1>Yusuke app</h1>
      </div>
    )
  }
}

export default LogoArea
