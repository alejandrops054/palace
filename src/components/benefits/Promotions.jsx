/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/
import React from 'react'
import { SimpleTable, Checkbox } from '../index';
export default function Promotions() {
    const columns = [
        {
            title: <Checkbox />,
            dataIndex: '',
            key: '',
            render: () => <Checkbox />,
            width: 100,
        },
        {
            title: 'Description',
            dataIndex: 'description',
            key: 'description',
            width: 470,
        },
        {
            title: 'Priority',
            dataIndex: 'priority',
            key: 'priority',
            width: 470,
        },
    ];
    const data = [
        { description: 'Unlimited referral plus program 2x1', priority: '1' },
        { description: 'Kids and teens fee', priority: '2' },
        { description: 'Promotion $500 resort credit afitional by reservation', priority: '3' },
    ];

    return (
        <div>
            <div className="row mb-1">
                <div className="d-flex justify-content-end">
                    <button id="consult" className="btn btn-link" type="button"><i className="fas fa-share"></i>Transfer</button>
                    <button id="consult" className="btn btn-link main" type="button"><i className="fas fa-plus"></i></button>
                </div>
            </div>
            <div className="table-responsive-lg">
                <SimpleTable columns={columns} data={data} type="table" />
            </div>
        </div>
    )
}
