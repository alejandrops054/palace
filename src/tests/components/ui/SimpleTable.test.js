import React from 'react'
import {shallow} from 'enzyme'

import SimpleTable from '../../../components/ui/SimpleTable'

describe('Pruebas del componente SimpleTable ', () => {
    test('Creacion de snapashot', () => {
        
        const wrapper = shallow(<SimpleTable/>)

        expect(wrapper).toMatchSnapshot();
    })
    
})
