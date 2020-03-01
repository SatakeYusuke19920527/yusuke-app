import React from 'react'
import '../css/App.css'

class Archive extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      body:''
    }
  }

  componentDidMount = () => {
    console.log(this.props)
    this.bodySubstring();
  }

  bodySubstring = () => {
    if (this.props.body.length < 20 ) {
      this.setState({body:this.props.body})
    } else {
      this.setState({body: this.props.body.substring(0, 20)}); 
    }
  }

  render() {
    return (
      <div className='archive'>
        <h2 className='text_area'>{this.props.title}</h2>
        <p className='context_area'>{this.state.body}...</p>
      </div>
    )
  }
}

export default Archive
