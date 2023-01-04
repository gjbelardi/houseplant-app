import React from 'react'
import Plant from './Plant'
import Loading from './Loading'
import { useGlobalContext } from '../context'
//^^ allows you to access your context values

const PlantList = () => {
  const {plants,loading} = useGlobalContext();

  if(loading) {
    return <Loading />
  }

  if(plants.length < 1) {
    return <h2 class="seciton-title">no plants matched your search criteria</h2>
  }

  return (
    <section className='section'>
      <h2 className='section-title'>plants</h2>
      <div className='plant-center'>
        {plants.map((item)=>{
          return <Plant key={item.id} {...item}/>
        })}
      </div>
    </section>
  )
}

export default PlantList
