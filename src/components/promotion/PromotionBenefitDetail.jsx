/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/
import React from "react";
import { Button } from '../index'
import { Card, CardBody, CardTitle, Label, Input, Col, Row } from 'reactstrap';

function PromotionBenefitDetail() {
    
    return (
        <>
            <Card>
                <CardBody>
                    <CardTitle tag="h5">Promotion Benefit</CardTitle>
                    <Row>
                        <Col md={6}>
                            <Label>Id</Label>
                            <Input type="text" />
                        </Col>
                        <Col md={6}>
                            <Label>Market</Label>
                            <Input type="select" name="select" id="exampleSelect">
                                <option>1</option>
                                <option>2</option>
                            </Input>
                        </Col>
                        <Col md={6}>
                            <Label>Market defined stay</Label>
                            <Input type="text" />
                        </Col>
                        <Col md={6}>
                            <Label>Referral regular stay</Label>
                            <Input type="text" />
                        </Col>
                        <Col md={6}>
                            <Label>Bonu Stay / Universal Credit</Label>
                            <Input type="text" />
                        </Col>
                        <Col md={6}>
                            <Label>Benefit to be award</Label>
                            <Input type="select" name="select" id="exampleSelect">
                                <option>1</option>
                                <option>2</option>
                            </Input>
                        </Col>
                        <Col md={6}>
                            <Label>NumberCouples</Label>
                            <Input type="text" />
                        </Col>
                        <Col md={6}>
                            <Label>Referral minimum stay</Label>
                            <Input type="text" />
                        </Col>
                        <Col md={6}>
                            <Label>Minimum award</Label>
                            <Input type="text" />
                        </Col>
                        <Col md={6}>
                            <Label>Status</Label>
                            <Input type="select" name="select" id="exampleSelect">
                                <option>1</option>
                                <option>2</option>
                            </Input>
                        </Col>
                    </Row>

                    <div className="d-flex justify-content-end">
                        <Button col={2}
                            typebootstrap="primary "
                            type="submit"
                            title="Ok" />
                        <Button col={2}
                            typebootstrap="secondary"
                            type="button"
                            title="Cancel"
                        />
                    </div>
                </CardBody>
            </Card>
        </>
    );
}

export default PromotionBenefitDetail;
