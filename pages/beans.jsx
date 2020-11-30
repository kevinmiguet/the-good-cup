import { useState } from "react"
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
        onSubmit: async (values) => {
            const res = await API.get('/beans')
            if (res.status == 200) setBeans(res.data.beans)
        },
        defaultValues: {
            country: "Brasil"
        }
    })
    const [beans, setBeans] = useState([])
    return (
        <form {...{ onSubmit }}>
            <InputText name="country" defaultValue={defaultValues.country} onChange={onChange} />
            <Button value="send"/>
            {beans.map(bean => (
                <div>{JSON.stringify(bean, null, 4)}</div>
            ))}
        </form>
    )
}

export default Beans