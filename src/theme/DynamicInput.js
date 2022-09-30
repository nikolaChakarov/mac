import React, { forwardRef, useMemo } from 'react'
import Input from './Input'
import useFromInput from './hooks/useFormInput';

const DynamicInput = (props) => {
    const { id, type, placeholder, min } = props;

    const { onChange, value } =  useFromInput(props);
  return (
    <div>
        <Input 
            id={id}
            type={type}
            placeholder={placeholder}
            min={min}
            value={value}
            onChange={onChange}
        />
    </div>
  )
}

// export default DynamicInput
export default forwardRef((props, ref) => {
    return useMemo(() => {
        return <DynamicInput {...props} inputRef={ref}/>
    }, []);
})