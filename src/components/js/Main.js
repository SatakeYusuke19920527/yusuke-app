import React from 'react'
import '../css/App.css'

class Main extends React.Component {
  render() {
    const url = 'https://picsum.photos/id/237/600/300'
    return (
      <React.Fragment>
        <div className='main'>
          <div className="pic_block">
            <img src={url} alt='#'/>
          </div>
          <div className="title_block">
            <h3>Title</h3>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default Main
