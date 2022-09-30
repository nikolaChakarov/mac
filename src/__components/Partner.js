import Form from "../theme/Form";
import DynamicInput from "../theme/DynamicInput";
import { useRef, useState } from "react";

const Partner = () => {
    const [initValues, setInitValues] = useState({name: 'init name', age: 100})

    const handleSubmit = (values) => {
        console.log(values);
    };

    const handleFormChanges = (id, val) => {
        console.log(id, ' and ', val);

    }

    const validateInput = (val) => {
        console.log('input value... ', val);
    }

     const formRef = useRef();


    return (
        <Form
            ref={formRef}
            values={initValues}
            onSubmit={handleSubmit}
            onChange={handleFormChanges}
        >
            <DynamicInput 
                id={1}
                type="text"
                placeholder="name"
                label="Name"
                validate={validateInput}
                onChange={handleFormChanges}
            />
            <DynamicInput 
                  id={2}
                  type="number"
                  placeholder="Age"
                  label="Age"
                  min={0}
                  validate={validateInput}
                // onChange={handleFormChanges}
            />
        </Form>
    )
}

export default Partner;