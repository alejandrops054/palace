/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/
import React from "react";
import { Card, CardBody, Label, Col, Row, Input } from 'reactstrap';
import { SimpleTable } from '../index'
function DetailsHotel() {
    const columns = [

        {
            title: 'Room type',
            dataIndex: 'roomtype',
            key: 'roomtype',
            width: "1%",
            align: 'center'
        }
    ];
    const data = [
        { roomtype: 'Prueba', },
        { roomtype: 'Prueba', },
        { roomtype: 'Prueba', },
        { roomtype: 'Prueba', },
    ];
    return (
        <>
            <Card>
                <CardBody>
                    <Row>
                        <Col md={6}>
                            <Label>Code</Label>
                            <Input type="text" />
                        </Col>
                        <Col md={6}>
                            <Label>Description</Label>
                            <Input type="textarea" name="text" id="exampleText" />
                        </Col>
                        <Col md={6}>
                            <Label>Status</Label>
                            <Input type="select" name="select" id="exampleSelect">
                                <option>1</option>
                                <option>2</option>
                            </Input>
                        </Col>
                        <Col md={6}>
                            <Label>Zone</Label>
                            <Input type="text" />
                        </Col>
                        <Col md={6}>
                            <Label>Country</Label>
                            <Input type="select" name="select" id="exampleSelect">
                                <option>1</option>
                                <option>2</option>
                            </Input>
                        </Col>
                        <Col md={6}>
                            <Label>Order</Label>
                            <Input type="text" />
                        </Col>
                        <Col md={3}>
                            <Label check>
                                <Input type="checkbox" /> Only Adults
                            </Label>
                        </Col>
                        <SimpleTable columns={columns} data={data} type="table" />
                    </Row>

                </CardBody>
            </Card>
        </>
    );
}

export default DetailsHotel;
