import React from 'react'
import Single from '../assets/single.png'
import Card from './Card'
import Double from '../assets/double.png'
import Triple from '../assets/triple.png'



const Cards = () => {
  return (
    <div className='w-full py-[10rem] px-4 bg-white'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
            <Card image={Single}/>
            <Card image={Double}/>
            <Card image={Triple}/>
        </div>
    </div>
  )
}
 
export default Cards