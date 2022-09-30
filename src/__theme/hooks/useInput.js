import { useImperativeHandle, useState } from "react";

const useImput = (props) => {
    const { id,  value: initValue, onChange: changeValueInForm, inputRef } = props;

    const [ value, setValue ] = useState(initValue || '');

    useImperativeHandle(inputRef, () => {
        return {
            changeValue: (newValue) => onChange({ target: { value: newValue }}),
            value
        }
    })

    const onChange = (e) => {
        const newValue = e.target.value;
        setValue(newValue);
        console.log('inside input.. ', newValue);
        changeValueInForm(id, newValue);
    }

    return { value, onChange }

};

export default useImput;