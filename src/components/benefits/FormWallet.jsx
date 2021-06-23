import React from 'react';
import { Card, Row, Col, Label, Input } from 'reactstrap';

const FormWallet = () => {
    return (
        <>
            <Card>
                <Row>
                    <Col md={12}>
                        <Label>Product</Label>
                        <Input type="text" />
                    </Col>
                </Row>
                <Row>
                    <Col md={4}>
                        <Label>Movements</Label>
                        <Input type="select" name="select" id="exampleSelect">
                            <option>1</option>
                            <option>2</option>
                        </Input>
                    </Col>
                    <Col md={4}>
                        <Label>Release</Label>
                        <Input type="text" name="text" id="exampleText" />
                    </Col>
                    <Col md={4}>
                        <Label>Expiration</Label>
                        <Input type="select" name="select" id="exampleSelect">
                            <option>1</option>
                            <option>2</option>
                        </Input>
                    </Col>
                </Row>
                <Row>
                    <Col md={4}>
                        <Label>Amount</Label>
                        <Input type="number" />
                    </Col>
                    <Col md={4}>
                        <Label>Payments</Label>
                        <Input type="number" />
                    </Col>
                    <Col md={4}>
                        <Label>Financing</Label>
                        <Input type="select" name="select" id="exampleSelect">
                            <option>1</option>
                            <option>2</option>
                        </Input>
                    </Col>
                </Row>
            </Card>

        </>
    )
}

export default FormWallet