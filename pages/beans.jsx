import { useState } from "react"
import { Button } from "../components/forms/button"
import { API } from "../components/helpers/api"
import { useForm } from "../components/hooks/useForm"
import {BeanInfoCard} from "../components/beans/bean-info-card"
const { InputText } = require("../components/forms/input-text")
import Navbar from "../components/navbar";

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
        <div>
            <Navbar/>
        <div>   
        <h1>Embark your taste buds on the next coffee tour?</h1>
        </div> 

        <form {...{ onSubmit }}> 
            <InputText label="Destination:" name="country" defaultValue={defaultValues.country} onChange={onChange} />
            <Button value="Go"/>
            {/* {beans.map(bean => (<>
                 <div>{bean.country}</div>
                </>   
            ))} */}
            <br></br>
            <>
            {beans.map(bean => (
            <BeanInfoCard bean={bean}/>))}
            
            </>    
            {/* <InputText name="method" defaultValue={defaultValues.Drying_method} onChange={onChange} />
            <Button value="search by method"/>
            {beans.map(bean => (<BeanInfoCard bean={bean}/>))} */}
        </form>
        </div>
        
    )
}

export default Beans