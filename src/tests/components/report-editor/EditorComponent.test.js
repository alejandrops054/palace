/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/
import React from 'react';
import { shallow } from 'enzyme'
import EditorComponent from '../../../components/report-editor/EditorComponent'


describe('Prueba componente UI <EditorComponent/>', () => {
    test('Componente recibe props label:String, price:Number y col:Number', () => {
        const store = {
            initialValue: 'Inicial',
            height: 500,
            menubar: false,
            col: 6
        }
        const wrapper = shallow(
            <EditorComponent
                initialValue={store.initialValue}
                height={store.height}
                menubar={store.menubar}
                col={store.col}
            />
        );

        expect(wrapper).toMatchSnapshot();
    })
})
