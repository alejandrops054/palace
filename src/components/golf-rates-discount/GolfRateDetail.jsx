/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/
import React from "react";
import { Card, CardBody, CardTitle, Label, Col, Row, Input, Button } from 'reactstrap';
function GolfRateDetail() {
    return (
        <>
            <Card>
                <CardBody>
                    <CardTitle tag="h5">Golf Rate Detail</CardTitle>
                    <Row>
                        <Col md={6}>
                            <Label>Golf Round</Label>
                            <Input type="select" name="select" id="exampleSelect">
                                <option>Alta</option>
                                <option>2</option>
                            </Input>
                        </Col>
                        <Col md={6}>
                            <Label>Golf Course</Label>
                            <Input type="select" name="select" id="exampleSelect">
                                <option>Alta</option>
                                <option>2</option>
                            </Input>
                        </Col>
                        <Col md={6}>
                            <Label>Use Year</Label>
                            <Input type="select" name="select" id="exampleSelect">
                                <option>Alta</option>
                                <option>2</option>
                            </Input>
                        </Col>

                        <Col md={6}>
                            <Label>Amount</Label>
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
                            <Label>Date From</Label>
                            <Input type="date" />
                        </Col>
                        <Col md={6}>
                            <Label>Date To</Label>
                            <Input type="date" />
                        </Col>
                        <Col md={6}>
                            <Label>Print Date</Label>
                            <Input type="date" />
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

export default GolfRateDetail;
