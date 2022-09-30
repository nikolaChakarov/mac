import { useState } from 'react'
import Form from './Form'
import Input from './Input'

const Register = () => {
    const [initState, setInitState] = useState({
        name: '',
        age: ''
    });


    const validation = (values) => {
        const errors = {};

        if (values.name === '') {
            errors.name = 'Name is required'
        }

        if (values.age === '') {
            errors.age = 'Age is required'
        }

        return errors;
    }

    const handleInputChange = (id, val) => {
        setInitState(prev => ({
            ...prev,
            [id]: val
        }))
    }

    const handleSubmit = (values) => {
        console.log({values});
    }


  return (
    <div>
        <h1>Register</h1>
        <Form
            validation={validation}
            onSubmit={handleSubmit}
            onChange={handleInputChange}
            values={initState}
        >
            <Input id='name' type='text' placeholder='Username'/>
            <Input id='age' type='number' placeholder='Age'/>

        </Form>
    </div>
  )
}

export default Register