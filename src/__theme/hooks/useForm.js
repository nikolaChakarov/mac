import { useState, useImperativeHandle } from "react";

const useForm = ({
    values: initValues,
    onChange,
    onSubmit
}) => {
    const [values, setValues] = useState(initValues);

    const handleSubmit = () => {
        onSubmit(values);
    }

    const resetForm = () => {

    }

    // const onChange = (id, val) => {
    //     console.log(id, ' and ', val);
    // }

    return { values, handleSubmit, resetForm }
};

export default useForm;