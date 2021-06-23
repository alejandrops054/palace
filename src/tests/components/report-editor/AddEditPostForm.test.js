/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/
import React from 'react';
import { shallow } from 'enzyme'
import AddEditForm from '../../../components/report-editor/AddEditPostForm'

describe('Prueba componente UI <AddEditPostForm/>', () => {
    test('Componente no recibe props', () => {

        const wrapper = shallow(
            <AddEditForm />
        );

        expect(wrapper).toMatchSnapshot();
    })
})
