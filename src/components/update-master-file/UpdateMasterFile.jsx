/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/
import React, { useState } from "react";
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, CardBody, CardTitle } from 'reactstrap';
import { Process, Pending, Errors } from '../index'
function UpdateMasterFile() {
    const [activeTab, setActiveTab] = useState('1');
    const [activeTab1, setActiveTab1] = useState('1');
    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }
    const toggle1 = tab1 => {
        if (activeTab1 !== tab1) setActiveTab1(tab1);
    }
    return (
        <>
            <Card>
                <CardBody>
                    <CardTitle tag="h5">Update Master File</CardTitle>
                    <Nav tabs>
                        <NavItem>
                            <NavLink
                                // className={classnames({ active: activeTab === '1' })}
                                onClick={() => { toggle('1'); }}
                            >
                                Process
                         </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                // className={classnames({ active: activeTab === '2' })}
                                onClick={() => { toggle('2'); }}
                            >
                                Pending
                         </NavLink>
                        </NavItem>
                    </Nav>
                    <TabContent activeTab={activeTab}>
                        <TabPane tabId="1">
                            <Process />
                        </TabPane>
                        <TabPane tabId="2">
                            <Pending />
                        </TabPane>
                    </TabContent>
                    <Nav tabs>
                        <NavItem>
                            <NavLink
                                // className={classnames({ active: activeTab === '1' })}
                                onClick={() => { toggle1('1'); }}
                            >
                                Errors
                         </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                // className={classnames({ active: activeTab === '2' })}
                                onClick={() => { toggle1('2'); }}
                            >
                                Warnings
                         </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                // className={classnames({ active: activeTab === '2' })}
                                onClick={() => { toggle1('3'); }}
                            >
                                Performance
                         </NavLink>
                        </NavItem>
                    </Nav>
                    <TabContent activeTab={activeTab1}>
                        <TabPane tabId="1">
                            <Errors />
                        </TabPane>
                        <TabPane tabId="2">
                        </TabPane>
                        <TabPane tabId="3">
                        </TabPane>
                    </TabContent>
                </CardBody>
            </Card>
        </>
    );
}

export default UpdateMasterFile;
