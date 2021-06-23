import React from 'react';
import { shallow } from 'enzyme'
import RadioButon from '../../../components/ui/RadioButon'

describe('Prueba componente UI <RadioButton/>', () => {
    test('Componente recibe props label:String, col:Number', () => {
        const store = { 
            titulo:'Titulo de etiqueta',
            col:6
        }
        const wrapper = shallow(
            <RadioButon
                label={store.titulo}
                col={store.col}
            />
        );

        expect(wrapper).toMatchSnapshot();
    })

})
