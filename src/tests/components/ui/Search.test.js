import React from 'react';
import { shallow } from 'enzyme'
import SeachNav from '../../../components/ui/search'

describe('Prueba componente UI <Search/>', () => {
    test('Componente recibe props placeholder:String, link:String y col:Number', () => {
        const store = { 
            placeholder:'Titulo de placeholder',
            link: '/',
            col:6
        }
        const wrapper = shallow(
            <SeachNav
                placeholder={store.placeholder}
                link={store.link}
                col={store.col}
            />
        );

        expect(wrapper).toMatchSnapshot();
    })

})




