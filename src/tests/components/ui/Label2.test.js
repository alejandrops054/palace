import React from 'react'
import { shallow } from 'enzyme'

import Label2 from '../../../components/ui/Label2'


describe('Prueba componente UI Label2', () => {
    test('Debe de mostrar el componente <Label2/>', () => {
        const store = {
            etiqueta: '',
            bold: '',
            color: '',
            tamanio: '',
        }
        const wrapper = shallow(<Label2 etiqueta={store.etiqueta} bold={store.bold} color={store.color} tamanio={store.tamanio} />);

        expect(wrapper).toMatchSnapshot();
    })

})