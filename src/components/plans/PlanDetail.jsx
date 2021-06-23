/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/
import React from "react";
import { Card, CardBody, CardTitle, Label, Col, Row, Input, Button } from 'reactstrap';
function PlanDetail() {

    return (
        <>
            <Card>
                <CardBody>
                    <CardTitle tag="h5">Plan Detail</CardTitle>
                    <Row>
                        <Col md={6}>
                            <Label>Code</Label>
                            <Input type="text" />
                        </Col>
                        <Col md={6}>
                            <Label>Title</Label>
                            <Input type="text" />
                        </Col>
                        <Col md={6}>
                            <Label>Office</Label>
                            <Input type="text" />
                        </Col>
                        <Col md={6}>
                            <Input type="select" name="select" id="exampleSelect">
                                <option>Alta</option>
                                <option>2</option>
                            </Input>
                        </Col>
                        <Col md={6}>
                            <Label>Project</Label>
                            <Input type="text" />
                        </Col>
                        <Col md={6}>
                            <Input type="select" name="select" id="exampleSelect">
                                <option>Alta</option>
                                <option>2</option>
                            </Input>
                        </Col>
                        <Col md={6}>
                            <Label>Status</Label>
                            <Input type="select" name="select" id="exampleSelect">
                                <option>Alta</option>
                                <option>2</option>
                            </Input>
                        </Col>

                    </Row>
                    <Col lg="4" className="justify-content-end">
                        <Button color="primary"><i className="fas fa-save"></i>Save</Button>
                        <Button color="primary"><i className="fas fa-times"></i>Close</Button>
                    </Col>
                </CardBody>
            </Card>
        </>
    );
}

export default PlanDetail;
