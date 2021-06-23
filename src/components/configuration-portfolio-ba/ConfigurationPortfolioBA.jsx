/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/

import React from 'react';
import { Button } from "../index";
import { Label, Input, Row, Col, Card, CardBody, CardTitle } from 'reactstrap';
import TableBA from './TableBA'
const ConfigurationPortfolioBA = () => {

    return (
        <Card>
            <CardBody>
                <CardTitle tag="h5">Configuration Portfolio Bank Accounts</CardTitle>
                <Row>
                    <Col sm="4">
                        <Label>Merchant code</Label>
                        <Input type="text" />
                    </Col>
                    <Col sm="4">
                        <Label>Account</Label>
                        <Input type="text" />
                    </Col>
                    <Col sm="4">
                        <Label>Transaction Type</Label>
                        <Input type="select" name="select" id="exampleSelect">
                            <option>1</option>
                            <option>2</option>
                        </Input>
                    </Col>
                    <Col sm="3">
                        <Label>Portfolio</Label>
                        <Input type="text" />
                    </Col>
                    <Col sm="3">
                        <Label>Room</Label>
                        <Input type="text" />
                    </Col>
                    <Col sm="3">
                        <Label>Currency</Label>
                        <Input type="select" name="select" id="exampleSelect">
                            <option>CAD</option>
                            <option>2</option>
                        </Input>
                    </Col>
                    <Col sm="3">
                        <Label>Status</Label>
                        <Input type="select" name="select" id="exampleSelect">
                            <option>Alta</option>
                            <option>2</option>
                        </Input>
                    </Col>
                    <Col sm="3">
                        <Button icon="fas fa-search" typebootstrap="primary" title="Apply filter" />
                    </Col>
                    <Col sm="3">
                        <Button icon="fas fa-search" typebootstrap="secundary" title="Clear filter" />
                    </Col>
                </Row>
                <TableBA />

            </CardBody>
        </Card>
    );
};

export default ConfigurationPortfolioBA;
