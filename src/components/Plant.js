import React from 'react'
import { Link } from 'react-router-dom'

const Plant = ({image,name,id,info,glass}) => {
  return (
    <article className='plant'>
      <div className='img-container'>
        <img src={image} alt="{name}" />
      </div>
      <div className='plant-footer'>
        <h3>{name}</h3>
        <h4>{glass}</h4>
        <p>{info}</p>
        <Link to={`/plant/${id}`} className="btn btn-primary">details</Link>
      </div>
    </article>
  )
}

export default Plant
