/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/
import React from 'react';
import Table from 'react-bootstrap/Table'

const columns = [
  { field: 'Id', headerName: 'ID', width: 70 },
  { field: 'Date', headerName: 'Date', width: 70 },
  { field: 'Time', headerName: 'Time', width: 70 },
  { field: 'Inv/CK#', headerName: 'Inv/CK#', width: 70 },
  { field: 'Paid By', headerName: 'Paid', width: 70 },
  { field: 'CD', headerName: 'CD', width: 70 },
  { field: 'ID', headerName: 'ID', width: 70 },
  { field: 'TC', headerName: 'TC', width: 70 },
  { field: 'Description', headerName: 'Description', width: 130 },
  { field: 'Amount', headerName: 'Amount', width: 130 },
  { field: 'Escrow', headerName: 'Escrow', width: 130 },
  { field: 'Down Payment', headerName: 'Down Payment', width: 130 }

];

const rows = [
  {Id: '1578288', headerName: 'Id', width: 70}, 
  {Date: '01/11/2020', headerName: 'Date', width: 70}, 
  {Time: '16:000:07', headerName: 'Time', width: 70}, 
  {Inv: 697519, headerName: 'Inv', width: 70}, 
  {Paid: 0, headerName: 'Paid', width: 70}, 
  {CD:'E', headerName: 'CD', width: 70}, 
  {ID:'M', headerName: 'ID', width: 70},
  {TC:'CHK',  headerName: 'TC', width: 70}, 
  {Description:'MM=DT:VATT:CSS.EW-M', headerName: 'Description', width: 130 }, 
  {Amount:'-2,000.00', headerName: 'Amount', width: 130 },
  {Escrow:'-2,000.00', headerName: 'Escrow', width: 130 }, 
  {Down:'0.00', headerName: 'Down', width: 130 }
];

export default function TablaAffiliationInquery() {
  return (
        <Table striped bordered hover>
        <thead>
            <tr>
                {columns.map((data)=>{ return(
                    <td key={data.field}>{data.field}</td>
                )})}
            </tr>
        </thead>
        <tbody>
            <tr>
                {rows.map((valor) =>{ return(
                    <td rowKey={valor.Id}>{valor.Id}{valor.Date}{valor.Time}{valor.Inv}{valor.CD}{valor.ID}{valor.TC}{valor.Description}{valor.Amount}{valor.Escrow}{valor.Down}</td>
                )})}
            </tr>
        </tbody>
    </Table>
  );
}