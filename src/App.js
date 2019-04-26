import React, {Component} from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import {robots} from './robots';

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

    const filterRobots = this.state.robots.filter(robots => {
        return robots.name.toLocaleLowerCase().includes(this.state.search.toLocaleLowerCase());
    })
    return (
        <div className="tc">
            <h1 className="tc">Find All Noobs</h1>
            <SearchBox onSearchChange={this.onSearchChange}/>
            <br />
            <CardList robots={filterRobots} />
    
        </div>
    
    );
}

}

export default App;