/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/
import React from "react";
import { Card, CardBody, Label, Col, Row, Input, Button } from 'reactstrap';
import { SimpleTable } from '../index'
function SearchBenefits() {
    const columns = [
        {
            title: 'Benefit type',
            dataIndex: 'benefittype',
            key: 'benefittype',
            width: "1%",
        },
        {
            title: 'Benefit',
            dataIndex: 'benefit',
            key: 'benefit',
            width: "1%",
        },
    ];
    const data = [
        { benefittype: '', benefit: '' },
        { benefittype: '', benefit: '' },
        { benefittype: '', benefit: '' },
    ];
    return (
        <>
            <Card>
                <CardBody>
                    <Row>
                        <Col md={3}>
                            <Label>Benefit type</Label>
                            <Input type="select" name="select" id="exampleSelect">
                                <option>1</option>
                                <option>2</option>
                            </Input>
                        </Col>
                        <Col md={3}>
                            <Label>Benefit</Label>
                            <Input type="select" name="select" id="exampleSelect">
                                <option>1</option>
                                <option>2</option>
                            </Input>
                        </Col>
                        <Col md={3}>
                            <Label>Status</Label>
                            <Input type="select" name="select" id="exampleSelect">
                                <option>1</option>
                                <option>2</option>
                            </Input>
                        </Col>
                        <Col sm={{ size: 10, offset: 10 }}>
                            <Button>Search</Button>
                        </Col>
                        <Col md={3}>
                            <Label check>
                                <Input type="checkbox" /> Is product
                            </Label>
                        </Col>
                    </Row>
                    <SimpleTable columns={columns} data={data} type="table" />
                </CardBody>
            </Card>
        </>
    );
}

export default SearchBenefits;