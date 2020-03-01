import React from 'react'
import '../css/App.css'
import Sidebar from './Sidebar'
import CircleButton from './CircleButton'
import Main from './Main'
import dummy from '../../dummy'

import AppContext from '../../contexts/AppContext'

class App extends React.Component {
  render() {
    return (
      <AppContext.Provider value={dummy}>
        <div className='wrapper'>
          <Sidebar />
          <Main />
          <CircleButton />
        </div>
      </AppContext.Provider>
    );
  }
}

export default App
