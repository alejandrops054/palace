/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/
import React from "react";
import { Card, CardBody, Label, Input, Col, Row } from 'reactstrap';

function ClausesTA() {
    return (
        <>
            <Card>
                <CardBody>
                    <Row>
                        <Col md={12}>
                            <Label>Description Spanish</Label>
                            <Input type="textarea" name="text" id="exampleText" />
                        </Col>
                        <Col md={12}>
                            <Label>Description English</Label>
                            <Input type="textarea" name="text" id="exampleText" />
                        </Col>
                        <Col md={12}>
                            <Label>Description Portuguese</Label>
                            <Input type="textarea" name="text" id="exampleText" />
                        </Col>
                        <Col md={12}>
                            <Label>Clauses validity</Label>
                            <Input type="select" name="select" id="exampleSelect">
                                <option>1</option>
                                <option>2</option>
                            </Input>
                        </Col>
                        <Col md={12}>
                            <Label>Description Clauses validity</Label>
                            <Input type="textarea" name="text" id="exampleText" />
                        </Col>
                    </Row>
                </CardBody>
            </Card>
        </>
    );
}

export default ClausesTA;
