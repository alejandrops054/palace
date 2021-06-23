import React from 'react'
import {Form, Input, Row, Col, FormGroup, Label, Button } from 'reactstrap'


const ReportSalesCancellation = () =>{
    return(
        <>
            <h1>Reports Barclays</h1>
            <Form>
                <FormGroup>
                    <h6>Date</h6>
                    <Row>
                        <Col md={6}>
                            <Label>Start date</Label>
                            <Input type='date'/>
                        </Col>
                        <Col md={6}>
                            <Label>End date</Label>
                            <Input type='date'/>
                        </Col>
                    </Row>
                    </FormGroup>
                    <FormGroup>
                    <h6>Project and office</h6>
                    <Row>
                        <Col md={4}>
                            <Label>Project</Label>
                            <Input type='number'/>
                        </Col>
                        <Col md={8}>
                            <Label>.</Label>
                            <Input type='select'/>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={4}>
                            <Label>Office</Label>
                            <Input type='number'/>
                        </Col>
                        <Col md={8}>
                            <Label>.</Label>
                            <Input type='select'/>
                        </Col>
                    </Row>
                </FormGroup>
                <FormGroup style={{paddingTop:'5%'}}>
                    <Col sm={{ size: 10, offset: 10 }}>
                        <Button color="primary">Print</Button>
                    </Col>
                </FormGroup>
               
            </Form>
        </>
    )
}

export default ReportSalesCancellation