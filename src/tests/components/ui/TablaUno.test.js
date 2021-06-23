import React from 'react'
import {shallow} from 'enzyme'

import TablaUno from '../../../components/ui/TablaUno'

describe('Pruebas del componente TablaUno ', () => {
    test('Creacion de snapashot', () => {
        
        const wrapper = shallow(<TablaUno/>)

        expect(wrapper).toMatchSnapshot();
    })
    
})
