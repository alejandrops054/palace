import React from 'react'
import { shallow } from 'enzyme'

import InfoMembers from '../../../components/ui/InfoMembers'


describe('Prueba componente UI InfoMembers', () => {
    test('Debe de mostrar el componente <InfoMembers/>', () => {
        const store = {
            title: 'Prueba',
            color: '',
            text: 'Prueba'
        }
        const wrapper = shallow(<InfoMembers title={store.title} color={store.color} text={store.text} />);

        expect(wrapper).toMatchSnapshot();
    })

})