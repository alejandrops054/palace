/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/
import React from 'react';
import '@testing-library/jest-dom'
import { shallow } from 'enzyme'
import BasicInfoForm from '../../../components/new-partner/BasicInfoForm'

describe('BasicInfoForm component',() => {
    test('Debe mostrar snapshot', () => {
        
        const wrapper = shallow(<BasicInfoForm/>)
        expect(wrapper).toMatchSnapshot();
    })
    
})