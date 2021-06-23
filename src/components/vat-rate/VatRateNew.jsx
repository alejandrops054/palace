/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/

import React from "react";
import { Card, Row, Col, Form, Input, Label } from 'reactstrap'
import Hr from "../ui/Hr";
import VatRateCoOwnerIdentifications from "../vat-rate-coOwner/components/VatRateCoOwnerIdentifications";
import VatRateCoOwnerReasons from "../vat-rate-coOwner/components/VatRateCoOwnerReasons";
import RcTable from "../vat-rate-coOwner/RcTable";
import VatRateGroup from './VatRateGroup'




const VatRateNew = () =>{
    return(
        <Card>
            <Form>
                <Row>
                    <Col lg='4'>
                        <Label>Value-Added Tax ( % )</Label>
                        <Input type='select'/>
                    </Col>
                    <Col lg='2' style={{paddingTop:'2.5%'}}>
                        <Label>
                            <Input type='checkbox'/>{' '}
                            Pay comission
                        </Label>
                    </Col>
                    <Col lg='2' style={{paddingTop:'2.5%'}}>
                        <Label>
                            <Input type='checkbox'/>{' '}
                            Requested invoice
                        </Label>
                    </Col>
                    <Col lg='2' style={{paddingTop:'2.5%'}}>
                        <Label>
                            <Input type='checkbox'/>{' '}
                            In house
                        </Label>
                    </Col>
                    <Col lg='2' style={{paddingTop:'2.5%'}}>
                        <Label>
                            <Input type='checkbox'/>{' '}
                            Out house
                        </Label>                   
                    </Col>
                </Row>
                <br/>
                <Row>
                    <Col md={3}>
                        <Label>Downgrade type</Label>
                        <Input type="select" />
                    </Col>
                    <Col md={3}>
                        <Label>Portafolio</Label>
                        <Input type="text" />
                    </Col>
                    <Col md={3}>
                        <Label>Pruchase date</Label>
                        <Input type="date" />
                    </Col>
                    <Col md={3}>
                        <Label>Last change</Label>
                        <Input type="date" />
                    </Col>
                </Row>
            </Form>
                <br/>
                <br/>
                <Card>
                    <VatRateGroup/>
                </Card>
                <br/>
                <br/>
                <Card>
                    <RcTable/>
                </Card>
                <br/>
                <br/>
                <Hr/>
                <Card>
                    <VatRateCoOwnerIdentifications/>
                </Card>
                <br/>
                <br/>
                <Hr/>
                <Card>
                    <VatRateCoOwnerReasons/>
                </Card>
        </Card>

    )
}

export default VatRateNew