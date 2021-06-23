/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/
import React from "react";
import { Card, CardBody } from 'reactstrap';
import { LogDetail } from '../index'

function AccessHotelLogDetail() {
    const columns = [
        {
            title: 'Order',
            dataIndex: 'order',
            key: 'order',
            width: "1%",
        },
        {
            title: 'Field Name',
            dataIndex: 'fieldname',
            key: 'fieldname',
            width: "1%",
        },
        {
            title: 'Original',
            dataIndex: 'original',
            key: 'original',
            width: "1%",
        },
        {
            title: 'Change',
            dataIndex: 'change',
            key: 'change',
            width: "1%",
        },

    ];
    const data = [
        { order: '', fieldname: '', original: '', change: '' },
        { order: '', fieldname: '', original: '', change: '' },
        { order: '', fieldname: '', original: '', change: '' },
        { order: '', fieldname: '', original: '', change: '' },
        { order: '', fieldname: '', original: '', change: '' },
        { order: '', fieldname: '', original: '', change: '' },
        { order: '', fieldname: '', original: '', change: '' },
        { order: '', fieldname: '', original: '', change: '' },
    ];
    return (
        <>
            <Card>
                <CardBody>
                    <LogDetail title="Access Hotel Log Detail" column={columns} data={data} />
                </CardBody>
            </Card>
        </>
    );
}

export default AccessHotelLogDetail;
