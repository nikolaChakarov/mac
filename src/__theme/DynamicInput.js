import React, { useRef, forwardRef, useMemo, useState } from 'react';
import Input from './Input';

import useInput from './hooks/useInput';


const DynamicInput = (props) => {
    const { id, label, type, placeholder } = props;

    const internalInputRef = useRef();
    const { value, onChange } = useInput(props);

    return (
        <Input 
            ref={internalInputRef}
            id={id}
            label={label}
            type={type}
            placeholder={placeholder}
            onChange={onChange}
            value={value}
        />
    )
}

// export default DynamicInput;

export default forwardRef((refProps, ref) =>
  useMemo(
    () => <DynamicInput {...refProps} inputRef={ref} />, []
  )
);
