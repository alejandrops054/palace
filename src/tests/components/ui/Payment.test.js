import React from 'react';
import { shallow } from 'enzyme'
import Payment from '../../../components/ui/Payment'


describe('Prueba componente UI <Payment/>', () => {
    test('Componente recibe props label:String, price:Number y col:Number', () => {
        const store = { 
            titulo:'Titulo de etiqueta',
            price: 1000,
            col:6
        }
        const wrapper = shallow(
            <Payment
                label={store.titulo}
                price={store.price}
                col={store.col}
            />
        );

        expect(wrapper).toMatchSnapshot();
    })

})
