/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/
import React from "react";
import { Card, CardBody, Label, Col, Row, Input } from 'reactstrap';
import { SimpleTable, Button } from '../index'
function Errors() {
    const columns = [
        {
            title: 'Company',
            dataIndex: 'company',
            key: 'company',
            width: "1%",
        },
        {
            title: 'Application',
            dataIndex: 'application',
            key: 'application',
            width: "1%",
        },
        {
            title: 'Message',
            dataIndex: 'message',
            key: 'message',
            width: "1%",
        },
    ];
    const data = [
        { company: '', application: '', message: '' },
        { company: '', application: '', message: '' },
        { company: '', application: '', message: '' },
        { company: '', application: '', message: '' },
        { company: '', application: '', message: '' },
        { company: '', application: '', message: '' },
        { company: '', application: '', message: '' },
        { company: '', application: '', message: '' },
        { company: '', application: '', message: '' },
    ];
    return (
        <>
            <Card>
                <CardBody>
                    <Row>
                        <SimpleTable columns={columns} data={data} type="table" />
                        <Col md={12}>
                            <h5>Processed affiliation 0 Of 0:</h5>
                        </Col>
                        <Col md={4}>
                            <Label></Label>
                            <Input type="text" />
                        </Col>
                        <Col md={2}>
                            <Label>Total Errors 0</Label>
                        </Col>
                        <Col md={2}>
                            <Label>Total Warnings 0</Label>
                        </Col>
                        <Col md={2}>
                            <Button col={12} icon="fas fa-file-alt" typebootstrap="secondary" type="button" title="Select All" />
                        </Col>
                        <Col md={2}>
                            <Button col={12} icon="fas fa-sync-alt" typebootstrap="secondary" type="button" title="Refresh" />
                        </Col>
                        <Col md={2}>
                            <Button col={12} icon="fas fa-cog" typebootstrap="secondary" type="button" title="Process" />
                        </Col>
                        <Col md={2}>
                            <Button col={12} icon="fas fa-times" typebootstrap="secondary" type="button" title="Cancel" />
                        </Col>
                    </Row>

                </CardBody>
            </Card>
        </>
    );
}

export default Errors;
