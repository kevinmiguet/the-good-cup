
import React from 'react'
import {star,starSelected} from "./star.module.scss"


const Star = ({ selected = false, onClick = f => f }) => (
    <div className={selected ? 'starSelected' : 'star'} onClick={onClick} />
  );

export default Star
