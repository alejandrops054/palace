/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos 
*/

import React from "react";
import {  Form, Label, Input, Row, Col, Card } from 'reactstrap';

const Golf50 = () => {
    return(
        <Card>
            <h3>Golf @ 50%</h3>
            <Form>
                <h6>Round Of Golf</h6>
                <Row>
                    <Col lg='4'>
                        <Label>Total</Label>
                        <Input type='text'/>
                    </Col>
                    <Col lg='4'>
                        <Label>Actual</Label>
                        <Input type='text'/>
                    </Col>
                    <Col lg='4'>
                        <Label>Previous</Label>
                        <Input type='text'/>
                    </Col>
                </Row>
                <br/>
                <h6>Round Golf Access</h6>
                <Row>
                    <Col lg='4'>
                        <Label>Total</Label>
                        <Input type='text'/>
                    </Col>
                    <Col lg='4'>
                        <Label>Actual</Label>
                        <Input type='text'/>
                    </Col>
                    <Col lg='4'>
                        <Label>Previous</Label>
                        <Input type='text'/>
                    </Col>
                </Row>
            </Form>
        </Card>
    )
}

export default Golf50