/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/
import React from 'react';
import {  Checkbox, Button } from '../index';
import { Card, Row, Col, Form, Input, Label } from 'reactstrap'
import DataTable from 'react-data-table-component';
import MemberOtherPay from './MemberOtherPay';
import OtherPayLog from './OtherPayLog';


const columns = [
    {
        name: 'Folio',
        selector: 'folio',
        sortable:true,
    },
    {
        name: 'Type',
        selector: 'type',
        sortable: true,
    },
    {
        name: 'We received',
        selector: 'we',
        sortable: true,
    },
    {
        name: 'Relationship',
        selector: 'relationship',
        sortable: true,
    },
    {
        name: 'Concept',
        selector: 'concept',
        sortable: true,
    },
    {
        name: 'Voucher',
        selector: 'voucher',
        sortable: true,
    },
    {
        name: 'Folio Check',
        selector: 'fcheck',
        sortable: true,
    },
    {
        name: 'Bank',
        selector: 'bank',
        sortable: true,
    },
    {
        name: 'Currency',
        selector: 'currency',
        sortable: true,
    },
    {
        name: 'Status',
        selector: 'status',
        sortable: true,
    }
];
const data = [
    {folio:'', type:'', we:'', relationship:'', concept:'', voucher:'', fcheck:'', bank:'', currency:'', status:''}
];
const customStyles = {
    rows: {
      style: {
        minHeight: '72px', // override the row height
      }
    },
    headCells: {
      style: {
        fontSize:'20px',
        paddingLeft: '8px', // override the cell padding for head cells
        paddingRight: '8px',
      },
    },
    cells: {
      style: {
        fontSize:'15px',
        paddingLeft: '8px', // override the cell padding for data cells
        paddingRight: '8px',
      },
    },
  };


const OtherPayments = () => {
    return(
        <Card>
            <Row>
                <h1>Other Payments Ways and Cash Receipts</h1>
                <div className="col-md-12 d-flex justify-content-end tables">
                    <MemberOtherPay/>
                    <OtherPayLog/>
                </div>
                <br/>
                <Row>
                    <DataTable className='table' columns={columns} data={data} customStyles={customStyles}/>
                </Row>
            </Row>
        </Card>
    )
}

export default OtherPayments