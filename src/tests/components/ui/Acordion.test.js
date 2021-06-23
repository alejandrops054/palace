/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/
import React from 'react';
import '@testing-library/jest-dom'
import { shallow } from 'enzyme'
import Accordionn from '../../../components/ui/Accordionn';
import AccordionnInformation from '../../../components/guest-information/AccordionnInformation'

describe('Pueba en <Acordion/>', () => {
    test('Debe renderizar el acordeon con titulo y componente', () => {
        const titulo = 'Titulo acordeon';
        const wrapper = shallow(
            <Accordionn
                title={titulo}
                component={AccordionnInformation}
            />
        );

        expect(wrapper).toMatchSnapshot();
    })

})
