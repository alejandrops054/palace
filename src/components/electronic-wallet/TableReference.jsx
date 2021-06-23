/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/
import React from 'react';
import { Table } from 'antd';
import { Button} from '../index'

import 'antd/dist/antd.css';

const TableReference = () => {
    
    const columns = [
        {
            title: 'Id',
            dataIndex: 'id',
            key: 'id',
               width: 50,
        },
        {
            title: 'Date',
            dataIndex: 'date',
            key: 'date',
               width: 100,
        },
        {
            title: 'Description',
            dataIndex: 'description',
            key: 'description',
               width: 150,
        },
        {
            title: 'Reference',
            dataIndex: 'reference',
            key: 'reference',
               width: 100,
        },
        {
            title: 'System',
            dataIndex: 'system',
            key: 'system',
               width: 100,
        },
        {
            title: 'Charges',
            dataIndex: 'charges',
            key: 'charges',
               width: 100,
        },
        {
            title: 'Subtype',
            dataIndex: 'charges',
            key: 'charges',
               width: 100,
        },
        {
            title: 'Use Amount',
            dataIndex: 'amount',
            key: 'amount',
               width: 150,
        },
        {
            title: 'Balance',
            dataIndex: 'balance',
            key: 'balance',
               width: 100,
        },
        {
            title: 'Comments',
            dataIndex: 'comments',
            key: 'comments',
               width: 100,
        },
        {
            title: 'Active',
            dataIndex: 'active',
            key: 'active',
               width: 100,
        },
        {
            title: 'Expiration',
            dataIndex: 'expiration',
            key: 'expiration',
               width: 100,
        },
        {
            title: 'Payments',
            dataIndex: 'payments',
            key: 'payments',
               width: 100,
        },
        {
            title: 'Company',
            dataIndex: 'company',
            key: 'company',
               width: 100,
        },
        {
            title: 'Application',
            dataIndex: 'application',
            key: 'application',
               width: 150,
        },
        {
            title: 'Cost',
            dataIndex: 'cost',
            key: 'cost',
               width: 100,
        },
        {
            title: 'Card Number',
            dataIndex: 'carnumber',
            key: 'carnumber',
               width: 150,
        },
        {
            title: 'Released',
            dataIndex: 'released',
            key: 'released',
               width: 100,
        },
        {
            title: 'Release Date',
            dataIndex: 'releasedate',
            key: 'releasedate',
               width: 150,
        },
        {
            title: 'Shock',
            dataIndex: 'shock',
            key: 'shock',
               width: 100,
        },
        {
            title: '5% Cash',
            dataIndex: 'cash',
            key: 'cash',
               width: 100,
        },
        {
            title: 'In-Full',
            dataIndex: 'full',
            key: 'full',
               width: 100,
        },
        {
            title: 'Note',
            dataIndex: 'note',
            key: 'note',
               width: 100,
        },
        {
            title: 'Financing',
            dataIndex: 'financing',
            key: 'financing',
               width: 100,
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
               width: 100,
        },
        {
            title: 'Special Promotion',
            dataIndex: 'specialpromotion',
            key: 'specialpromotions',
            width: 150,

        },
        {
            title: 'Hotel',
            dataIndex: 'hotel',
            key: 'hotel',
               width: 100,
        },
        {
            title: 'Folio',
            dataIndex: 'folio',
            key: 'folio',
               width: 100,
        },
        {
            title: 'Hotel Opera',
            dataIndex: 'opera',
            key: 'opera',
               width: 150,
        },
        {
            title: 'Folio Opera',
            dataIndex: 'foliop',
            key: 'foliop',
               width: 150,
        },
        {
            title: 'Airfare Ticket',
            dataIndex: 'aifare',
            key: 'aifare',
               width: 150,
        },
        {
            title: 'Reference id',
            dataIndex: 'reference',
            key: 'reference',
               width: 150,
        },
        {
            title: 'Coupon Number',
            dataIndex: 'coupon',
            key: 'coupon',
               width: 150,
        },

        {
            title: 'Business Segmen',
            dataIndex: 'business',
            key: 'business',
               width: 150,
        },

        
        {
            title: 'Amount Collected ',
            dataIndex: 'collected',
            key: 'collected',
               width: 150,
        },
        
        {
            title: 'Log',
            dataIndex: 'log',
            key: 'log',
               width: 150,
               render: () =><Button col='1.5' icon='fas fa-book' typebootstrap='link' type='button' />   ,

        },

    ];
    const data = [
        { log: <Button col='1.5' icon='fas fa-book' typebootstrap='link' type='button' />    },

        
       
    ];
    return (
        <div >
            <Table columns={columns} dataSource={data}  scroll={{ y: 1300 , x: 1300}}/>  
        </div>
    );
}
export default TableReference;