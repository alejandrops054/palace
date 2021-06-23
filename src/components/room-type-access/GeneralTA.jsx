/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/
import React from "react";
import { Card, CardBody, Label, Input, Col, Row } from 'reactstrap';

function GeneralTA() {
    return (
        <>
            <Card>
                <CardBody>
                    <Row>
                        <Col md={6}>
                            <Label>Aditional Access</Label>
                            <Input type="text" />
                        </Col>
                        <Col md={6}>
                            <Label>Start date</Label>
                            <Input type="select" name="select" id="exampleSelect">
                                <option>1</option>
                                <option>2</option>
                            </Input>
                        </Col>
                        <Col md={6}>
                            <Label>Grouper</Label>
                            <Input type="select" name="select" id="exampleSelect">
                                <option>1</option>
                                <option>2</option>
                            </Input>
                        </Col>
                        <Col md={6}>
                            <Label>Room Type</Label>
                            <Input type="select" name="select" id="exampleSelect">
                                <option>1</option>
                                <option>2</option>
                            </Input>
                        </Col>
                        <Col md={6}>
                            <Label>Category</Label>
                            <Input type="select" name="select" id="exampleSelect">
                                <option>1</option>
                                <option>2</option>
                            </Input>
                        </Col>
                        <Col md={6}>
                            <Label>Force</Label>
                            <Input type="select" name="select" id="exampleSelect">
                                <option>1</option>
                                <option>2</option>
                            </Input>
                        </Col>
                        <Col md={3}>
                            <Label>Begin Date</Label>
                            <Input type="date" />
                        </Col>
                        <Col md={3}>
                            <Label>End Date</Label>
                            <Input type="date" />
                        </Col>
                        <Col md={6}>
                            <Label>Subcategory</Label>
                            <Input type="select" name="select" id="exampleSelect">
                                <option>1</option>
                                <option>2</option>
                            </Input>
                        </Col>
                        <Col md={3}>
                            <Label>Validity</Label>
                            <Input type="text" />
                        </Col>
                        <Col md={3}>
                            <Label>Print Order</Label>
                            <Input type="text" />
                        </Col>
                        <Col md={6}>
                            <Label>Period Type</Label>
                            <Input type="select" name="select" id="exampleSelect">
                                <option>1</option>
                                <option>2</option>
                            </Input>
                        </Col>
                        <Col md={12}>
                            <Label check>
                                <Input type="checkbox" /> Bold
                            </Label>
                        </Col>
                    </Row>
                </CardBody>
            </Card>
        </>
    );
}

export default GeneralTA;
