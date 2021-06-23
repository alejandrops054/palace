import React from 'react'
import {  Form, FormGroup, Row, Label, Input, Col } from 'reactstrap';

const DataProvInfo = () => {
    return(
        <>
            <Form>
                <Row>
                    <Col md={6}>
                        <Label>Code</Label>
                        <Input type='number'/>
                    </Col>
                    <Col md={6}>
                        <Label>Name</Label>
                        <Input type='text'/>
                    </Col>
                </Row>
                <Row>
                    <Label>Category</Label>
                    <Input type='select'/>
                </Row>
            </Form>
        </>
    )
}

export default DataProvInfo