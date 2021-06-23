import React from 'react';
import { shallow } from 'enzyme'
import SplashScreenA from '../../../Components/SSO/SplashScreenA'


describe('Prueba componente UI <SplashScreenA/>', () => {
    test('Componente no recibe props ', () => {

        const wrapper = shallow(
            <SplashScreenA/>
        );

        expect(wrapper).toMatchSnapshot();
    })
})
