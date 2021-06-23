/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/

/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/

import React from 'react';
import '@testing-library/jest-dom'
import { shallow } from 'enzyme'
import ConcordNotes from '../../../components/concord-notes/ConcordNotes'

describe('ConcordNotes component',() => {
    test('debe mostrar snapshot', () => {
        
        const wrapper = shallow(<ConcordNotes/>)
        expect(wrapper).toMatchSnapshot();
    })
    
})