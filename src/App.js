import React, { Component } from 'react'

import CardList from './components/card-list/card-list.component'
import SearchBox from './components/seach-box/search-box.component'

import './App.css'



export class App extends Component {
    
    constructor(){
        super()
        this.state = {
            monsters: [],
            searchField: ''
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(res => this.setState({monsters: res}))
    }

    // arow function for this || bind this in constructor  
    getInputValue = (e) => {
        this.setState({ searchField: e.target.value })
    }

    render() {
        // destruckturization
        const {monsters, searchField} = this.state
        //! filter monster arr by input value
        const filteredMonster = monsters.filter(
            monster => monster.name.toLowerCase().includes(searchField.toLowerCase())
        )

        return (
            <div className='app'>
                <h1>Robots</h1>
                <SearchBox 
                    placeholder="robots name" 
                    getInputValue={this.getInputValue} />
                <CardList monsters={searchField ? filteredMonster: monsters}/>
            </div>
        )
    }
}

export default App

