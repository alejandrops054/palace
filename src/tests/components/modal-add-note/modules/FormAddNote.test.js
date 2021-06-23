/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/
import React from 'react';
import '@testing-library/jest-dom'
import { shallow } from 'enzyme'
import FormAddNote from '../../../../components/modal-add-note/modules/FormAddNote'

describe('FormAddNote component',() => {
    test('Debe mostrar snapshot', () => {
        
        const wrapper = shallow(<FormAddNote/>)
        expect(wrapper).toMatchSnapshot();
    })
    
})