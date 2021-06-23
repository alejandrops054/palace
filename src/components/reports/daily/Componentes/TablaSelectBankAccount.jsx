/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/
import React from 'react';
import Table from 'react-bootstrap/Table'

const columns = [
  { field: 'Account', headerName: 'ID', width: 70 },
  { field: 'Merchant', headerName: 'Date', width: 70 },
  { field: 'Company', headerName: 'Time', width: 70 },
  { field: 'Currency', headerName: 'Inv/CK#', width: 70 },
  { field: 'Bank', headerName: 'Inv/CK#', width: 70 }
];

const rows = [
  {Account: '1578288', headerName: 'Id', width: 70}, 
  {Merchant: '1578288', headerName: 'Date', width: 70}, 
  {Company: "PER", headerName: 'Inv', width: 70}, 
  {Currency: "US", headerName: 'Paid', width: 70},
  {Bank: "No identificado", headerName: 'Paid', width: 70}
];

export default function TablaSelectBankAccount() {
  return (
        <Table striped bordered hover>
        <thead>
            <tr>
                {columns.map((data, i)=>{ return(
                    <td key={i}>{data.field}</td>
                )})}
            </tr>
        </thead>
        <tbody>
            <tr>
                {rows.map((valor) =>{ return(
                    <td rowKey={valor.Account}>{valor.Account}{valor.Merchant}{valor.Company}{valor.Currency}{valor.Bank}</td>
                )})}
            </tr>
        </tbody>
    </Table>
  );
}