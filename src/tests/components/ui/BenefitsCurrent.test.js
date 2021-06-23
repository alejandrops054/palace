/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/
import React from 'react'
import '@testing-library/jest-dom'
import { shallow } from 'enzyme'
import BenefitsCurrent from '../../../components/ui/BenefitsCurrent'

describe('Pueba en <BenefitsCurrent/>', () => {
    test('Debe renderizar el componente con titulo, precio y precio total', () => {
        const titulo = 'Titulo BenefitsCurrent';
        const price = '500'
        const totalPrice = '5000'
        const wrapper = shallow(
            <BenefitsCurrent
                title={titulo}
                price={price}
                totalPrice={totalPrice}
            />
        );

        expect(wrapper).toMatchSnapshot();
    })

})