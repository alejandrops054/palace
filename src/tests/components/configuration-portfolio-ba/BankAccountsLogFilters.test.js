/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/

import React from 'react';
import '@testing-library/jest-dom'
import { shallow } from 'enzyme'
import BankAccountsLogFilters from '../../../components/configuration-portfolio-ba/BankAccountsLogFilters'

describe('BankAccountsLogFilters component',() => {
    test('debe mostrar snapshot', () => {
        
        const wrapper = shallow(<BankAccountsLogFilters/>)
        expect(wrapper).toMatchSnapshot();
    })
    
})