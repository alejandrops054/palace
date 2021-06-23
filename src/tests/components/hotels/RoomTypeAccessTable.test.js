/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/

import React from 'react';
import '@testing-library/jest-dom'
import { shallow } from 'enzyme'
import RoomTypesAccessTable from '../../../components/hotels/RoomTypesAccessTable'

describe('RoomTypesAccessTable component',() => {
    test('debe mostrar snapshot', () => {
        
        const wrapper = shallow(<RoomTypesAccessTable/>)
        expect(wrapper).toMatchSnapshot();
    })
    
})