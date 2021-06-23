import React from 'react';
import { shallow } from 'enzyme'
import AffilitationUtilities from '../../../Components/reports-mr/AffilitationUtilities'


describe('Prueba componente UI <AffilitationUtilities/>', () => {
    test('Componente no recibe props ', () => {

        const wrapper = shallow(
            <AffilitationUtilities/>
        );

        expect(wrapper).toMatchSnapshot();
    })
})
