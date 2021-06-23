/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/

import React from 'react';
import { SimpleTable } from "../index";

const TableInProcess = () => {

    const columns = [
        {
            title: 'Application',
            dataIndex: 'application',
            key: 'application',
            width: "1%",
        },
        {
            title: 'Company',
            dataIndex: 'company',
            key: 'company',
            width: "1%",
        },
        {
            title: 'Trans. date',
            dataIndex: 'transdate',
            key: 'transdate',
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
            title: 'Sales area',
            dataIndex: 'salesarea',
            key: 'salesarea',
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
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            width: "1%",
        },
        {
            title: 'Documents',
            dataIndex: 'documents',
            key: 'documents',
            width: "1%",
        },
    ];
    const data = [
        { application: '', company: '', transdate: '', reference: '', authid: '', codesale: '', salesarea: '', where: '', invoice: '', status: '', documents: '' },
        { application: '', company: '', transdate: '', reference: '', authid: '', codesale: '', salesarea: '', where: '', invoice: '', status: '', documents: '' },
        { application: '', company: '', transdate: '', reference: '', authid: '', codesale: '', salesarea: '', where: '', invoice: '', status: '', documents: '' },
        { application: '', company: '', transdate: '', reference: '', authid: '', codesale: '', salesarea: '', where: '', invoice: '', status: '', documents: '' },

    ];
    return (
        <SimpleTable columns={columns} data={data} type="table" />
    );
};

export default TableInProcess;
