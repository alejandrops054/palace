/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/
import React from "react";
import { Card, CardBody, Label, Col, Row, Input, FormGroup } from 'reactstrap';
import { SimpleTable, Checkbox, Button } from '../index'
function Process() {
    const columns = [
        {
            title: 'Selected',
            dataIndex: 'selected',
            key: 'selected',
            width: "1%",
            render: () => <Checkbox />
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            width: "1%",
        },
    ];
    const data = [
        { selected: '', status: 'Active' },
        { selected: '', status: 'Definitely Canceled' },
        { selected: '', status: '' },
    ];
    const columns2 = [
        {
            title: 'Company',
            dataIndex: 'company',
            key: 'company',
            width: "1%",
        },
        {
            title: 'No. affiliations',
            dataIndex: 'noaffiliations',
            key: 'noaffiliations',
            width: "1%",
        },
    ];
    const data2 = [
        { company: '', noaffiliations: '' },
        { company: '', noaffiliations: '' },
        { company: '', noaffiliations: '' },
        { company: '', noaffiliations: '' },
        { company: '', noaffiliations: '' },
        { company: '', noaffiliations: '' },
        { company: '', noaffiliations: '' },
        { company: '', noaffiliations: '' },
        { company: '', noaffiliations: '' },
        { company: '', noaffiliations: '' },
    ];
    return (
        <>
            <Card>
                <CardBody>
                    <Row>
                        <Col md={6}>
                            <FormGroup check inline>
                                <Label check>
                                    <Input type="checkbox" /> Application
                            </Label>
                            </FormGroup>
                            <FormGroup check inline>
                                <Label check>
                                    <Input type="checkbox" /> Date
                             </Label>
                            </FormGroup>
                            <FormGroup check inline>
                                <Label check>
                                    <Input type="checkbox" /> Excel File
                             </Label>
                            </FormGroup>
                            <Row>
                                <h5>From</h5>
                                <Col md={4}>
                                    <Label>Affiliation</Label>
                                    <Input type="text" />
                                </Col>
                                <Col md={8}>
                                    <Label>Name</Label>
                                    <Input type="text" />
                                </Col>
                                <Col md={3}>
                                    <Label>From Date</Label>
                                    <Input type="date" />
                                </Col>
                                <Col md={3}>
                                    <Label>Company</Label>
                                    <Input type="text" />
                                </Col>
                                <Col md={3}>
                                    <Label>Purchase</Label>
                                    <Input type="text" />
                                </Col>
                                <Col md={3}>
                                    <Label>Total</Label>
                                    <Input type="text" />
                                </Col>

                                <h5>To</h5>
                                <Col md={4}>
                                    <Label>Affiliation</Label>
                                    <Input type="text" />
                                </Col>
                                <Col md={8}>
                                    <Label>Name</Label>
                                    <Input type="text" />
                                </Col>
                                <Col md={3}>
                                    <Label>To Date</Label>
                                    <Input type="date" />
                                </Col>
                                <Col md={3}>
                                    <Label>Company</Label>
                                    <Input type="text" />
                                </Col>
                                <Col md={3}>
                                    <Label>Purchase</Label>
                                    <Input type="text" />
                                </Col>
                                <Col md={3}>
                                    <Label>Total</Label>
                                    <Input type="text" />
                                </Col>

                                <h5>Member Status</h5>
                                <Col md={6}>
                                    <SimpleTable columns={columns} data={data} type="table" />
                                </Col>
                                <Col md={6}>
                                    <Row>
                                        <Col md={12}>
                                            <Label>Fully Paid</Label>
                                            <Input type="select" name="select" id="exampleSelect">
                                                <option>All</option>
                                                <option>2</option>
                                            </Input>
                                        </Col>
                                        <Col md={6}>
                                            <Label check>
                                                <Input type="checkbox" /> Update Member
                                            </Label>
                                        </Col>
                                        <Col md={6}>
                                            <Label check>
                                                <Input type="checkbox" /> Performance
                                            </Label>
                                        </Col>
                                        <Col md={6}>
                                            <Label check>
                                                <Input type="checkbox" /> Update Payment Promises
                                            </Label>
                                        </Col>
                                        <Col md={6}>
                                            <Label check>
                                                <Input type="checkbox" /> Delete Payments Conciliations
                                            </Label>
                                        </Col>
                                        <Col md={12}>
                                            <Label check>
                                                <Input type="checkbox" /> Release Benefits (Elite Products & Provisions)
                                            </Label>
                                        </Col>
                                    </Row>
                                </Col>

                            </Row>

                        </Col>
                        <Col md={6}>
                            <Row>
                                <Col md={12}>
                                    <h5>Total affiliations found: total</h5>
                                </Col>
                                <Col md={12}>
                                    <h5>Detail</h5>

                                </Col>
                                <SimpleTable columns={columns2} data={data2} type="table" />
                                <h5>By Excel File</h5>
                                <Col md={6}>
                                    <Label>Path</Label>
                                    <Input type="text" />
                                </Col>
                                <Col md={2}>
                                    <Button col={12} icon="fas fa-times" typebootstrap="secondary" type="button" />
                                </Col>
                                <Col md={3}>
                                    <Button col={12} typebootstrap="secondary" type="button" title="Load" />
                                </Col>
                                <Col md={12}>
                                    <Label>Records to process: 0</Label>
                                </Col>
                            </Row>

                        </Col>
                    </Row>
                </CardBody>
            </Card>
        </>
    );
}

export default Process;
