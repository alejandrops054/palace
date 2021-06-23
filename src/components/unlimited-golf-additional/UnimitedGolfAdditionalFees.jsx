/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/
import React from 'react';
import Table from 'react-bootstrap/Table'

const columns = [
    { field: 'Code', headerName: 'Code', width: 70 },
    { field: 'Description', headerName: 'Description', width: 70 },
    { field: 'Cost', headerName: 'Cost', width: 70 },
    { field: 'Use Date From', headerName: 'Use Date From', width: 70 },
    { field: 'Use Date To', headerName: 'Use Date To', width: 70 },
    { field: 'Use Year', headerName: 'Use Year', width: 70 },
    { field: 'Print Date', headerName: 'Print Date', width: 70 },
    { field: 'Status', headerName: 'Status', width: 70 },
  ];
  
  const Data = [
      {Code:'1', Description:'UNIMITED GOLF ADDICTIONAL', Cost:'125,000', UseDateFrom:'01/01/2021', UseDateTo:'12/31/2021', UseYear:'2021', PrintDate:'10/01/2020', Status:'A'}]
  
  export default function UnimitedGolfAdditionalFees() {
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
              {Data.map((valor,index)=>{
                  return(
                      <tr rowKey={index.Code}>
                          <td>{valor.Code}</td>
                          <td>{valor.Description}</td>
                          <td>{valor.Cost}</td>
                          <td>{valor.UseDateFrom}</td>
                          <td>{valor.UseDateTo}</td>
                          <td>{valor.UseYear}</td>
                          <td>{valor.PrintDate}</td>
                          <td>{valor.Status}</td>
                      </tr>
                  )
              })}
          </tbody>
      </Table>
    );
  }