import React from 'react';
import '@testing-library/jest-dom'
import { shallow } from 'enzyme'
import Note from '../../../components/ui/Note';

describe('Pueba en <Note/>', () => {
    test('Debe renderizar note', () => {

        const wrapper = shallow(
            <Note/>
        );

        expect(wrapper).toMatchSnapshot();
    })

})