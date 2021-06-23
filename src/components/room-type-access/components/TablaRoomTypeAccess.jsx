
/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/
import React from 'react';
import Table from 'react-bootstrap/Table'

const columns = [
    { field: 'CODE', headerName: 'CODE', width: 70 },
    { field: 'DESCRIPTION', headerName: 'DESCRIPTION', width: 70 },
    { field: 'STATUS', headerName: 'STATUS', width: 70 },
    { field: 'CATEGORY', headerName: 'CATEGORY', width: 70 },
    { field: 'ROOM TYPE', headerName: 'ROOM TYPE', width: 70 }
  ];
  
  const Data = [
      {Code:'CCREP', Description:'CALL CENTER REP', Status:'A',Category:'VILLA' ,Roomtype:''},
      {Code:'CLOS', Description:'CLOSER', Status:'A',Category:'VILLA', Roomtype:''},
      {Code:'ASM', Description:'EJECUTIVO ASM', Status:'A',Category:'VILLA',Roomtype:''}
  ]
  
  export default function TablaRoomTypeAccess() {
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
              {Data.map((index, valor)=>{
                  return(
                      <tr rowKey={index.Code}>
                          <td>{valor.Code}</td>
                          <td>{valor.Description}</td>
                          <td>{valor.Status}</td>
                          <td>{valor.Category}</td>
                          <td>{valor.Roomtype}</td>
                      </tr>
                  )
              })}
          </tbody>
      </Table>
    );
  }