import React from 'react'
import { shallow } from 'enzyme'

import Input from '../../../components/ui/Input'


describe('Prueba componente UI Input', () => {
    test('Debe de mostrar el componente <Input/>', () => {
        const store = {
            icon: '',
            type: '',
            label: '',
            placeholder: '',
            col: ''
        }
        const wrapper = shallow(<Input icon={store.icon} type={store.type} label={store.label} placeholder={store.placeholder} col={store.col} />);

        expect(wrapper).toMatchSnapshot();
    })

})