/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/
import React from 'react';
import Table from 'react-bootstrap/Table'

const columns = [
  { field: '', headerName: 'ID', width: 70 },
  { field: 'Consecutive', headerName: 'Date', width: 70 },
  { field: 'Code', headerName: 'Time', width: 70 },
  { field: 'Document Date', headerName: 'Inv/CK#', width: 70 },
  { field: 'Header Text', headerName: 'Inv/CK#', width: 70 },
  { field: 'Accounting key', headerName: 'Inv/CK#', width: 70 },
  { field: 'Amount loc', headerName: 'Inv/CK#', width: 70 }
];



export default function TablaBenefitPolicy() {
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
               <td></td>
            </tr>
        </tbody>
    </Table>
  );
}