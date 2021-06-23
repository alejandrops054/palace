import React from 'react'
import { shallow } from 'enzyme'

import Hr from '../../../components/ui/Hr'

describe('Prueba componente UI Hr', () => {
    test('Debe de mostrar el componente <Hr/>', () => {
        const store = {
            col: 6,
            aling: ''
        }
        const wrapper = shallow(<Hr col={store.col} aling={store.aling} />);

        expect(wrapper).toMatchSnapshot();
    })

})