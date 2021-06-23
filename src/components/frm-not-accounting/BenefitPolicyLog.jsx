/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/

import React from 'react';
import { Button } from "../index";
import { FormGroup, Label, Input, Row, Col, Card, CardBody, CardTitle } from 'reactstrap';
import TableConsecutive from './TableConsecutive'
import TableSuccess from './TableSuccess'
const BenefitPolicyLog = () => {

    return (
        <>
            <Card>
                <CardBody>
                    <CardTitle tag="h5">Benefit Policy Log</CardTitle>
                    <Row>
                        <Col sm="3">
                            <Label>From</Label>
                            <Input type="date" />
                        </Col>
                        <Col sm="3">
                            <Label>To</Label>
                            <Input type="date" />
                        </Col>
                        <Col sm="3">
                            <Label>Policy Code</Label>
                            <Input type="text" />
                        </Col>
                        <Col sm="3">
                            <FormGroup check>
                                <Label check>
                                    <Input type="radio" name="radio1" />
                            All
                        </Label>
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="radio" name="radio1" />
                            Only Success
                        </Label>
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="radio" name="radio1" />
                            Only Errors
                        </Label>
                            </FormGroup>
                        </Col>
                        <Col sm="4">
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" />
                                 Search by Policy Date
                            </Label>
                            </FormGroup>
                        </Col>
                        <Col sm="3">
                            <Button icon="fas fa-search" typebootstrap="primary" title="Search" />
                        </Col>
                        <Col sm="3">
                            <Button icon="fas fa-search" typebootstrap="secundary" title="Show XML" />
                        </Col>
                    </Row>
                    <TableSuccess />
                    <TableConsecutive />
                </CardBody>
            </Card>
        </>
    );
};

export default BenefitPolicyLog;