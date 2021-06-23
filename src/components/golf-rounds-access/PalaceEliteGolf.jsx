import React from 'react'
import {Form, Input, Row, Col, FormGroup, Label, Button } from 'reactstrap'

const PalaceEliteGolf = () => {
    return (
        <>
            <Form>
                <h1>Palace Elite Golf</h1>
                <Row>
                    <Col>
                        <Label>Currency</Label>
                        <Input type='select'/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Label>Code</Label>
                        <Input type='number'/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Label>Price</Label>
                        <Input type='number'/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Label>Rounds of Golf </Label>
                        <Input type='number'/>
                    </Col>
                </Row>
            </Form>
        </>
    )
}

export default PalaceEliteGolf