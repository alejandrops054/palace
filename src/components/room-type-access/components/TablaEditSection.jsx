
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
    { field: 'Lenguage', headerName: 'Lenguage', width: 70 },
  ];
  
  const Data = [
      {Id:'', Lenguage:'English'},
      {Id:'', Lenguage:'Portuguese'},
      {Id:'', Lenguage:'Spansh'}
  ]
  
  export default function TablaEditSection() {
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
                      <tr rowKey={index.Id}>
                          <td>{valor.Id}</td>
                          <td>{valor.Lenguage}</td>
                      </tr>
                  )
              })}
          </tbody>
      </Table>
    );
  }