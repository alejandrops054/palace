/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos 
*/

import React from "react";
import {  Form, Label, Input, Row, Col, Card } from 'reactstrap';

const AirCupons = () => {
    return(
        <Card>
            <h3>Air Cupons</h3>
            <Form>
                <Row>
                    <Col lg='12'>
                        <Label>Area</Label>
                        <Input type='select'/>
                    </Col>
                </Row>
                <Row>
                    <Col lg='6'>
                        <Label>Price</Label>
                        <Input type='text'/>
                    </Col>
                    <Col lg='6'>
                        <Label>Quantity</Label>
                        <Input type='text'/>
                    </Col>
                </Row>
            </Form>
        </Card>
    )
}

export default AirCupons