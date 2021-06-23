/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/
import React from "react";
import { Button } from '../index'
import { Card, CardBody, CardTitle, Label, Input, Col, Row } from 'reactstrap';

function PromotionSpecificationDetail() {
    
    return (
        <>
            <Card>
                <CardBody>
                    <CardTitle tag="h5">Promotion Specification</CardTitle>
                    <Row>
                        <Col md={6}>
                            <Label>Specification Type</Label>
                            <Input type="select" name="select" id="exampleSelect">
                                <option>1</option>
                                <option>2</option>
                            </Input>
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
                            title="Save" />
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

export default PromotionSpecificationDetail;