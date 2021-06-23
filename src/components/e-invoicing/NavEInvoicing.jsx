/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/

import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import TableInProcess from './TableInProcess'
import TableProcessed from './TableProcessed'
const NavEInvoicing = () => {
    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);

    }
    return (
        <div className="card">
            <div className="card-body">
                <Nav tabs>
                    <NavItem>
                        <NavLink
                            // className={classnames({ active: activeTab === '1' })}
                            onClick={() => { toggle('1'); }}
                        >
                            In process
                                    </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            // className={classnames({ active: activeTab === '2' })}
                            onClick={() => { toggle('2'); }}
                        >
                            Processed
                                    </NavLink>
                    </NavItem>
                </Nav>
                <TabContent activeTab={activeTab}>
                    <TabPane tabId="1">
                        <TableInProcess />
                    </TabPane>
                    <TabPane tabId="2">
                        <TableProcessed />
                    </TabPane>
                </TabContent>
            </div>
        </div>

    );
};

export default NavEInvoicing;
