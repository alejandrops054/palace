/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/
import React, { useState } from 'react'
import {
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    CardBody,
    Row,
    Col,
    TabPane,
    Form,
    Button,
    Table,
    Checkbox,
    Input,
    Label,
    Card
} from 'reactstrap'
import { Select } from "../index";

//Sweet Alerrt
import SweetAlert from 'react-bootstrap-sweetalert';


const EliteProductsInfo = () => {

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);
    const [warningAlert, setWarningAlert] = useState(false);
    const [authAlert, setAuthAlert] = useState(false);

    return (
        <>
            <SweetAlert
                custom
                customIcon={<i className="far fa-question-circle fa-6x" style={{ color: '#66A3EC', height: 110 }}></i>}
                title={`Do you wish to continue?`}
                show={warningAlert}
                customButtons={
                    <>
                        <Row md={5}>
                            <Col lg="6">
                                <Button
                                    variant="secondary"
                                    size="lg"
                                    className="fa fa-times"
                                    onClick={() => { setWarningAlert(false) }}
                                ></Button>
                            </Col>
                            <Col lg="6">
                                <Button
                                    variant="primary"
                                    size="lg"
                                    className="fa fa-check"
                                    onClick={() => { setAuthAlert(true); setWarningAlert(false); }}
                                ></Button>
                            </Col>
                        </Row>
                    </>
                }
            >
                <Card className="" style={{ textAlign: 'left' }}>
                    <Row>
                        <Label>It is not allowed to grant the option of "Free unlimited golf" at any level of membership.</Label>
                        <br />
                        <br />
                        <Label>Keep in contact with:</Label>
                        <br />
                        <br />
                        <Label>William Torres</Label>
                    </Row>

                </Card>

            </SweetAlert>
            <SweetAlert
                custom
                customIcon={<i className="fas fa-lock fa-6x" style={{ color: '#66A3EC', height: 110 }}></i>}
                title={`Authentication Necessary`}
                show={authAlert}
                customButtons={
                    <>
                        <Row md={5}>
                            <Col lg="6">
                                <Button
                                    variant="secondary"
                                    size="lg"
                                    className="fa fa-times"
                                    onClick={() => { setWarningAlert(false); setAuthAlert(false); }}
                                ></Button>
                            </Col>
                            <Col lg="6">
                                <Button
                                    variant="primary"
                                    size="lg"
                                    className="fa fa-check"
                                    onClick={() => { setAuthAlert(false) }}
                                ></Button>
                            </Col>
                        </Row>
                    </>
                }
            >
                <Card>
                    <Form style={{ textAlign: 'left' }}>
                        <p>The operation that was trying to do requires permission</p>
                        <Row>
                            <Col md={12}>
                                <Label for="userName">User Name</Label>
                                <Input type="text" name="name" id='userName' />
                            </Col>
                        </Row>
                        <br />
                        <Row>
                            <Col md={6}>
                                <Label for="sendNote">
                                    <Input type="checkbox" name="check" id="sendNote" />{' '}
                    Send note
                  </Label>
                            </Col>
                        </Row>
                        <br />
                        <Row>
                            <Col md={12}>
                                <Label for="password">Password</Label>
                                <Input type="password" name="password" id="password" />
                            </Col>
                        </Row>
                        <br />
                        <Row>
                            <Col md={12}>
                                <Label for="level">Level</Label>
                                <Input type='select' option={[]} />
                            </Col>
                        </Row>
                        <br />
                        <Row>
                            <Col md={12}>
                                <Label for="authorized">Authorized by:</Label>
                                <Input type='select' option={[]} />
                            </Col>
                        </Row>
                        <br />
                        <Row>
                            <Col md={12}>
                                <Label for="description">Description</Label>
                                <Input type='textarea' name='text' />
                            </Col>
                        </Row>
                    </Form>
                </Card>
            </SweetAlert>

            <button type="button" className="btn btn-secondary my-4 ml-3" onClick={toggle}>Elite products</button>
            <Modal isOpen={modal} toggle={toggle} size='lg'>
                <ModalHeader><h1>Elite Products Information</h1></ModalHeader>
                <ModalBody>
                    <Form>
                        <Row>
                            <h5>Breakdown weeks and nigths</h5>
                            <Col lg='3'>
                                <Select label='Total weeks' />
                            </Col>
                            <Col lg='3'>
                                <Select label='Nigths ( % )' />
                            </Col>
                            <Col lg='3'>
                                <Select label='Elite weeks' />
                            </Col>
                            <Col lg='3'>
                                <Select label='Elite nigths' />
                            </Col>
                        </Row>
                        <Row>
                            <Col md={6}>
                                <Row>
                                    <h5>All inclusive</h5>
                                    <Col lg='6'>
                                        <Select label='Weeks' />
                                    </Col>
                                    <Col lg='6'>
                                        <Select label='Nigths' />
                                    </Col>
                                </Row>
                            </Col>
                            <Col md={6}>
                                <Row>
                                    <h5>Include Unlimited Golf pay</h5>
                                    <Col lg='6'>
                                        <Select label='Weeks' />
                                    </Col>
                                    <Col lg='6'>
                                        <Select label='Nigths' />
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                        <Row>
                            <h5>Include Unlimited Golf Free</h5>
                            <Col lg='3'>
                                <Select label='Weeks' />
                            </Col>
                            <Col lg='3'>
                                <Select label='Nigths' />
                            </Col>
                        </Row>
                        <br />
                        <Row md={5}>
                            <Col lg="6"></Col>
                            <Button
                                variant="secondary"
                                size="lg"
                                className="fa fa-times"
                                onClick={() => toggle()}
                            ></Button>
                            <br />
                            <Button
                                variant="primary"
                                size="lg"
                                className="fa fa-check"
                                onClick={() => setWarningAlert(true)}
                            ></Button>
                        </Row>
                    </Form>
                </ModalBody>
            </Modal>
        </>
    )
}

export default EliteProductsInfo