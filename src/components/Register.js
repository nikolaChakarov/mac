import React, { useState, useRef, useEffect } from 'react'
import Form from '../theme/Form'
import DynamicInput from '../theme/DynamicInput';
import useSuccessBar from '../theme/hooks/useSuccessBar';

const Register = () => {
    const [state, setState] = useState({
        username: '',
        password: '',
        gender: ''
    });

    const { formRef, isVisible, showSuccessBar, hideSucessBar} = useSuccessBar();

    const handleInputChange = (id, val) => {
        setState(prev => ({
            ...prev,
            [id]: val
        }))
    }

    const handleSubmit = (values) => {
        console.log(values);
    }

    const testRef = useRef();

    useEffect(() => {
        testRef.current?.onFocus();
    }, []);

  return (
    <div>
        <h3>Register</h3>
        <Form 
            ref={formRef}
            values={state}
            onChange={handleInputChange}
            onSubmit={handleSubmit}
            // renderBttn={isVisible}
            title="Register form"
        >
            <DynamicInput 
                id="username"
                type="text"
                placeholder="User name"
            />
            <DynamicInput
                id="password"
                type="text"
                placeholder="Password"
                ref={testRef}
            />
        </Form>
    </div>
  )
}

export default Register