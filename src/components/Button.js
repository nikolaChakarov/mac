import React from 'react'

const Button = ({ handleSubmit }) => {
  return (
    <div onClick={handleSubmit}>Save</div>
  )
}

export default Button