import React, { Component } from 'react';
import Form from './Form';

export default class BmrCalc extends Component {
    constructor() {
        super()
        this.state = {
           weight: '',
           height: '',
           age: '',
           selectedOption: '',
           BMR: '',
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state)
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


    render() {
        return (
            <div>
                <Form 
                handleSubmit={this.handleSubmit} 
                handleOption={this.handleOption} 
                handleChange={this.handleChange} 
                selectedOption={this.state.selectedOption} 
                />
            </div>
        )
    }
}