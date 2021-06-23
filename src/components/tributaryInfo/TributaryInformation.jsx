import React, { useState } from 'react'
import { Modal, Form, Card, Input, Row, Col, Label } from 'reactstrap'
import { Button } from '../index'

const TributaryInfo = () =>{

    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    return(
        <>
        <button onClick={() => toggle()} type="button" className="input-group-addon btn btn-secondary" style={{borderBottomRightRadius:'.3rem', borderTopRightRadius:'.3rem'}}><i className="fas fa-plus"></i></button>
        <Modal isOpen={modal} toggle={toggle} size="lg">
            <Card>
                <h2>Tributary Information</h2>
                <Form>
                    <Row>
                        <Col lg={12}>
                            <Label>NSS</Label>
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

export default TributaryInfo