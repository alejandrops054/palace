import React from 'react'

import {Form, Input, Row, Col, FormGroup, Label, Button } from 'reactstrap'

const Participants = () =>{
    return(
        <div>
            <h1>Participants</h1>
            <Form>
                <Row>
                    <Col md={3}>
                        <FormGroup>
                            <Label>Id</Label>
                            <Input type='text' style={{width:'40%'}}/>
                        </FormGroup>
                    </Col>
                    <Col md={3}>
                        <FormGroup>
                            <Label>Status</Label>
                            <Input type="select" style={{width:'40%'}}/>
                        </FormGroup>
                    </Col>
                    <Col md={6}>
                        <FormGroup style={{padding:'4%'}}>
                            <Input type='checkbox'/>
                            <Label>Show in Artachment A</Label>
                        </FormGroup>  
                    </Col>
                </Row>
                <FormGroup>
                    <Label>Name</Label>
                    <Input type='text'/>
                    <Label>RFC</Label>
                    <Input type='text'/>
                </FormGroup>
                <FormGroup>
                    <Col  sm={{ size: 10, offset: 10 }}>
                        <Button color='primary'><i className="fas fa-copy"></i>{' '}Copy Address From Owner</Button>
                    </Col>
                    <Label>Address</Label>
                    <Input type='text'/>
                </FormGroup>
                <Row>
                    <Col md={3}>
                            <Label>City</Label>
                            <Input type='select'/>
                    </Col>
                    <Col md={3}>
                            <Label>State</Label>
                            <Input type='text'/>
                    </Col>
                </Row>
                <Row>
                    <Col md={3}>
                            <Label>Home phone</Label>
                            <Input type='select'/>
                    </Col>
                    <Col md={3}>
                            <Label>Country</Label>
                            <Input type='text'/>
                    </Col>
                </Row>
                <Row>
                    <Col md={3}>
                            <Label>Cell phone</Label>
                            <Input type='select'/>
                    </Col>
                    <Col md={3}>
                            <Label>Nationality</Label>
                            <Input type='select'/>
                    </Col>
                </Row>
                <Row>
                    <Col md={3}>
                            <Label>Office phone</Label>
                            <Input type='select'/>
                    </Col>
                    <Col md={3}>
                            <Label>Zip</Label>
                            <Input type='text'/>
                    </Col>
                </Row>
                <FormGroup>
                    <Col sm={{ size: 10, offset: 10 }}>
                        <Button color="primary">Save</Button>{' '}
                        <Button color='primary'>Close</Button>
                    </Col>
                </FormGroup>
            </Form>
        </div>
    )
}

export default Participants