import { useState, useImperativeHandle, useRef } from "react";

const useFromInput = ({
    id,
    value: initValue,
    onChange: changeValueInForm,
    inputRef
}) => {
    const [value, setValue] = useState(initValue || '');

    const onChange = (e) => {
        const newValue = e.target.value;
        setValue(newValue);
        changeValueInForm(id, newValue);
    }

    const ref = useRef();

    useImperativeHandle(inputRef, () => ({
        onFocus: () => {console.log('test test test')}
    }));

    return {
        value, onChange
    }

};

export default useFromInput;