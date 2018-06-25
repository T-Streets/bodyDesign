import React from 'react';

const Form = () => {
    return (
        <form>
            <label>
                <input type='radio' value='male' />Male
            </label>
            <label>
                <input type='radio' value='female' />Female
            </label>
            <label>Weight</label>
            <input type='number' nam='weight'/>
            <label>Height</label>
            <input type='number' name='height'/>
            <label>Age</label>
            <input type='number' name='age'/>
        </form>
    )
}
export default Form