/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/
import React from 'react';
import '@testing-library/jest-dom'
import { shallow } from 'enzyme'
import TemplateTitle from '../../../components/special-letter-titles-setting/TemplateTitle'

describe('TemplateTitle component',() => {
    test('debe mostrar TemplateTitle.', () => {
        
        const wrapper = shallow(<TemplateTitle/>)
        expect(wrapper).toMatchSnapshot();
    })
    
})