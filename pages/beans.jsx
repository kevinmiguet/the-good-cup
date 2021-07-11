import { useState } from "react"
import { Button } from "../components/forms/button"
import { API } from "../components/helpers/api"
import { useForm } from "../components/hooks/useForm"
import {BeanInfoCard} from "../components/beans/bean-info-card"
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
            country: "Ghana",
            Drying_method: "washed"
        }
    })
    const [beans, setBeans] = useState([])

    return (
        <form {...{ onSubmit }}> 
            <InputText name="country" defaultValue={defaultValues.country} onChange={onChange} />
            <Button value="search by country"/>
            {beans.map(bean => (<>
                <div>{bean.country}</div>
                <div>{}</div>
            </>   
            ))}

            <InputText name="method" defaultValue={defaultValues.Drying_method} onChange={onChange} />
            <Button value="search by method"/>
            {beans.map(bean => (<BeanInfoCard bean={bean}/>))}
        </form>
    )
}

export default Beans