/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/
import React from 'react';
import { Button, AddresInvoicing } from '../index'
import { Card, Input, Row, Col, Label, Form } from 'reactstrap'

const InvoicingInfo = () => {
    return (
        <>
            <Card>
                <Form>
                    <Row>
                        <Col lg='12'>
                            <Label>Bussines name</Label>
                            <Input type='text'/>
                        </Col>
                    </Row>
                    <br/>
                    <Row>
                        <Col lg='6'>
                            <Label>Email</Label>
                            <Input type='email'/>
                        </Col>
                        <Col lg='6'>
                            <Label>RFC</Label>
                            <Input type='text'/>
                        </Col>
                    </Row>
                    <br/>
                    <Row>
                        <h5>Address</h5>
                        <Col>
                            <Label>Street</Label>
                            <Input type='text'/>
                        </Col>
                    </Row>
                    <br/>
                    <Row>
                        <Col lg='3'>
                            <Label>Ext. Number</Label>
                            <Input type='text'/>
                        </Col>
                        <Col lg='3'>
                            <Label>Int. Number</Label>
                            <Input type='text'/>
                        </Col>
                        <Col lg='6'>
                            <Label>Area</Label>
                            <Input type='select'/>
                        </Col>
                    </Row>
                    <br/>
                    <Row>
                        <Col lg='6'>
                            <Label>Country</Label>
                            <Input type='select'/>
                        </Col>
                        <Col lg='6'>
                            <Label>State</Label>
                            <Input type='select'/>
                        </Col>
                    </Row>
                    <br/>
                    <Row>
                        <Col lg='3'>
                            <Label>Ext. Number</Label>
                            <Input type='text'/>
                        </Col>
                        <Col lg='3'></Col>
                        <Col lg='6' style={{paddingTop:'2.5%'}}>
                            <Label>
                            <Input type='checkbox'/>{' '}
                                Sale processed
                            </Label>
                        </Col>
                    </Row>
                    <br/>
                    <Row>
                        <h5>Reference</h5>
                        <Col>
                            <Label>Reference</Label>
                            <Input type='text'/>
                        </Col>
                    </Row>
                </Form>
            </Card>
        </>
    )
}

export default InvoicingInfo;


