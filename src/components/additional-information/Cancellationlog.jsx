/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/
import React from 'react';
import { SimpleTable } from '../index';

const Cancellationlog = () => {
    const columns = [
        {
            title: '',
            dataIndex: 'item',
            key: 'item',
            width: "8.33%",
        },
        {
            title: 'User',
            dataIndex: 'user',
            key: 'user',
            width: "8.33%",
        },
        {
            title: 'Date/Hour',
            dataIndex: 'date',
            key: 'date',
            width: "8.33%",
        },
        {
            title: 'Company',
            dataIndex: 'company',
            key: 'company',
            width: "8.33%",
        },
        {
            title: 'Application',
            dataIndex: 'application',
            key: 'application',
            width: "8.33%",
        },
        {
            title: 'Cancel Date',
            dataIndex: 'canceldate',
            key: 'canceldate',
            width: "8.33%",
        },
        {
            title: 'Cancel Code',
            dataIndex: 'cancelcode',
            key: 'cancelcode',
            width: "8.33%",
        },
        {
            title: 'Notes',
            dataIndex: 'notes',
            key: 'notes',
            width: "8.33%",
        },
        {
            title: 'Type',
            dataIndex: 'type',
            key: 'type',
            width: "8.33%",
        },
        {
            title: 'Last Cancel Date',
            dataIndex: 'lastcancel',
            key: 'lastcancel',
            width: "8.33%",
        },
        {
            title: 'Reactivation Date',
            dataIndex: 'reactivation',
            key: 'reactivation',
            width: "8.33%",
        },
        {
            title: 'Asm Name',
            dataIndex: 'asm',
            key: 'asm',
            width: "8.33%",
        },
    ];
    const data = [
        { item: '', user: '', date: '', company: '', application: '', canceldate: '', cancelcode: '', notes: '', type: '', lastcancel: '', reactivation: '', asm: '' },
        { item: '', user: '', date: '', company: '', application: '', canceldate: '', cancelcode: '', notes: '', type: '', lastcancel: '', reactivation: '', asm: '' },
        { item: '', user: '', date: '', company: '', application: '', canceldate: '', cancelcode: '', notes: '', type: '', lastcancel: '', reactivation: '', asm: '' },
        { item: '', user: '', date: '', company: '', application: '', canceldate: '', cancelcode: '', notes: '', type: '', lastcancel: '', reactivation: '', asm: '' },
    ];
    return (
        <div className="m-1">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Cancellation Log</h5>
                    <SimpleTable columns={columns} data={data} type="table" />
                </div>
            </div>
        </div>
    )
}

export default Cancellationlog;