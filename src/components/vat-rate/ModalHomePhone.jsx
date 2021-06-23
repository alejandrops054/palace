import React, {useState} from 'react'
import { Modal, ModalBody, Form, Card, Input, Label, Row, Col } from 'reactstrap'
import { Button } from '../index'

const ModalHomePhone = () =>{

    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    return (
        <>
            <button onClick={() => toggle()} type="button" className="input-group-addon btn btn-secondary" style={{ borderBottomRightRadius: ".3rem", borderTopRightRadius: ".3rem", }}>
                <i className="fas fa-phone"></i>
            </button>
            <Modal isOpen={modal} toggle={toggle} size='lg'>
                <Card>
                    <h2>Home phone</h2>
                    <Form>
                        <Row>
                            <Col lg='6'>
                                <Label>Country code</Label>
                                <Input type='text'/>
                            </Col>
                            <Col lg='6'>
                                <Label>Area Code</Label>
                                <Input type='text'/>
                            </Col>
                        </Row>
                        <br/>
                        <Row>
                            <Col lg='6'>
                                <Label>Current Home phone</Label>
                                <Input type='text'/>
                            </Col>
                            <Col lg='6'>
                                <Label>Home phone</Label>
                                <Input type='text'/>
                            </Col>
                        </Row>
                        <br/>
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

export default ModalHomePhone