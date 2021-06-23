/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/
import React from 'react';
import {  Checkbox, Button } from '../../index';
import { Card, Row, Col, Form, Input, Label } from 'reactstrap'
import Table from 'rc-table';

const columns = [
    {
        title: 'Folio',
        dataIndex: 'folio',
        key: 'folio',
        width: "4%",
    },
    {
        title: 'Type',
        dataIndex: 'type',
        key: 'type',
        width: "4%",
    },
    {
        title: 'We received',
        dataIndex: 'we',
        key: 'we',
        width: "4%",
    },
    {
        title: 'Monthly Authorization',
        dataIndex: 'monthlyauthorization',
        key: 'monthlyauthorization',
        width: "4%",
    }
];
const data = [

];


const OtherPayments = () => {
    return(
        <Card>
            <h1>Other Payments Ways and Cash Receipts</h1>
            <Row>
                <Table columns={columns} data={data}/>
            </Row>
        </Card>

    )
}

export default OtherPayments