import { useState } from 'react'

const useInput = (props) => {
    const [value, setValue] = useState(props.value || '')

    const onChange = (e) => {
        setValue(e.target.value)

        props.onChange(props.id ,e.target.value)
    }

    return { value, onChange }
}

export default useInput