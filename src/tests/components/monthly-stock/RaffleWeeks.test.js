import React from 'react';
import '@testing-library/jest-dom'
import { shallow } from 'enzyme'
import RaffleWeeks from '../../../components/monthly-stock/RaffleWeeks'

describe('Raffle Weeks component',() => {
    test('debe mostrar snapshot', () => {
        
        const wrapper = shallow(<RaffleWeeks/>)
        expect(wrapper).toMatchSnapshot();
    })
    
})