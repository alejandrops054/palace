/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/
import React from 'react';
import '@testing-library/jest-dom'
import { shallow } from 'enzyme'
import Fiters from '../../../../components/benefits/benefit-policy/Fiters'

describe('Fiters component',() => {
    test('Debe mostrar snapshot', () => {
        
        const wrapper = shallow(<Fiters/>)
        expect(wrapper).toMatchSnapshot();
    })
    
})