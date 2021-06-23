/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/
import React from 'react';
import '@testing-library/jest-dom'
import { shallow } from 'enzyme'
import AccessHotels from '../../../components/access-hotels/AccessHotels'

describe('AccessHotels component', () => {
    test('Debe mostrar snapshot', () => {

        const wrapper = shallow(<AccessHotels />)
        expect(wrapper).toMatchSnapshot();
    })

})