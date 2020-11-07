import { useState } from "react"

export const useForm = ({ defaultValues = {}, onSubmit: _onSubmit}) => {
    const [values, setValues] = useState(defaultValues)
    const onChange = (event) => {
        const value = event.target.value
        const name = event.target.name
        setValues({ ...values, [name]: value })
    }
    const onSubmit = (event) => {
        event.preventDefault()
        _onSubmit(values)
    }


    return {
        values,
        defaultValues,
        onChange,
        onSubmit
    }
}