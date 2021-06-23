/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/
import React from 'react';
import '@testing-library/jest-dom'
import { shallow } from 'enzyme'
import Chart from '../../../components/ui/Chart';

describe('Pueba en <Chart/>', () => {
    test('Debe renderizar el Chart ', () => {

   
        const wrapper = shallow(
            <Chart
                
            />
        );

        expect(wrapper).toMatchSnapshot();
    })

})
