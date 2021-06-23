/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/
import React from "react";
import { Card, CardBody, CardTitle } from 'reactstrap';
import { SimpleTable } from '../index'

function Plans() {
    const columns = [
        {
            title: 'Code',
            dataIndex: 'code',
            key: 'code',
            width: "1%",
        },
        {
            title: 'Title',
            dataIndex: 'title',
            key: 'title',
            width: "1%",
        },
        {
            title: 'Office',
            dataIndex: 'office',
            key: 'office',
            width: "1%",
        },
        {
            title: 'Project',
            dataIndex: 'project',
            key: 'project',
            width: "1%",
        },

    ];
    const data = [
        {code:'',title:'',office:'',project:'' },
    ];
    return (
        <>
            <Card>
                <CardBody>
                    <CardTitle tag="h5">Plans</CardTitle>
                    <SimpleTable columns={columns} data={data} type="table" />
                </CardBody>
            </Card>
        </>
    );
}

export default Plans;
