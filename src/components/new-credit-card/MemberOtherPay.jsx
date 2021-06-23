/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/

import React,{ useState } from 'react'

import {Button, } from '../index'
import { Modal, Card, Row, Col, Form, Label, Input } from 'reactstrap'


const MemberOtherPay = () => {

    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    return(
        <>
            <button id="consult" className="btn btn-link" type="button" onClick={toggle}><i class="fas fa-plus"></i>{' '}Add</button>
            <Modal isOpen={modal} toggle={toggle} size='lg'>
                <Card>
                    <h1>Member Other Payments Ways</h1>
                    <Form>
                        <Row>
                            <Col lg="6">
                                <Label>Type</Label>
                                <Input type='select'/>
                            </Col>
                            <Col lg='6'>
                                <Label>Relationship</Label>
                                <Input type='select'/>
                            </Col>
                        </Row>
                        <br/>
                        <Row>
                            <Col lg="6">
                                <Label>NSS</Label>
                                <Input type='text'/>
                            </Col>
                            <Col lg='6'>
                                <Label>Concept</Label>
                                <Input type='select'/>
                            </Col>
                        </Row>
                        <br/>
                        <Row>
                            <Col lg="6">
                                <Label>Voucher</Label>
                                <Input type='text'/>
                            </Col>
                            <Col lg='6'>
                                <Label></Label>
                                <Input type='text'/>
                            </Col>
                        </Row>
                        <br/>
                        <Row>
                            <Col lg="6">
                                <Label>Folio check</Label>
                                <Input type='text'/>
                            </Col>
                            <Col lg='6'>
                                <Label>Bank</Label>
                                <Input type='text'/>
                            </Col>
                        </Row>
                        <br/>
                        <Row md={5}>
                            <Col lg="6"></Col>
                                <Button
                                    icon="fas fa-times"
                                    typebootstrap="secondary"
                                    width='100%'
                                    type="button"    
                                />
                                <Button
                                    icon="fas fa-check"
                                    typebootstrap="primary "
                                    type="button"
                                    width='100%'
                                />
                        </Row>
                    </Form>
                </Card>
            </Modal>
        </>
    )
}

export default MemberOtherPay