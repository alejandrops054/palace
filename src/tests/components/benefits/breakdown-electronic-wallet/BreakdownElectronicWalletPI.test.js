/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/
import React from 'react';
import '@testing-library/jest-dom'
import { shallow } from 'enzyme'
import BreakdownElectronicWalletPI from '../../../../components/benefits/breakdown-electronic-wallet/BreakdownElectronicWalletPI'

describe('BreakdownElectronicWalletPI component',() => {
    test('Debe mostrar snapshot', () => {
        
        const wrapper = shallow(<BreakdownElectronicWalletPI/>)
        expect(wrapper).toMatchSnapshot();
    })
    
})