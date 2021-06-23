/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/
import React, { useState } from "react";
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, CardBody, CardTitle } from 'reactstrap';
import DataProvInfo from "./DataProvInfo";
import Direct from "./Direct";
import Cost from './Cost'


const ProvisionInformation = () =>{
    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }
    return (
        <>
        <Card>
            <CardBody>
                <CardTitle tag="h5">Provision Information</CardTitle>
                <Nav tabs>
                    <NavItem>
                        <NavLink
                            // className={classnames({ active: activeTab === '1' })}
                            onClick={() => { toggle('1'); }}
                        >
                            Direct
                     </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            // className={classnames({ active: activeTab === '2' })}
                            onClick={() => { toggle('2'); }}
                        >
                            Cost
                     </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            // className={classnames({ active: activeTab === '2' })}
                            onClick={() => { toggle('3'); }}
                        >
                            Lodging Tax
                     </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            // className={classnames({ active: activeTab === '2' })}
                            onClick={() => { toggle('2'); }}
                        >
                            Tip
                     </NavLink>
                    </NavItem>
                </Nav>
                <DataProvInfo/>{' '}
                <TabContent activeTab={activeTab}>
                    <TabPane tabId="1">
                        <Direct/>
                    </TabPane>
                    <TabPane tabId="2">
                        <Cost/>
                    </TabPane>
                </TabContent>
            </CardBody>
        </Card>
    </>
    )
}

export default ProvisionInformation