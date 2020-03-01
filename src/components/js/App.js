import React from 'react'
import logo from '../../logo.svg'
import '../css/App.css'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      count: 0
    }
  }

  render () {
    return (
      <div className='wrapper'>
        <div className='sidebar'>
          <img src={logo} className='App-logo' alt='logo' />
        </div>
        <h1>{this.state.count}</h1>
        <button
          onClick={() => {
            this.setState({ count: this.state.count + 1 })
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            this.setState({ count: this.state.count - 1 })
          }}
        >
          -
        </button>
      </div>
    )
  }
}

export default App
