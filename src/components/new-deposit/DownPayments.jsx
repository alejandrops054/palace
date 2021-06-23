/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/

import React, { useState } from "react";
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import { Input, Checkbox, Label, Button } from "../index";
const DownPayments = () => {

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
                            Down Payments
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            // className={classnames({ active: activeTab === '2' })}
                            onClick={() => { toggle('2'); }}
                        >
                            Fees
                        </NavLink>
                    </NavItem>
                </Nav>
                <TabContent activeTab={activeTab}>
                    <TabPane tabId="1">
                        <div className="row">
                            <Button title="Down Payments" col={3} type="prymary" typebootstrap="primary" />
                            <Input label="Amount" type="text" col={3} />
                            <Input label="Collected" type="text" col={3} />
                            <Label etiqueta="Currency: DOLAR U.S.A" col={4} />
                            <Input label="" type="text" col={4} />
                            <Input label="Collected AF" type="text" col={4} />
                        </div>
                    </TabPane>
                    <TabPane tabId="2">
                        <div className="row">
                            <Checkbox label="Late/Service Fee" col={6} />
                            <Input label="" type="text" col={6} />
                            <Checkbox label="Refinancing Fee" col={6} />
                            <Input label="" type="text" col={6} />
                        </div>
                    </TabPane>
                </TabContent>
            </div>
        </div>

    );
};

export default DownPayments;