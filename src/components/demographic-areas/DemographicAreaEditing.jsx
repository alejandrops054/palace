/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/
import React from "react";
import { Card, CardBody, CardTitle, Label, Col, Row, Input, Button } from 'reactstrap';
function DemographicAreaEditing() {
    return (
        <>
            <Card>
                <CardBody>
                    <CardTitle tag="h5">Demographic Area Editing</CardTitle>
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
                        <Col md={12}>
                            <Label>Name</Label>
                            <Input type="text" />
                        </Col>
                        <Col md={4}>
                            <Label>Amount</Label>
                            <Input type="text" />
                        </Col>
                        <Col md={4}>
                            <Label>Begining Date</Label>
                            <Input type="date" />
                        </Col>
                        <Col md={4}>
                            <Label>Ending Date</Label>
                            <Input type="date" />
                        </Col>
                        <Col md={12} className="justify-content-end">
                            <Button color="primary"><i className="fas fa-save"></i>Save</Button>
                            <Button color="primary"><i className="fas fa-times"></i>Cancel</Button>
                        </Col>
                    </Row>
                </CardBody>
            </Card>
        </>
    );
}

export default DemographicAreaEditing;
