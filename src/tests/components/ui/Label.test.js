import React from 'react'
import { shallow } from 'enzyme'

import Label from '../../../components/ui/Label'


describe('Prueba componente UI Label', () => {
    test('Debe de mostrar el componente <Label/>', () => {
        const store = {
            etiqueta: '',
            aling: '',
            bold: '',
            color: '',
            tamanio: '',
            col: ''
        }
        const wrapper = shallow(<Label
            etiqueta={store.etiqueta}
            aling={store.aling}
            bold={store.bold}
            color={store.color}
            tamanio={store.tamanio}
            col={store.col} />);

        expect(wrapper).toMatchSnapshot();
    })

})