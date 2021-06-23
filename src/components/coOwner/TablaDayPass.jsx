/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/
import React from 'react';
import Table from 'react-bootstrap/Table'

const columns = [
  { field: 'folio Day Pass', headerName: 'ID', width: 70 },
  { field: 'Folio Provision', headerName: 'Date', width: 70 },
  { field: 'Description', headerName: 'Time', width: 70 },
  { field: 'Status', headerName: 'Inv/CK#', width: 70 }

];

const rows = [
  {FoliDayPass: '1578288', headerName: 'Id', width: 70}, 
  {FolioProvision: '4', headerName: 'Date', width: 70}, 
  {Description: "DAY PASS FAMILIAR PR", headerName: 'Inv', width: 70}, 
  {Status: "A", headerName: 'Paid', width: 70}
];

export default function TablaDayPass() {
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
                    <td rowKey={valor.FoliDayPass}>{valor.FoliDayPass}{valor.FolioProvision}{valor.Description}{valor.Status}</td>
                )})}
            </tr>
        </tbody>
    </Table>
  );
}