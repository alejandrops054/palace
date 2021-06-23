/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/
import React from 'react';
import { LiTab } from '../index';

const NavBenefits = () => {

    const items1 = [
        { title: 'Promotions', route: '', selected: 'false', active: 'active'},
        { title: 'Provisions', route: '', selected: 'false', active: '',data:'/Provisions'},
        { title: 'Discount products', route: '', selected: 'false', active: '' },
        { title: 'Wallet', route: '', selected: 'false', active: '' }
    ];

    return (
        <ul className="nav nav-tabs mb-3" id="infoTabs" role="tablist">
            {items1.map(item => (
                <LiTab
                    key={item.title}
                    title={item.title}
                    selected={item.selected}
                    active={item.active}
                    data={item.data}
                />
            ))}

        </ul>
    )
}

export default NavBenefits
