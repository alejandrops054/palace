/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/
import React from 'react';
import '@testing-library/jest-dom'
import { shallow } from 'enzyme'
import BinBankCreditCard from '../../../components/new-deposit/BinBankCreditCard'

describe('BinBankCreditCard component',() => {
    test('Debe mostrar snapshot', () => {
        
        const wrapper = shallow(<BinBankCreditCard/>)
        expect(wrapper).toMatchSnapshot();
    })
    
})