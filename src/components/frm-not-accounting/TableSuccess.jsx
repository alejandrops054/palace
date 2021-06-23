/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/

import React from 'react';
import { SimpleTable } from "../index";
import { Card, CardBody } from 'reactstrap';
const TableSuccess = () => {
    const columns = [
        {
            title: 'Success',
            dataIndex: 'success',
            key: 'success',
            width: "1%",
        },
        {
            title: 'SAP Document',
            dataIndex: 'sapdocument',
            key: 'sapdocument',
            width: "1%",
        },
        {
            title: 'Policy Code',
            dataIndex: 'policycode',
            key: 'policycode',
            width: "1%",
        },
        {
            title: 'Records',
            dataIndex: 'records',
            key: 'records',
            width: "1%",
        },
        {
            title: 'Policy Date',
            dataIndex: 'policydate',
            key: 'policydate',
            width: "1%",
        },
        {
            title: 'Currency',
            dataIndex: 'currency',
            key: 'currency',
            width: "1%",
        },
        {
            title: 'Response',
            dataIndex: 'response',
            key: 'response',
            width: "1%",
        },
        {
            title: 'Date Created',
            dataIndex: 'datecreated',
            key: 'datecreated',
            width: "1%",
        },
        {
            title: 'User',
            dataIndex: 'user',
            key: 'user',
            width: "1%",
        },
    ];
    const data = [
        { success: '', sapdocument: '', policycode: '', records: '', policydate: '', currency: '', response: '', datecreated: '', user: '' },
        { success: '', sapdocument: '', policycode: '', records: '', policydate: '', currency: '', response: '', datecreated: '', user: '' },
        { success: '', sapdocument: '', policycode: '', records: '', policydate: '', currency: '', response: '', datecreated: '', user: '' },
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

export default TableSuccess;