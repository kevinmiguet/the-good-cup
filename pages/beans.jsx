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
            country: "Ghana"
        }
    })
    const [beans, setBeans] = useState([])

    return (
        <form {...{ onSubmit }}>
            <InputText name="country" defaultValue={defaultValues.country} onChange={onChange} />
            <Button value="search by country"/>
            {beans.map(bean => (<>
                <div>{bean.country}</div>
                <div>{JSON.stringify(bean, null, 4)}</div>
            </>   
            ))}

            <InputText name="method" defaultValue={defaultValues.method} onChange={onChange} />
            <Button value="search by method"/>
            {beans.map(bean => (<>
                <div>{bean.method}</div>
                <div>{JSON.stringify(bean, null, 4)}</div>
            </>
                
            ))}
        </form>
    )
}

export default Beans