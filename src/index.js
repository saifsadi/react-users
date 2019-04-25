import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Card from './Card';
import 'tachyons';
import { robots } from './robots';

ReactDOM.render(<div>
    
        <Card id={robots[0].id} name={robots[0].name} username = {robots[0].username} email={robots[0].email} image = {robots[0].image}  />
        <Card id={robots[1].id} name={robots[1].name} username = {robots[1].username} email={robots[1].email} image = {robots[1].image}  />
        <Card id={robots[2].id} name={robots[2].name} username = {robots[2].username} email={robots[2].email} image = {robots[2].image}  />
        <Card id={robots[3].id} name={robots[3].name} username = {robots[3].username} email={robots[3].email} image = {robots[3].image}  />
        <Card id={robots[4].id} name={robots[4].name} username = {robots[4].username} email={robots[4].email} image = {robots[4].image}  />
        <Card id={robots[5].id} name={robots[5].name} username = {robots[5].username} email={robots[5].email} image = {robots[5].image}  />
        <Card id={robots[6].id} name={robots[6].name} username = {robots[6].username} email={robots[6].email} image = {robots[6].image}  />
        <Card id={robots[7].id} name={robots[7].name} username = {robots[7].username} email={robots[7].email} image = {robots[7].image}  />
        <Card id={robots[8].id} name={robots[8].name} username = {robots[8].username} email={robots[8].email} image = {robots[8].image}  />
        <Card id={robots[9].id} name={robots[9].name} username = {robots[9].username} email={robots[9].email} image = {robots[9].image}  />
    </div>, 
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
