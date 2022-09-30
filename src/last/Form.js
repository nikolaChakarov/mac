import React from 'react'
import useForm from './useForm'

const Form = (props) => {
  const { children } = props;

  const { handleSubmit, newChildren } =  useForm(props);
  
  return (
    <div>
      {newChildren}
      <button type='submit' onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Form