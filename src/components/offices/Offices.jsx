/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/
import React from "react";
import { Card, CardBody, CardTitle } from 'reactstrap';
import { SimpleTable } from '../index'

function Offices() {
    const columns = [
        {
            title: 'Code',
            dataIndex: 'code',
            key: 'code',
            width: "1%",
        },
        {
            title: 'Description',
            dataIndex: 'description',
            key: 'description',
            width: "1%",
        },
        {
            title: 'Project',
            dataIndex: 'project',
            key: 'project',
            width: "1%",
        },
        {
            title: 'Zone',
            dataIndex: 'zone',
            key: 'zone',
            width: "1%",
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            width: "1%",
        },

    ];
    const data = [
        { code: '', description: '', project: '', zone: '', status: '' },
        { code: '', description: '', project: '', zone: '', status: '' },
        { code: '', description: '', project: '', zone: '', status: '' },
        { code: '', description: '', project: '', zone: '', status: '' },
        { code: '', description: '', project: '', zone: '', status: '' },
        { code: '', description: '', project: '', zone: '', status: '' },
        { code: '', description: '', project: '', zone: '', status: '' },
        { code: '', description: '', project: '', zone: '', status: '' },
        { code: '', description: '', project: '', zone: '', status: '' },
        { code: '', description: '', project: '', zone: '', status: '' },
    ];
    return (
        <>
            <Card>
                <CardBody>
                    <CardTitle tag="h5">Offices</CardTitle>
                    <SimpleTable columns={columns} data={data} type="table" />
                </CardBody>
            </Card>
        </>
    );
}

export default Offices;
