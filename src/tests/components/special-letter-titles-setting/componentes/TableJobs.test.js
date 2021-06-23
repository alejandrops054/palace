/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/
import React from 'react'
import {shallow} from 'enzyme'

import TableJobs from '../../../../components/special-letter-titles-setting/componentes/TableJobs'

describe('Pruebas del componente TableJobs', () => {
    test('Creacion de TableJobs', () => {
        
        const wrapper = shallow(<TableJobs/>)

        expect(wrapper).toMatchSnapshot();
    })
    
})