/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/
import React from 'react';
import '@testing-library/jest-dom'
import { shallow } from 'enzyme'
import Jobs from '../../../components/special-letter-titles-setting/Jobs'

describe('RoomType Jobs',() => {
    test('debe mostrar Jobs', () => {
        
        const wrapper = shallow(<Jobs/>)
        expect(wrapper).toMatchSnapshot();
    })
    
})