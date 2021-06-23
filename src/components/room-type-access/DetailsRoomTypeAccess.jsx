/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/
import React, { useState } from "react";
import { GeneralTA, ClausesTA, CallCenterTA, Button } from '../index'
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, CardBody, CardTitle, Label, Input, Col, Row } from 'reactstrap';

function DetailsRoomTypeAccess() {
    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }
    return (
        <>
            <Card>
                <CardBody>
                    <CardTitle tag="h5">Room Type Access</CardTitle>
                    <Row>
                        <Col md={6}>
                            <Label>Code</Label>
                            <Input type="text" />
                        </Col>
                        <Col md={6}>
                            <Label>Status</Label>
                            <Input type="select" name="select" id="exampleSelect">
                                <option>1</option>
                                <option>2</option>
                            </Input>
                        </Col>
                        <Col md={12}>
                            <Label>Description</Label>
                            <Input type="textarea" name="text" id="exampleText" />
                        </Col>
                    </Row>

                    <Nav tabs>
                        <NavItem>
                            <NavLink
                                // className={classnames({ active: activeTab === '1' })}
                                onClick={() => { toggle('1'); }}
                            >
                                General
                         </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                // className={classnames({ active: activeTab === '2' })}
                                onClick={() => { toggle('2'); }}
                            >
                                Clauses
                         </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                // className={classnames({ active: activeTab === '3' })}
                                onClick={() => { toggle('3'); }}
                            >
                                Call Center
                         </NavLink>
                        </NavItem>
                    </Nav>
                    <TabContent activeTab={activeTab}>
                        <TabPane tabId="1">
                            <GeneralTA />
                        </TabPane>
                        <TabPane tabId="2">
                            <ClausesTA />
                        </TabPane>
                        <TabPane tabId="3">
                            <CallCenterTA />
                        </TabPane>
                    </TabContent>
                    
                    <div className="d-flex justify-content-end">
                        <Button col={2}
                            typebootstrap="primary "
                            type="submit"
                            title="Save" />
                        <Button col={2}
                            typebootstrap="secondary"
                            type="button"
                            title="Close"
                        />
                    </div>
                </CardBody>
            </Card>
        </>
    );
}

export default DetailsRoomTypeAccess;
