import React from 'react'
import '../css/App.css'
import { FiChevronUp } from "react-icons/fi";

class CircleButton extends React.Component {
  render () {
    return (
      <div className='circle_button'>
        <FiChevronUp className="icon" />
      </div>
    );
  }
}

export default CircleButton
