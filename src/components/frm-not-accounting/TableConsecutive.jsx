/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/

import React from 'react';
import { SimpleTable } from "../index";
import { Card, CardBody } from 'reactstrap';
const TableConsecutive = () => {
    const columns = [
        {
            title: 'Consecutive',
            dataIndex: 'consecutive',
            key: 'consecutive',
            width: "1%",
        },
        {
            title: 'Document Class',
            dataIndex: 'documentclass',
            key: 'documentclass',
            width: "1%",
        },
        {
            title: 'Society',
            dataIndex: 'society',
            key: 'society',
            width: "1%",
        },
        {
            title: 'Document Currency',
            dataIndex: 'documentcurrency',
            key: 'documentcurrency',
            width: "1%",
        },
        {
            title: 'Exchange Rate ML',
            dataIndex: 'exchangerateml',
            key: 'exchangerateml',
            width: "1%",
        },
        {
            title: 'Document Date',
            dataIndex: 'documentdate',
            key: 'documentdate',
            width: "1%",
        },
        {
            title: 'Account Date',
            dataIndex: 'accountdate',
            key: 'accountdate',
            width: "1%",
        },
        {
            title: 'Header Text',
            dataIndex: 'headertext',
            key: 'headertext',
            width: "1%",
        },
        {
            title: 'Accounting Key',
            dataIndex: 'accountingkey',
            key: 'accountingkey',
            width: "1%",
        },
    ];
    const data = [
        { consecutive: '',documentclass:'', society:'',documentcurrency:'',exchangerateml:'',documentdate:'',accountdate:'',headertext:'',accountingkey:''},
    ];
    return (
        <>
            <Card>
                <CardBody>
                    <SimpleTable columns={columns} data={data} type="table" />
                </CardBody>
            </Card>
        </>
    );
};

export default TableConsecutive;