/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/
import React from "react";
import { Card, CardBody, CardTitle, Label, Col, Row, Input, Button } from 'reactstrap';
function OfficeEditing() {

    return (
        <>
            <Card>
                <CardBody>
                    <CardTitle tag="h5">Office Editing</CardTitle>
                    <Row>
                        <Col md={6}>
                            <Label>Code</Label>
                            <Input type="text" />
                        </Col>
                        <Col md={6}>
                            <Label>Status</Label>
                            <Input type="select" name="select" id="exampleSelect">
                                <option>Alta</option>
                                <option>2</option>
                            </Input>
                        </Col>
                        <Col md={6}>
                            <Label>Name</Label>
                            <Input type="text" />
                        </Col>
                        <Col md={6}>
                            <Label>Address1</Label>
                            <Input type="text" />
                        </Col>
                        <Col md={6}>
                            <Label>Address2</Label>
                            <Input type="text" />
                        </Col>
                        <Col md={6}>
                            <Label>Phone</Label>
                            <Input type="text" />
                        </Col>
                        <Col md={6}>
                            <Label>Stock Weeks</Label>
                            <Input type="text" />
                        </Col>
                        <Col md={6}>
                            <Label>Stock Weeks Inc</Label>
                            <Input type="text" />
                        </Col>
                        <Col md={6}>
                            <Label>Avalilable Stock Weeks</Label>
                            <Input type="text" />
                        </Col>
                        <Col md={6}>
                            <Label>Avalilable Stock Weeks Inc</Label>
                            <Input type="text" />
                        </Col>
                        <Col md={6}>
                            <Label>Project Code</Label>
                            <Input type="text" />
                        </Col>
                        <Col md={6}>
                            <Label>Project Name</Label>
                            <Input type="select" name="select" id="exampleSelect">
                                <option>PALACE ELITE</option>
                                <option>2</option>
                            </Input>
                        </Col>
                        <Col md={12}>
                            <Label>Zone</Label>
                            <Input type="select" name="select" id="exampleSelect">
                                <option>Zona Hotelera</option>
                                <option>2</option>
                            </Input>
                        </Col>
                        <Col md={3}>
                            <Label check>
                                <Input type="checkbox" /> Auto Application
                                </Label>
                        </Col>
                        <Col md={3}>
                            <Label check>
                                <Input type="checkbox" /> Cancel Clause
                                </Label>
                        </Col>
                        <Col md={3}>
                            <Label check>
                                <Input type="checkbox" /> Generate Authorizations
                                </Label>
                        </Col>
                        <Col md={3}>
                            <Label check>
                                <Input type="checkbox" /> Generate Products
                                </Label>
                        </Col>
                        <Col md={4}>
                            <Label>Consecutive Normal</Label>
                            <Input type="text" />
                        </Col>
                        <Col md={4}>
                            <Label>Consecutive Vip</Label>
                            <Input type="text" />
                        </Col>
                        <Col md={4}>
                            <Label>Last Application</Label>
                            <Input type="text" />
                        </Col>
                        <Col md={3}>
                            <Label>Tax Rate</Label>
                            <Input type="text" />
                        </Col>
                        <Col md={3}>
                            <Label>CasH Exchg Ventanilla</Label>
                            <Input type="text" />
                        </Col>
                        <Col md={3}>
                            <Label>Cash Exchg Mexican</Label>
                            <Input type="text" />
                        </Col>
                        <Col md={3}>
                            <Label>Cash Exchg Interbanc</Label>
                            <Input type="text" />
                        </Col>
                        <Col md={6}>
                            <Label>Documents Path</Label>
                            <Input type="text" />
                        </Col>
                        <Col md={6}>
                            <Label>Foundings Path</Label>
                            <Input type="text" />
                        </Col>
                        <h5>Clash Receipt</h5>
                        <Col md={6}>
                            <Label>Prefix</Label>
                            <Input type="text" />
                        </Col>
                        <Col md={6}>
                            <Label>Last Cash Receipt</Label>
                            <Input type="text" />
                        </Col>
                        <Col lg="4" className="justify-content-end">
                            <Button color="primary"><i className="fas fa-save"></i>Save</Button>
                            <Button color="primary"><i className="fas fa-times"></i>Close</Button>
                        </Col>
                    </Row>
                </CardBody>
            </Card>
        </>
    );
}

export default OfficeEditing;
