import React, { Component } from 'react';

export default class Form extends Component {
    constructor(props) {
        super(props)
    }


    render() {
        return (
                <div>
                    <form onSubmit={this.props.handleSubmit}>
                        <label>
                            <input 
                            type='radio' value='male' checked={this.props.selectedOption==='male'} onChange={this.props.handleOption} 
                            />Male
                        </label>
                        <label>
                            <input 
                            type='radio' value='female' checked={this.props.selectedOption==='female'} onChange={this.props.handleOption} 
                            />Female
                        </label>
                        <label>Weight (lbs)</label>
                        <input type='number' name='weight' onChange={this.props.handleChange}/>
                        <label>Height (in)</label>
                        <input type='number' name='height' onChange={this.props.handleChange}/>
                        <label>Age</label>
                        <input type='number' name='age'onChange={this.props.handleChange}/>
                        <button>Submit</button>
                    </form>
                </div>
            )
        }
}