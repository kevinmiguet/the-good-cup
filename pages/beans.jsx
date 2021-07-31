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
            const res = await API.get('/beans?country='+values.country)
            if (res.status == 200) setBeans(res.data.beans)
        },
        defaultValues: {
            country: "Taiwan",
            Drying_method: "washed"
        }
    })
    const [beans, setBeans] = useState([])

    return (
        <div>
            <Navbar/>
        
        <div className='block bg-green-50 text-center'>   
        <h1>Embark your taste buds on the next coffee tour?</h1>
        <form {...{ onSubmit }}> 
            <InputText label="Destination:" name="country" defaultValue={defaultValues.country} onChange={onChange} />
            <Button value="Go"/>
            {/* {beans.map(bean => (<>
                 <div>{bean.country}</div>
                </>   
            ))} */}
           </form>
</div>
            <div className="flex flex-row justify-center flex-wrap bg-red-50">
            {beans.map(bean => (
            <BeanInfoCard bean={bean}/>))}
            </div>    
            
                                    
            {/* <InputText name="method" defaultValue={defaultValues.Drying_method} onChange={onChange} />
            <Button value="search by method"/>
            {beans.map(bean => (<BeanInfoCard bean={bean}/>))} */}
               </div>
        
    )
}

export default Beans