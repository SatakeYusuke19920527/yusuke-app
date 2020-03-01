import React from 'react'
import '../css/App.css'
import ArchiveList from './ArchiveList'
import LogoArea from './LogoArea'


class Sidebar extends React.Component {
  render() {
    return (
      <div className='sidebar'>
        <LogoArea />
        <ArchiveList />
      </div>
    )
  }
}

export default Sidebar
