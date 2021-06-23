/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/

import React from 'react';
import { SimpleTable } from "../index";

const TableBA = () => {

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
            title: 'Merchant Code',
            dataIndex: 'merchantcode',
            key: 'merchantcode',
            width: "1%",
        },
        {
            title: 'Office',
            dataIndex: 'office',
            key: 'office',
            width: "1%",
        },
        {
            title: 'Account',
            dataIndex: 'account',
            key: 'account',
            width: "1%",
        },
        {
            title: 'Porfolio',
            dataIndex: 'porfolio',
            key: 'porfolio',
            width: "1%",
        },
        {
            title: 'Currency',
            dataIndex: 'currency',
            key: 'currency',
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
        { code: '', description: '', merchantcode: '', office: '', account: '', porfolio: '', currency: '', status: '' },
        { code: '', description: '', merchantcode: '', office: '', account: '', porfolio: '', currency: '', status: '' },
        { code: '', description: '', merchantcode: '', office: '', account: '', porfolio: '', currency: '', status: '' },
        { code: '', description: '', merchantcode: '', office: '', account: '', porfolio: '', currency: '', status: '' },
    ];
    return (
        <SimpleTable columns={columns} data={data} type="table" />
    );
};

export default TableBA;
