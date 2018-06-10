import App from '../src/Components/App';
import React from 'react';
import { shallow } from 'enzyme';

describe('App', () => {
    test('should match snapshot', () => {
        const wrapper = shallow(<App />)

        expect(wrapper.find('h2').text()).toBe('When the fiya starts to burn. Code starts to React')
        expect(wrapper).toMatchSnapshot;
    })
})