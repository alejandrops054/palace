/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/
import React from 'react';
import '@testing-library/jest-dom'
import { shallow } from 'enzyme'
import CategoryTitles from '../../../components/special-letter-titles-setting/CategoryTitles'

describe('CategoryTitles',() => {
    test('debe mostrar snapshot', () => {
        
        const wrapper = shallow(<CategoryTitles/>)
        expect(wrapper).toMatchSnapshot();
    })
    
})