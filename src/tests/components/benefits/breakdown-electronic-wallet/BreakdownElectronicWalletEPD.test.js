/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/
import React from 'react';
import '@testing-library/jest-dom'
import { shallow } from 'enzyme'
import BreakdownElectronicWalletEPD from '../../../../components/benefits/breakdown-electronic-wallet/BreakdownElectronicWalletEPD'

describe('BreakdownElectronicWalletEPD component',() => {
    test('Debe mostrar snapshot', () => {
        
        const wrapper = shallow(<BreakdownElectronicWalletEPD/>)
        expect(wrapper).toMatchSnapshot();
    })
    
})