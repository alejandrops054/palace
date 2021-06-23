/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/
import React from 'react';
import '@testing-library/jest-dom'
import { shallow } from 'enzyme'
import CardIcon from '../../../components/ui/CardIcon';

describe('Pueba en <CardIcon/>', () => {
    test('Debe renderizar el CardIcon ', () => {

        const titulo = 'Titulo de CardIcon';
        const icon = 'contracts';
        const route = '/member-resume';
        const size = '12'
        const wrapper = shallow(
            <CardIcon
                title= {titulo}
                size = {size} 
                icon = {icon} 
                route = {route}
            />
        );

        expect(wrapper).toMatchSnapshot();
    })

})
