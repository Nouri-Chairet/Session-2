import React from 'react'
import heart from '../assets/heart-solid.svg';
import EmptyHeart from '../assets/heart-regular.svg';
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
    <div className='card'>
      <img src={props.img} alt='artist' height={300} />
      <h2 className='Artist'>{props.name}</h2>
      <p className='Song'>{props.song}</p>
      <img src={props.liked? heart:EmptyHeart} alt='heart' height={30} />
      
    </div>
  )
}

export default Card
