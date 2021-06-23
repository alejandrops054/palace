/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/
import React from 'react';
import '@testing-library/jest-dom'
import { shallow } from 'enzyme'
import AccessHotelLog from '../../../components/access-hotels/AccessHotelLog'

describe('AccessHotelLog component', () => {
    test('Debe mostrar snapshot', () => {

        const wrapper = shallow(<AccessHotelLog />)
        expect(wrapper).toMatchSnapshot();
    })

})