import Like from "../like/like"
import {Image} from '../commons/image'
import StarRating from "../star/starRating"
import 'emoji-mart/css/emoji-mart.css'
import { Picker } from 'emoji-mart'


export const BeanInfoCard = ({bean}) => {
    
    return (<div className='mb-4 ml-1 mr-1 md:w-3/12 sm:w-1/3 w-full  bg-gray-200 rounded'>
        <ul>
        <li>
            Country: {bean.country}
        </li>
        <li>
            Drying Method: {bean.drying_method}
        </li>
        <li>
            Farm: {bean.farm}
        </li>
        </ul>
        {bean?.photos?.length > 0 ? 
            <Image className='h-52 w-52 object-cover' src={bean.photos[0].url}/> 
            : null
        }

       <Like/>
       <StarRating/>
       <div className="reactions">
       <Picker
       showPreview={false}
        showSkinTones={false}
        /> </div>

       </div>)
}


