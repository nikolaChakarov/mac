import { useState, useEffect, cloneElement, Children } from "react";

const useForm = (props) => {
    const {validation, values, onSubmit, onChange, children: childs} = props;

    const [state, setState] = useState(values)

    const children = Children.toArray(childs).filter(Boolean);

    const handleInputChange = (id, val) => {
        setState(prev => ({
            ...prev,
            [id]: val
        }))

        onChange(id,val);
    }

    const generateChildren = (child, i) => {
        return cloneElement(child, { onChange: handleInputChange})
    }

    const newChildren = children.map(generateChildren);

    const handleSubmit = (e) => {
        e.preventDefault();

        onSubmit(state);
    }

    return { handleSubmit, newChildren }
}

export default useForm;