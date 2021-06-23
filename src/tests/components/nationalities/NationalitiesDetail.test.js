/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/
import React from 'react';
import '@testing-library/jest-dom'
import { shallow } from 'enzyme'
import NationalitiesDetail from '../../../components/nationalities/NationalitiesDetail'

describe('NationalitiesDetail component',() => {
    test('Debe mostrar snapshot', () => {
        
        const wrapper = shallow(<NationalitiesDetail/>)
        expect(wrapper).toMatchSnapshot();
    })
    
})