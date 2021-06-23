/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/

import React from 'react';
import { SimpleTable } from "../index";

const TableProcessed = () => {

    const columns = [
        {
            title: 'Credit Note',
            dataIndex: 'creditnote',
            key: 'creditnote',
            width: "1%",
        },
        {
            title: 'ReInvoice',
            dataIndex: 'reinvoice',
            key: 'reinvoice',
            width: "1%",
        },
        {
            title: 'Company',
            dataIndex: 'company',
            key: 'company',
            width: "1%",
        },
        {
            title: 'Application',
            dataIndex: 'application',
            key: 'application',
            width: "1%",
        },
        {
            title: 'Date',
            dataIndex: 'date',
            key: 'date',
            width: "1%",
        },
        {
            title: 'Sales area',
            dataIndex: 'salesarea',
            key: 'salesarea',
            width: "1%",
        },
        {
            title: 'Reference',
            dataIndex: 'reference',
            key: 'reference',
            width: "1%",
        },
        {
            title: 'Auth ID',
            dataIndex: 'authid',
            key: 'authid',
            width: "1%",
        },
        {
            title: 'Code/Sale type',
            dataIndex: 'codesale',
            key: 'codesale',
            width: "1%",
        },
        {
            title: 'Where',
            dataIndex: 'where',
            key: 'where',
            width: "1%",
        },
        {
            title: 'Invoice #',
            dataIndex: 'invoice',
            key: 'invoice',
            width: "1%",
        },
    ];
    const data = [
        { creditnote: '', reinvoice: '', company: '', application: '', date: '', salesarea: '', reference: '', authid: '', codesale: '', where: '', invoice: '' },
        { creditnote: '', reinvoice: '', company: '', application: '', date: '', salesarea: '', reference: '', authid: '', codesale: '', where: '', invoice: '' },
        { creditnote: '', reinvoice: '', company: '', application: '', date: '', salesarea: '', reference: '', authid: '', codesale: '', where: '', invoice: '' },
        { creditnote: '', reinvoice: '', company: '', application: '', date: '', salesarea: '', reference: '', authid: '', codesale: '', where: '', invoice: '' },

    ];
    return (
        <SimpleTable columns={columns} data={data} type="table" />
    );
};

export default TableProcessed;
