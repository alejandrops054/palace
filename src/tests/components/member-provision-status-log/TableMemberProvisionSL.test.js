/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/

import React from 'react';
import '@testing-library/jest-dom'
import { shallow } from 'enzyme'
import TableMemberProvisionSL from '../../../components/member-provision-status-log/TableMemberProvisionSL'

describe('TableMemberProvisionSL component', () => {
    test('debe mostrar snapshot', () => {

        const wrapper = shallow(<TableMemberProvisionSL />)
        expect(wrapper).toMatchSnapshot();
    })

})