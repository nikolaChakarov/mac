import React, { forwardRef, useImperativeHandle } from 'react'
import Button from '../components/Button';
import useForm from './hooks/useForm';

const Form = (props, ref) => {
    const { title } = props;

    const { handleSubmit, newChildren } = useForm(props);

  return (
    <div>
        <h3>{title}</h3>
        {newChildren}
        <Button handleSubmit={handleSubmit}/>
    </div>
  )
}

export default forwardRef(Form)