/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/
import React from 'react';
import '@testing-library/jest-dom'
import { shallow } from 'enzyme'
import NewDeposit from '../../../components/new-deposit/NewDeposit'

describe('NewDeposit component',() => {
    test('Debe mostrar snapshot', () => {
        
        const wrapper = shallow(<NewDeposit/>)
        expect(wrapper).toMatchSnapshot();
    })
    
})