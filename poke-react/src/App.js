import React, { Component } from 'react';
import CardList from './CardList';
import {characters} from './characters';
import SearchBox from './SearchBox';


class App extends Component{
    constructor(){
        super()
        this.state={
            characters: characters,
            searchfield: ''
        }
    }

    onSearchChange = (event) =>{
        this.setState({searchfield: event.target.value})
    }
    
    render(){
        const filteredCharacters = this.state.characters.filter(robot =>{
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })
        return(
        <div className='tc'>
            <h1>Final Fantasy VII</h1>
            <SearchBox searchChange={this.onSearchChange}/>
            <CardList characters={filteredCharacters}/>
        </div>
    );
    }      
}

export default App;