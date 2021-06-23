/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/
import React from 'react';
import '@testing-library/jest-dom'
import { shallow } from 'enzyme'
import QuantityProvisons from '../../../components/quantity-provisions/QuantityProvisons'

describe('QuantityProvisons component',() => {
    test('Debe mostrar snapshot', () => {
        
        const wrapper = shallow(<QuantityProvisons/>)
        expect(wrapper).toMatchSnapshot();
    })
    
})