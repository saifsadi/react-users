import React from 'react';
import './Card.css';

const Card = (props) => {
    const { name, username, email, image } = props;
    return (
       <div className="tc bg-light-green dib br3 pa2 ma2 grow bw2 shadow-5" id={username}>
           <img src={image} alt="robots" />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
       </div>
    );
}

export default Card;