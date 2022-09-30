import React from 'react'
import useInput from './useInput';

const Input = (props) => {
    const { id, type, placeholder } = props;
    const {value, onChange} = useInput(props);

  return (
    <input {...props} value={value} onChange={onChange}/>
  )
}

export default Input