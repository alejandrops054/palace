/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contrato1s
Comentarios: xxxxx
*/
import React from "react";
import { Row} from "reactstrap";
import Table from 'rc-table'
import BreakdownElectronicWalletPI from './BreakdownElectronicWalletPI'
import BreakdownElectronicWalletEPD from './BreakdownElectronicWalletEPD'
const columns = [
  {
    title: '',
    dataIndex: '',
    key: '',
    width: 130,
  },
  {
    title: 'Stock',
    dataIndex: 'stock',
    key: 'stock',
    width: 130,
  },
  {
    title: 'Item',
    dataIndex: 'item',
    key: 'item',
    width:130,
  },
  {
    title: 'Date',
    dataIndex: 'date',
    key: 'date',
    width: 130,
  },
  {
    title: 'Description',
    dataIndex: 'desc',
    key: 'desc',
    width: 130,
  },
  {
    title: 'Reference',
    dataIndex: 'ref',
    key: 'ref',
    width: 130,
  },
  {
    title: 'Amount',
    dataIndex: 'amount',
    key: 'amount',
    width: 130,
  },
  {
    title: '',
    dataIndex: '',
    key: '',
    width: 130,
  },
  {
    title: 'Activate',
    dataIndex: 'activate',
    key: 'activate',
    width: 130,
  },
  {
    title: 'Expiration',
    dataIndex: 'exp',
    key: 'exp',
    width: 130,
  },
  {
    title: 'Payments',
    dataIndex: 'payments',
    key: 'payment',
    width: 130,
  },
  {
    title: 'Financing Type',
    dataIndex: 'financing',
    key: 'financing',
    width: 130,
  },
  {
    title: '5% Cash',
    dataIndex: 'cash',
    key: 'cash',
    width: 130,
  },
];


function BreakdownElectronicWallet() {
  return (
    <>
      <h1>Breakdown of electronic wallet</h1>
      <Row>
      <BreakdownElectronicWalletPI/>
        <BreakdownElectronicWalletEPD/>
        
      </Row>
      <Row>
        <Table columns={columns} />
      </Row>
    </>
  );
}

export default BreakdownElectronicWallet;
