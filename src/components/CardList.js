import React from 'react';
import Card from './Card';

const CardList = ({robots}) => {
    return(
        robots.map((users,i)=>{
            return <Card 
                key={robots[i].id} 
                name={robots[i].name} 
                username = {robots[i].username} 
                email={robots[i].email} 
                image = {robots[i].image}  />
        })
    );
    

}

export default CardList;