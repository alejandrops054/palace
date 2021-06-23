/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos 
*/

import React from "react";
import { ToggleCheck } from '../index'
import {  Form, Label, Input, Row, Col, Card } from 'reactstrap';

const HotelReservation = () => {
    return(
        <Card>
            <h3>Hotel Reservation and Move In</h3>
            <Form>
                <Row>
                    <Col lg='4'>
                        <ToggleCheck label='Week 52' numToggle={1}/>
                    </Col>
                </Row>
                <br/>
                <Row>
                    <Col lg='6'>
                        <Label>Hotel</Label>
                        <Input type='text'/>
                    </Col>
                    <Col lg='6'>
                        <Label>Room</Label>
                        <Input type='text'/>
                    </Col>
                </Row>
                <br/>
                <Row>
                    <Col lg='4'>
                        <Label>Quantity</Label>
                        <Input type='text'/>
                    </Col>
                    <Col lg='4'>
                        <Label>Folio #</Label>
                        <Input type='text'/>
                    </Col>
                    <Col lg='4'>
                        <Label>Packages</Label>
                        <Input type='text'/>
                    </Col>
                </Row>
            </Form>
        </Card>
    )
}

export default HotelReservation