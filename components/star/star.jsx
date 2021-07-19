
import React from 'react'
import {star,starSelected} from "./star.module.scss"
import cn from 'classnames'
const Star = ({ selected = false, onClick = f => f }) => (
    <div className={cn(star, selected ? starSelected : null)} onClick={onClick}> </div>
  );


  
export default Star
