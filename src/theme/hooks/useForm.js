import { useRef, useEffect, useState, cloneElement, Children } from "react";

const useForm = (props) => {
    const { 
        children: childs,
        values: initValues = {},
        preFilledValues: initPreFilledValues = {},
        onSubmit,
        onChange,
    } = props;

    const [values, setValues] = useState(initPreFilledValues);

    // const [preFilledValues, setPreFilledValues] = useState(initPreFilledValues);
    
    const children = Children.toArray(childs).filter(Boolean);

    const handleValueChanges = (id, val) => {
        setValues(prev => ({
            ...prev,
            [id]: val
        }));

        onChange(id, val);
    }

    const generateChildren = (child, idx) => {
        // console.log('generateChildren:child ', child);
        let value;
        const { props, type: { displayName }} = child;
        // console.log('props ', props);
        // console.log('displayname ', displayName);
        const { children, id } = props;
        // console.log('children ', children);
        // console.log('id ', id);

        return cloneElement(child, { onChange: handleValueChanges })

    }

    const newChildren = children.map(generateChildren);

    const handleSubmit = () => {
        onSubmit(values);
    }

    return { handleSubmit, newChildren }
};

export default useForm;