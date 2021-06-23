/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/

import React from 'react';
import { SimpleTable } from "../index";

const TableMemberProvisionSL = () => {

    const columns = [
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
            title: 'Type',
            dataIndex: 'type',
            key: 'type',
            width: "1%",
        },
        {
            title: 'Folio',
            dataIndex: 'folio',
            key: 'folio',
            width: "1%",
        },
        {
            title: 'Previous Status',
            dataIndex: 'previousstatus',
            key: 'previousstatus',
            width: "1%",
        },
        {
            title: 'Current Status',
            dataIndex: 'currentstatus',
            key: 'currentstatus',
            width: "1%",
        },
        {
            title: 'Date',
            dataIndex: 'date',
            key: 'date',
            width: "1%",
        },
        {
            title: 'Time',
            dataIndex: 'time',
            key: 'time',
            width: "1%",
        },
        {
            title: 'Login',
            dataIndex: 'login',
            key: 'login',
            width: "1%",
        },
        {
            title: 'Terminal',
            dataIndex: 'terminal',
            key: 'terminal',
            width: "1%",
        },
        {
            title: 'Module',
            dataIndex: 'module',
            key: 'module',
            width: "1%",
        },
        {
            title: 'Origin',
            dataIndex: 'origin',
            key: 'origin',
            width: "1%",
        },
    ];
    const data = [
        { company: '', application: '', type: '', folio: '', previousstatus: '', currentstatus: '', date: '', time: '', login: '', terminal: '', module: '', origin: '' },
    ];
    return (
        <SimpleTable columns={columns} data={data} type="table" />
    );
};

export default TableMemberProvisionSL;
