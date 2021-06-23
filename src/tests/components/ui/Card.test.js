/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/
import React from 'react'
import '@testing-library/jest-dom'
import { shallow } from 'enzyme'
import Card from '../../../components/ui/Card'

describe('Pueba en <Card/>', () => {
    test('Debe renderizar el acordeon con titulo y componente', () => {
        const card = { 
            titulo:'Titulo de etiqueta',
            texto: 'para mostrar un p'
        }

        const wrapper = shallow(
            <Card
                title={card.titulo}
                texto={card.texto}
            />
        );
 
        expect(wrapper).toMatchSnapshot();
    })

})