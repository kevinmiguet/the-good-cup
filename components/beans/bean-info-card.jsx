import Like from "../like/like"
import {Image} from '../commons/image'
import StarRating from "../star/starRating"

export const BeanInfoCard = ({bean}) => {
    
    return (<div className='mb-4 w-1/3'>
        <div>
            Country: {bean.country}
        </div>
        <div>
            Drying Method: {bean.drying_method}
        </div>
        <div>
            Farm: {bean.farm}
        </div>
        {bean?.photos?.length > 0 ? 
            <Image className='h-52 w-52 object-cover' src={bean.photos[0].url}/> 
            : null
        }

       <Like/>
       <StarRating/>
       </div>)
}


