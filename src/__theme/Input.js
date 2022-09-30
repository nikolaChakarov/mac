
import React, { forwardRef } from 'react'

const Input = forwardRef((props, ref) => {
  const { id, label, type, placeholder, onChange, value } = props;

  return (
    <div>
        <label htmlFor={label}>{label}</label>
        <input 
            ref={ref}
            id={id}
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
        />
    </div>
  )
})

export default Input;