/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/
import React from 'react';
import '@testing-library/jest-dom'
import { shallow } from 'enzyme'
import TemplateTitles from '../../../components/special-letter-titles-setting/TemplateTitles'

describe('TemplateTitles component',() => {
    test('debe mostrar snapshot', () => {
        
        const wrapper = shallow(<TemplateTitles/>)
        expect(wrapper).toMatchSnapshot();
    })
    
})