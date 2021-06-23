/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/
import React from "react";
import { Card, CardBody, CardTitle, Input, } from 'reactstrap';
import { SimpleTable } from '../index'
function CallCenterTA() {
    const columns = [
        {
            title: 'Room Type',
            dataIndex: 'roomtype',
            key: 'roomtype',
            width: "1%",
            render: () => <Input type="select" name="select" id="exampleSelect">
                <option>1</option>
                <option>2</option>
            </Input>
        },
        {
            title: 'RM_TYPE',
            dataIndex: 'rmtype',
            key: 'rmtype',
            width: "1%",
        },
    ];
    const data = [
        { roomtype: '', rmtype: 'RES' },
        { roomtype: '', rmtype: 'RES' },
        { roomtype: '', rmtype: 'RES' },
    ];
    return (
        <>
            <Card>
                <CardBody>
                    <CardTitle tag="h5">Call Center</CardTitle>
                    <SimpleTable columns={columns} data={data} type="table" />
                </CardBody>
            </Card>
        </>
    );
}

export default CallCenterTA;