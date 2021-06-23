
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
    { field: 'ROLE', headerName: 'ROLE', width: 70 }
  ];
  
  const Data = [
      {CODE:'CCREP', DESCRIPTION:'CALL CENTER REP', STATUS:'A',ROLE:''},
      {CODE:'CLOS', DESCRIPTION:'CLOSER', STATUS:'A', ROLE:''},
      {CODE:'ASM', DESCRIPTION:'EJECUTIVO ASM', STATUS:'A', ROLE:''}
  ]
  
  export default function TableJobs() {
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
                      <tr rowKey={index.CODE}>
                          <td>{valor.CODE}</td>
                          <td>{valor.DESCRIPTION}</td>
                          <td>{valor.STATUS}</td>
                          <td>{valor.ROLE}</td>
                      </tr>
                  )
              })}
          </tbody>
      </Table>
    );
  }