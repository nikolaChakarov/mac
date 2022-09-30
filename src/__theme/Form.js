import React, { forwardRef, useImperativeHandle } from 'react'
import Button from '../components/Button';

import useForm from './hooks/useForm'

const Form = forwardRef((props, ref) => {

    const { values, handleSubmit, resetForm } = useForm(props);

    useImperativeHandle(ref, () => {
        return {
            values,
            reset: resetForm
        }
    })

  return (
    <div>
        <h3>Form Custom</h3>
        {props.children}
        <hr />
        <Button 
            onClick={handleSubmit}
        />
    </div>
  )
})

export default Form