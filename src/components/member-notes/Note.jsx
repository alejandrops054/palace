import React from 'react'
import {Form, Input, Row, Col, FormGroup, Label, Button } from 'reactstrap'


const Note = () =>{
    return(
        <>
            <h1>Note</h1>
            <Form>
                <Row>
                    <Col md={4}>
                        <FormGroup>
                            <Label>Code</Label>
                            <Input type='select' style={{width:'40%'}}/>
                        </FormGroup>
                    </Col>
                    <Col md={6}>
                        <FormGroup>
                            <Label>Lavel</Label>
                            <Input type="select" style={{width:'40%'}}/>
                        </FormGroup>
                    </Col>
                </Row>
                <Label>Auth</Label>
                <Input type='select' style={{width:'60%'}}/>
                <Label>Note</Label>
                <Input type='textarea' style={{width:'60%'}}/>
                <Row>
                    <Col md={4}>
                        <FormGroup>
                            <Label>Priority</Label>
                            <Input type='select' style={{width:'40%'}}/>
                        </FormGroup>
                    </Col>
                    <Col md={6}>
                        <FormGroup style={{padding:'4%'}}>
                            <Input type="checkbox"/>{' '}
                            <Label>Special</Label>
                        </FormGroup>
                    </Col>
                </Row>
                <FormGroup>
                    <Col sm={{ size: 10, offset: 10 }}>
                        <Button color="primary">Save</Button>{' '}
                        <Button color='primary'>Cancel</Button>{' '}
                        <Button color="secondary" >Close</Button>
                    </Col>
                </FormGroup>
            </Form>
        </>
    )
}

export default Note