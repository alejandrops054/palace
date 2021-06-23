
/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/
import React from 'react';
import Table from 'react-bootstrap/Table'

const columns = [
    { field: 'ID', headerName: 'ID', width: 70 },
    { field: 'TEMPLATE NAME', headerName: 'TEMPLATE NAME', width: 70 },
    { field: 'STATUS', headerName: 'STATUS', width: 70 }
  ];
  
  const Data = [
      {ID:'1', TEMPLATENAME:'CIHC', STATUS:'Active'},
      {ID:'2', TEMPLATENAME:'HPR', STATUS:'Active'},
      {ID:'2', TEMPLATENAME:'HPR', STATUS:'Active'}
  ]
  
  export default function TablaTemplateTitles() {
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
                      <tr rowKey={index.ID}>
                          <td>{valor.ID}</td>
                          <td>{valor.TEMPLATENAME}</td>
                          <td>{valor.STATUS}</td>
                      </tr>
                  )
              })}
          </tbody>
      </Table>
    );
  }