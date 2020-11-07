import { Button } from "../components/forms/button"
import { API } from "../components/helpers/api"
import { useForm } from "../components/hooks/useForm"
const { InputText } = require("../components/forms/input-text")


const Beans = () => {
    const {
        defaultValues,
        onChange,
        onSubmit,
    } = useForm({
        onSubmit: (values) => {
            API.post('/beans', values)
                .then(res => console.log(res.data))
        },
        defaultValues: {
            country: "Brasil"
        }
    })
    return (
        <form {...{ onSubmit }}>
            <InputText name="country" defaultValue={defaultValues.country} onChange={onChange} />
            <Button value="send"/>
        </form>
    )
}

export default Beans