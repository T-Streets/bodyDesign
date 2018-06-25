import React, { Component } from 'react';

export default class BmrCalc extends Component {
    constructor() {
        super()
        this.state = {
           weight: '',
           height: '',
           age: '',
           selectedOption: ''
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state)
        let answer = function () {
            if(this.state.selectedOption ==='female') {
                return Math.floor(655.1 + (4.35 * this.state.weight) + (4.7 + this.state.height ) - (4.7 * this.state.age))
            }
            return Math.floor(655.1 + (4.35 *(this.state.weight) + (4.7 + this.state.height) - (4.7 * this.state.age)))
        }
        let total = answer()
        console.log(total)
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
                <form onSubmit={this.handleSubmit}>
                    <label>
                        <input 
                        type='radio' value='male' checked={this.state.selectedOption==='male'} onChange={this.handleOption} 
                        />Male
                    </label>
                    <label>
                        <input 
                        type='radio' value='female' checked={this.state.selectedOption==='female'} onChange={this.handleOption} 
                        />Female
                    </label>
                    <label>Weight (lbs)</label>
                    <input type='number' name='weight' onChange={this.handleChange}/>
                    <label>Height (in)</label>
                    <input type='number' name='height' onChange={this.handleChange}/>
                    <label>Age</label>
                    <input type='number' name='age'onChange={this.handleChange}/>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}