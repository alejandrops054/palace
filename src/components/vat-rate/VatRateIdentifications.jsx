import React, { useState } from 'react'
import { Modal, Card, Row, Col, Form, Input, Label } from 'reactstrap'
import PhoneInput from 'react-phone-number-input'
import { Button } from '../index'
import ModalGeographicLocation  from '../newgeographic-location/ModalGeographicLocation';
import ModalHomePhone from './ModalHomePhone';

const VatRateIdentifications = () =>{

const [modal, setModal] = useState(false);
const toggle = () => setModal(!modal);

const handleInputChange= e =>{
    setDefaultData({
      ...defaultData,
      [e.target.name]: e.target.value
    })
  }

    return(
        <>
            <button id="consult" className="btn btn-link main" type="button" onClick={toggle}><i className="fas fa-plus"></i>{' '}Add Participants</button>
            <Modal isOpen={modal} toggle={toggle} size='lg'>
                <Card>
                <h2>Participants</h2>
                    <Form>
                        <Row>
                            <Col lg='3'>
                                <Label>ID</Label>
                                <Input type='text'/>
                            </Col>
                            <Col lg='3'>
                                <Label>Status</Label>
                                <Input type='slect'/>
                            </Col>
                            <Col lg='6'>
                                <Label>NSS</Label>
                                <Input type='text'/>
                            </Col>
                        </Row>
                        <br/>
                        <Row>
                            <Col>
                                <Label>Adress</Label>
                                <Input type='textarea'/>
                            </Col>
                        </Row>
                        <br/>
                        <Row>
                            <Col lg='6'>
                                <Label>City</Label>
                                <div className="input-group">
                                    <input onChange={handleInputChange} type="text" className='form-control'/>
                                    <ModalGeographicLocation/>
                                </div>
                            </Col>
                            <Col lg='6'>
                                <Label>Status</Label>
                                <Input type='text'/>
                            </Col>
                        </Row>
                        <br/>
                        <Row>
                            <Col lg='6'>
                                <Label>Home phone</Label>
                                <PhoneInput
                                    international
                                    placeholder=""
                                />
                                {/* <Label>Phone home</Label>
                                <div className="input-group">
                                    <input onChange={handleInputChange} type="text" className='form-control'/>
                                    <ModalHomePhone />
                                </div> */}
                            </Col>
                            <Col lg='6'>
                                <Label>Country</Label>
                                <Input type='text'/>
                            </Col>
                        </Row>
                        <br/>
                        <Row>
                            <Col lg='6'>
                                <Label>Cell phone</Label>
                                <PhoneInput
                                    international
                                    placeholder=""
                                />
                                {/* <div className="input-group">
                                    <input onChange={handleInputChange} type="text" className='form-control'/>
                                    <ModalHomePhone />
                                </div> */}
                            </Col>
                            <Col lg='6'>
                                <Label>Nationality</Label>
                                <Input type='select'/>
                            </Col>
                        </Row>
                        <br/>
                        <Row>
                            <Col lg='6'>
                                <Label>Office phone</Label>
                                <PhoneInput
                                    international
                                    placeholder=""
                                />
                                {/* <div className="input-group">
                                    <input onChange={handleInputChange} type="text" className='form-control'/>
                                    <ModalHomePhone />
                                </div> */}
                            </Col>
                            <Col lg='6'>
                                <Label>Zip</Label>
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

export default VatRateIdentifications