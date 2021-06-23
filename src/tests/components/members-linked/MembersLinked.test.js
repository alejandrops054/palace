/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/

import React from 'react';
import '@testing-library/jest-dom'
import { shallow } from 'enzyme'
import MembersLinked from '../../../components/members-linked/MembersLinked'

describe('MembersLinked component',() => {
    test('debe mostrar snapshot', () => {
        
        const wrapper = shallow(<MembersLinked/>)
        expect(wrapper).toMatchSnapshot();
    })
    
})