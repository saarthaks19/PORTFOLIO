import React from 'react';
import './Card.css';
import Buttonn from './button/Buttonn';

const Card = (props) => {
  return (
    <div className='Card'>
      <div className='InsideCard'>
        <div
          style={{
            height: '20vw',
            width: '20vw',
            borderRadius: '1vw',
            backgroundImage: `url(${props.imageUrl})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
           
          }}
        ></div>
        <p>{props.name}</p>
        <div className='Buttons'>
          <Buttonn text='GitHub' link={props.githubLink}></Buttonn>
          <Buttonn text='Live Demo' link={props.liveLink}></Buttonn>
        </div>
      </div>
    </div>
  );  
};

export default Card;
