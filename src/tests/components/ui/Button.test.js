/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/
import React from 'react';
import { shallow } from 'enzyme'
import Button from '../../../components/ui/Button'

describe('Prueba componente UI <Button/>', () => {
    test('Componente recibe props type:String, width:100%', () => {
        const boton = { 
            titulo:'Titulo de etiqueta',
            class: 'btn btn-primary btn-lg d-block m-auto',
            width: '100%'
        }
        const wrapper = shallow(
            <Button
                onClick={()=>onClick()} 
                className={boton.class} 
                type={boton.titulo} 
                alt={boton.titulo} 
                title={boton.titulo} 
                style={boton.width}
            />
        );

        expect(wrapper).toMatchSnapshot();
    })

})
