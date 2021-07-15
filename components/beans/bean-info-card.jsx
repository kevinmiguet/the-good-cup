import {beanInfoCardContainer} from './bean-info-card.module.scss'
import Like from "../like/like"
import {Image} from '../commons/image'
import StarRating from "../star/starRating"

export const BeanInfoCard = ({bean}) => {
    
    return (<div className={beanInfoCardContainer}>
        <div>
            Country: {bean.country}
        </div>
        <div>
            Drying Method: {bean.drying_method}
        </div>
        <div>
            Farm: {bean.farm}
        </div>
       {bean.photos.map(function(photo) {
        return <Image src={photo.url}/>
       })} 
       <Like/>
       <StarRating/>
       </div>)
}


