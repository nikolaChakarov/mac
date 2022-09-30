import React from 'react'

const Button = (props) => {
    const { onClick } = props;

    const handleClick = () => {
        onClick();
    }
  return (
    <div onClick={handleClick}>Send</div>
  )
}

export default Button