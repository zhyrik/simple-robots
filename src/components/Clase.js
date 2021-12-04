import React, { Component } from 'react'

export class Clase extends Component {
    
    constructor(){
        super()
        this.state = {
            monsters: [
                {
                    name: 'Frankenstein',
                    id: 'kfdjs'
                },
                {
                    name: 'Drakula',
                    id: 'kfdj'
                },
                {
                    name: 'Zombie',
                    id: 'kdfa'
                },
            ]
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(res => this.setState({monsters: res}))
    }

    render() {
        return (
            <div>
                {this.state.monsters.map(monster => (
                    <h1 key={monster.id}>{monster.name}</h1>
                ))}
            </div>
        )
    }
}

export default Clase
