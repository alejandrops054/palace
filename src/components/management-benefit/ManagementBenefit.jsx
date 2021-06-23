/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/
import React, { useState } from "react";
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, CardBody, CardTitle } from 'reactstrap';
import CreateBenefits from './CreateBenefits'
import SearchBenefits from './SearchBenefits'

function ManagementBenefit() {
    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }
    return (
        <>
            <Card>
                <CardBody>
                    <CardTitle tag="h5">Management benefit</CardTitle>
                    <Nav tabs>
                        <NavItem>
                            <NavLink
                                // className={classnames({ active: activeTab === '1' })}
                                onClick={() => { toggle('1'); }}
                            >
                                Search Benefits
                         </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                // className={classnames({ active: activeTab === '2' })}
                                onClick={() => { toggle('2'); }}
                            >
                                Create Benefits
                         </NavLink>
                        </NavItem>
                    </Nav>
                    <TabContent activeTab={activeTab}>
                        <TabPane tabId="1">
                            <SearchBenefits />
                        </TabPane>
                        <TabPane tabId="2">
                            <CreateBenefits />
                        </TabPane>
                    </TabContent>
                </CardBody>
            </Card>
        </>
    );
}

export default ManagementBenefit;
