/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/
import React from 'react';
import '@testing-library/jest-dom'
import { shallow } from 'enzyme'
import CustomerData from '../../../components/ui/CustomerData';

describe('Pueba en <CustomerData/>', () => {
    test('Debe renderizar el CustomerData ', () => {

        

   
        const wrapper = shallow(
            <CustomerData
            />
        );

        expect(wrapper).toMatchSnapshot();
    })

})
