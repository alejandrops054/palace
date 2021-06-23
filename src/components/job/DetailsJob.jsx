/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/
import React from "react";
import { Card, CardBody, CardTitle, Label, Col, Row, Input, Button } from 'reactstrap';

function DetailsJob() {

    return (
        <>
            <Card>
                <CardBody>
                    <CardTitle tag="h5">Job</CardTitle>
                    <Row>
                        <Col md={6}>
                            <Label>Code</Label>
                            <Input type="text" />
                        </Col>
                        <Col md={6}>
                            <Label>Description</Label>
                            <Input type="textarea" name="text" id="exampleText" />
                        </Col>
                        <Col md={6}>
                            <Label>Role</Label>
                            <Input type="select" name="select" id="exampleSelect">
                                <option>1</option>
                                <option>2</option>
                            </Input>
                        </Col>
                        <Col md={6}>
                            <Label>Status</Label>
                            <Input type="select" name="select" id="exampleSelect">
                                <option>1</option>
                                <option>2</option>
                            </Input>
                        </Col>
                        <Col sm={{ size: 10, offset: 10 }}>
                             <Button color="primary" size="lg">Ok</Button>
                            <Button color="secondary" size="lg">Cancel</Button>
                        </Col>
                    </Row>
                </CardBody>
            </Card>
        </>
    );
}

export default DetailsJob;
