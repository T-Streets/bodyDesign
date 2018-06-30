import React, { Component } from 'react';
import Form from './Form';

export default class Input extends Component {
    constructor() {
        super()
        this.state = {
           weight: '',
           height: '',
           age: '',
           selectedOption: '',
           BMR: ''
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state)
        return this.getBMR()
    }


    handleOption = (e) => {
        this.setState({
            selectedOption: e.target.value
        })
    }
    
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    getBMR = () => {
        if(this.state.selectedOption === 'female') {
            let total = Math.floor(655.1 + (4.35 * this.state.weight) + (4.7 * this.state.height) - (4.7 * this.state.age)) 
            return total
        }
        let total = Math.floor(66 + (6.2 * this.state.weight) + (12.7 * this.state.height) - (6.76 * this.state.age))
        this.setState({
            BMR: total
        })
        console.log(this.state)
        console.log(total)

    }

    render() {
        return (
            <div>
                <Form 
                handleSubmit={this.handleSubmit} 
                handleOption={this.handleOption} 
                handleChange={this.handleChange} 
                selectedOption={this.state.selectedOption} 
                state={this.state}
                />
            </div>
        )
    }
}