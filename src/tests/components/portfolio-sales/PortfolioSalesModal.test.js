/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/
import React from 'react';
import '@testing-library/jest-dom'
import { shallow } from 'enzyme'
import PortfolioSalesModal from '../../../components/portfolio-sales/PortfolioSalesModal'

describe('PortfolioSalesModal component',() => {
    test('Debe mostrar snapshot', () => {
        
        const wrapper = shallow(<PortfolioSalesModal/>)
        expect(wrapper).toMatchSnapshot();
    })
    
})