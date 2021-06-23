/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/
import React from 'react';
import { SimpleTable } from '../index'

const TableProduct = () => {
    const columns = [

        {
            title: 'Product',
            dataIndex: 'product',
            key: 'product',
            width: "7%",
        },
        {
            title: 'Description',
            dataIndex: 'description',
            key: 'description',
            width: "7%",
        },
        {
            title: 'Changes',
            dataIndex: 'changes',
            key: 'changes',
            width: "7%",
        },
        {
            title: 'Credits',
            dataIndex: 'credits',
            key: 'credits',
            width: "7%",
        },
        {
            title: 'Balance',
            dataIndex: 'balance',
            key: 'balance',
            width: "7%",
        },
        {
            title: 'Log',
            dataIndex: 'log',
            key: 'log',
            width: "7%",
        },
        {
            title: 'Log Details',
            dataIndex: 'logdetails',
            key: 'logdetails',
            width: "7%",
        },
    ];
    const data = [
        { product: '', description: '', changes: '', credits: '', balance: '', log: '', logdetails: '' },
        { product: '', description: '', changes: '', credits: '', balance: '', log: '', logdetails: '' },
        { product: '', description: '', changes: '', credits: '', balance: '', log: '', logdetails: '' },
        { product: '', description: '', changes: '', credits: '', balance: '', log: '', logdetails: '' },
    ];
    return (
        <div className="card border-top border-secondary mb-3">
            <SimpleTable columns={columns} data={data} type="table" style={{width:120}} />
        </div>
    );
}
export default TableProduct;