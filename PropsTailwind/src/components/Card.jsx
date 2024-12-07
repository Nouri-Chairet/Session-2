import React from 'react'
import heart from '../assets/heart-solid.svg'
import EmptyHeart from '../assets/heart-regular.svg'
//for this challenge it's all right to not find a solution for the heart icon
//based on what we've learned so far
// but you've succeded to find the solution 
// Great job! Keep up the good work 

function Card(props) {
  // Make when the user clicks on the heart icon, the heart icon changes from empty to full and vice
  // Make it when the user clicks the image of the song cover
  // The song will start playing and when the user clicks on the image again the song will stop playing
  // Hint on how to play music :
  // you can add a song like this :
  // const song = new Audio('path to the song.mp3');
 
  return (
<div class="border-4 border-cyan-400 w-fit flex flex-col justify-center items-center pb-2">
        <img src={props.img} className='h-[300px]'/>
        <h2 className='text-white font-bold text-3xl'>{props.name}</h2>
        <h2 className='text-white font-bold text-2xl pb-2'>{props.song}</h2>
        <img src={props.liked?heart:EmptyHeart} className='h-[40px] pb-3'/>
      
    </div>
  )
}

export default Card
