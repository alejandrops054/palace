/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/
import React from 'react';
import '@testing-library/jest-dom'
import { shallow } from 'enzyme'
import AccessHotelLogDetail from '../../../components/access-hotels/AccessHotelLogDetail'

describe('AccessHotelLogDetail component', () => {
    test('Debe mostrar snapshot', () => {

        const wrapper = shallow(<AccessHotelLogDetail />)
        expect(wrapper).toMatchSnapshot();
    })

})