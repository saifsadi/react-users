import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import {robots} from './robots';
import Scroll from '../components/Scroll';

class App extends Component {
    constructor() {
        super();    //for using 'this' method , must call super method
        this.state = {
            robots : robots,
            search : ''
        }
    }

    onSearchChange = (event) => {
        this.setState({search : event.target.value});
       
        
    }

render() {
    const {robots, search} = this.state;
    const filterRobots = robots.filter(robot => {
        return robot.name.toLocaleLowerCase().includes(search.toLocaleLowerCase());
    })
    return (
        <div className="tc">
            <h1 className="tc">Find All Noobs</h1>
            <SearchBox onSearchChange={this.onSearchChange}/>
            <br />
            <Scroll>
            
            <CardList robots={filterRobots} />

            </Scroll>
    
        </div>
    
    );
}

}

export default App;