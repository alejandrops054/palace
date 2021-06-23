import React from 'react'
import { Form,  Label, Col, Row, Input, Button } from 'reactstrap';

const InfoMemberPromotions = () =>{
    return (
        <>
            <Form>
                <Row>
                    <Col md={6}>
                        <Label>Member Name</Label>
                        <Input type='text'/>
                    </Col>
                </Row>
                <Row>
                    <Col md={3}>
                        <Label>Company</Label>
                        <Input type='number' />
                    </Col>
                    <Col md={3}>
                        <Label>Application</Label>
                        <Input type='number' />
                    </Col>
                    <Col md={3}>
                        <Label>Refferal Scheme</Label>
                        <Input type='select' />
                    </Col>
                    <Col md={3}>
                        <Label>Stay Minimun</Label><br/>
                        <Input type='checkbox' />
                    </Col>
                </Row>
            </Form>
        </>
    )
}

export default InfoMemberPromotions