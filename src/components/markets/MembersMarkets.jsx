import React from 'react'
import {Form, Input, Row, Col, FormGroup, Label, Button, Table } from 'reactstrap'


const MembersMarkets = () =>{
    return(
        <>
            <h1>Member Markets</h1>
            <Form>
                <h6>Member Information</h6>
                <Label>Member Name</Label>
                <Input type='text' style={{width:'40%'}}/>
                <Row>
                    <Col md={3}>
                        <FormGroup>
                            <Label>Company</Label>
                            <Input type='number' style={{width:'30%'}}/>
                        </FormGroup>
                    </Col>
                    <Col md={3}>
                        <FormGroup>
                            <Label>Application</Label>
                            <Input type="number" style={{width:'30%'}}/>
                        </FormGroup>
                    </Col>
                    <Col md={6}>
                        <FormGroup>
                            <Label>Markets Combination</Label>
                            <Input type='select'  style={{width:'30%'}}/>
                        </FormGroup>  
                    </Col>
                </Row>
                <Row>
                    <FormGroup>
                        <Table striped>
                            <thead>
                                <tr>
                                    <th>Code</th>
                                    <th>Description</th>
                                    <th>Selected</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>CANADA</td>
                                    <td>Canada</td>
                                    <td><Input type='checkbox'/></td>
                                </tr>
                            </tbody>
                        </Table>
                    </FormGroup>
                </Row>
                <FormGroup>
                    <Col sm={{ size: 10, offset: 10 }}>
                        <Button color="primary">Save changes</Button>{' '}
                        <Button color='primary'>Close</Button>
                    </Col>
                </FormGroup>
            </Form>
        </>
    )
}

export default MembersMarkets