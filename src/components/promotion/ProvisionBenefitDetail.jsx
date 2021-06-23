/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/
import React from "react";
import { Button } from '../index'
import { Card, CardBody, CardTitle, Label, Input, Col, Row } from 'reactstrap';

function ProvisionBenefitDetail() {
    
    return (
        <>
            <Card>
                <CardBody>
                    <CardTitle tag="h5">Provision Benefit</CardTitle>
                    <Row>
                        <Col md={6}>
                            <Label>Provision</Label>
                            <Input type="text" />
                        </Col>
                        <Col md={6}>
                            <Label></Label>
                            <Input type="select" name="select" id="exampleSelect" sm={4}>
                                <option>1</option>
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
                        <Col md={6}>
                            <Label>Quantity</Label>
                            <Input type="number" />
                        </Col>
                        <Col md={6}>
                            <Label>Validity</Label>
                            <Input type="number" />
                        </Col>
                    </Row>

                    <div className="d-flex justify-content-end">
                        <Button col={2}
                            typebootstrap="primary "
                            type="submit"
                            title="Save" />
                        <Button col={2}
                            typebootstrap="secondary"
                            type="button"
                            title="Cancel"
                        />
                    </div>
                </CardBody>
            </Card>
        </>
    );
}

export default ProvisionBenefitDetail;