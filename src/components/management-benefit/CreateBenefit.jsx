/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/
import React from "react";
import { Label, Col, Row, Input, Button } from 'reactstrap';
function CreateBenefit() {
    return (
        <>
            <Row>
                <Col md={6}>
                    <Label>Benefit type</Label>
                    <Input type="select" name="select" id="exampleSelect">
                        <option>1</option>
                        <option>2</option>
                    </Input>
                </Col>
                <Col md={6}>
                    <Label>Descripcion</Label>
                    <Input type="textarea" name="text" id="exampleText" />
                </Col>
                <Col md={6}>
                    <Label>Identifier</Label>
                    <Input type="text" />
                </Col>
                <Col md={6}>
                    <Label>Estado</Label>
                    <Input type="select" name="select" id="exampleSelect">
                        <option>1</option>
                        <option>2</option>
                    </Input>
                </Col>
                <Col md={3}>
                    <Label check>
                        <Input type="checkbox" /> authorization is required?
                    </Label>
                </Col>
                <Col sm={{ size: 10, offset: 10 }}>
                    <Button>Crear</Button>
                </Col>
            </Row>
        </>
    );
}

export default CreateBenefit;