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
  { field: 'Process', headerName: 'Process', width: 70 },
  { field: 'Module', headerName: 'Module', width: 70 },
  { field: 'Action', headerName: 'Action#', width: 70 },
  { field: 'User', headerName: 'User', width: 70 },
  { field: 'Date', headerName: 'Date', width: 70 },
  { field: 'From', headerName: 'From', width: 70 },
  { field: 'To', headerName: 'To', width: 70 },
  { field: 'Duration (Minutes)', headerName: 'DurationMin', width: 70 },
  { field: 'Duration (Hous)', headerName: 'DurationHRS', width: 70 },
  { field: 'Comments', headerName: 'Comments', width: 70 }
];

const rows = [
  {Id: '', headerName: '', width: 70}, 
  {Process: '', headerName: '', width: 70}, 
  {Module: "", headerName: '', width: 70}, 
  {Action: "", headerName: '', width: 70},
  {User: "", headerName: '', width: 70},
  {Date: "", headerName: '', width: 70},
  {From: "", headerName: '', width: 70},
  {To: "", headerName: '', width: 70},
  {DurationMin: "", headerName: '', width: 70},
  {DurationHrs: "", headerName: '', width: 70},
  {Comments: "", headerName: '', width: 70}
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