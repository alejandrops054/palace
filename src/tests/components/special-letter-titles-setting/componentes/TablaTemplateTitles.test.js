/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/
import React from 'react'
import {shallow} from 'enzyme'

import TablaTemplateTitles from '../../../../components/special-letter-titles-setting/componentes/TablaTemplateTitles'

describe('Pruebas del componente TablaTemplateTitles', () => {
    test('Creacion de TablaTemplateTitles', () => {
        
        const wrapper = shallow(<TablaTemplateTitles/>)

        expect(wrapper).toMatchSnapshot();
    })
    
})