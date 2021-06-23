/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/
import React from "react";
import { Label, Col, Row, Input, Button } from 'reactstrap';
function CreateBenefitType() {
    return (
        <>
            <Row>
                <Col md={6}>
                    <Label>Company name</Label>
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
                    <Label>Validation Type</Label>
                    <Input type="select" name="select" id="exampleSelect">
                        <option>1</option>
                        <option>2</option>
                    </Input>
                </Col>
                <Col md={6}>
                    <Label>Validator system</Label>
                    <Input type="select" name="select" id="exampleSelect">
                        <option>1</option>
                        <option>2</option>
                    </Input>
                </Col>
                <Col md={6}>
                    <Label>Description</Label>
                    <Input type="textarea" name="text" id="exampleText" />
                </Col>
                <Col md={6}>
                    <Label>Status</Label>
                    <Input type="select" name="select" id="exampleSelect">
                        <option>1</option>
                        <option>2</option>
                    </Input>
                </Col>
                <Col sm={{ size: 10, offset: 10 }}>
                    <Button>Create</Button>
                </Col>
            </Row>
        </>
    );
}

export default CreateBenefitType;