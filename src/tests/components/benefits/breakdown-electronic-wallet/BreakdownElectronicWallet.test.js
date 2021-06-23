/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/
import React from 'react';
import '@testing-library/jest-dom'
import { shallow } from 'enzyme'
import BreakdownElectronicWallet from '../../../../components/benefits/breakdown-electronic-wallet/BreakdownElectronicWallet'

describe('BreakdownElectronicWallet component',() => {
    test('Debe mostrar snapshot', () => {
        
        const wrapper = shallow(<BreakdownElectronicWallet/>)
        expect(wrapper).toMatchSnapshot();
    })
    
})