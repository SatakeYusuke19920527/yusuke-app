import React from 'react'
import '../css/App.css'
import Archive from './Archive'
import AppContext from '../../contexts/AppContext'


class ArchiveList extends React.Component {
  render () {
    return (
      <AppContext.Consumer>
        {value => {
          value.map((data) => {
            return <Archive title={data.title} body={data.body} img={data.urlToImage} />
          })
        }}
      </AppContext.Consumer>
    );
  }
}

export default ArchiveList
