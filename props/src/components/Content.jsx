import React from 'react'
import Card from './Card'
import fairuz from '../assets/Fairuz.jpg'
import adele from '../assets/adele.jpg'
import kendrick from '../assets/Kendrick.jpg'

function Content() {
    const data =[
        {name:"Fairuz",song:"saalony el ness",img:fairuz,liked:false},
        {name:"Adele",song:"skyfall",img:adele,liked:true},
        {name:"Kendrick",song:"Money Trees",img:kendrick,liked:false},
       ]
  return (
    <div className='content'>
{
            data.map((element,index)=>{
                return <Card
                key={index}
                name ={element.name}
                song={element.song}
                img={element.img}
                liked={element.liked}
                />

            })
        }
  </div>
  )
}

export default Content
