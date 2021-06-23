import React from 'react';
import { shallow } from 'enzyme'
import Wizard from '../../../Components/wizard/Wizard'


describe('Prueba componente <Wizard/>', () => {
    test('Componente no recibe props ', () => {

        const wrapper = shallow(
            <Wizard/>
        );

        expect(wrapper).toMatchSnapshot();
    })
})
