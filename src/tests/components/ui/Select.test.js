import React from 'react';
import { shallow } from 'enzyme'
import Select from '../../../components/ui/Select'



describe('Prueba componente UI <Search/>', () => {
    test('Componente recibe props ', () => {
        const store = { 
            icon:'fa fas-check',
            label:'Titulo de placeholder',
            option:'Opciones',
            col:6, 
            colIcon:6,
            iconlabel:'fa fas-check',
            url:'/'
        }
        const wrapper = shallow(
            <Select
                icon={store.icon}
                label={store.label}
                option={store.option}
                col={store.col}
                colIcon={store.colIcon}
                iconlabel={store.iconlabel}
                url={store.url}
            />
        );

        expect(wrapper).toMatchSnapshot();
    })

})
