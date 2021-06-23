/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/
import React from "react";
import { Card, CardBody } from 'reactstrap';
import { Log } from '../index'

function PlansLog() {
    const columns = [
        {
            title: 'User',
            dataIndex: 'user',
            key: 'user',
            width: "1%",
        },
        {
            title: 'Date / Time',
            dataIndex: 'datetime',
            key: 'datetime',
            width: "1%",
        },
        {
            title: 'Module',
            dataIndex: 'module',
            key: 'module',
            width: "1%",
        },
        {
            title: 'Action',
            dataIndex: 'action',
            key: 'action',
            width: "1%",
        },
        {
            title: 'Original',
            dataIndex: 'original',
            key: 'original',
            width: "1%",
        },
        {
            title: 'Changes',
            dataIndex: 'changes',
            key: 'changes',
            width: "1%",
        }

    ];
    const data = [
        { user: '', datetime: '', module: '', action: '', original: '', changes: '' },
        { user: '', datetime: '', module: '', action: '', original: '', changes: '' },
        { user: '', datetime: '', module: '', action: '', original: '', changes: '' },
        { user: '', datetime: '', module: '', action: '', original: '', changes: '' },
        { user: '', datetime: '', module: '', action: '', original: '', changes: '' },
        { user: '', datetime: '', module: '', action: '', original: '', changes: '' },
        { user: '', datetime: '', module: '', action: '', original: '', changes: '' },
        { user: '', datetime: '', module: '', action: '', original: '', changes: '' },
    ];
    return (
        <>
            <Card>
                <CardBody>
                    <Log title="Plan Log" columns={columns} data={data} />
                </CardBody>
            </Card>
        </>
    );
}

export default PlansLog;
