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
    { field: 'Country', headerName: 'Country', width: 70 },
    { field: 'Status', headerName: 'Status', width: 70 },
    { field: 'Fiscal ER', headerName: 'Fiscal ER', width: 70 },
    { field: 'Fiscal Date', headerName: 'Fiscal Date', width: 70 },
    { field: 'Sale Date', headerName: 'Sale Date', width: 70 },
    { field: 'Purchase ER', headerName: 'Purchase ER', width: 70 },
    { field: 'Purchase Date', headerName: 'Purchase Date', width: 70 },
  ];
  
  const Data = [
      {Code:'MX', Description:'PESO MEXICANO', Country:'MX',Status:'A', FiscalER:'$1,000', FiscalDate:'10/29/2001', SaleDate:'4/11/2003', Purchase:'$1,000', PurchaseDate:'10/29/2001'}]
  
  export default function Currencies() {
    return (
         <>
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
                          <td>{valor.Country}</td>
                          <td>{valor.Status}</td>
                          <td>{valor.FiscalER}</td>
                          <td>{valor.FiscalDate}</td>
                          <td>{valor.SaleDate}</td>
                          <td>{valor.Purchase}</td>
                          <td>{valor.PurchaseDate}</td>
                      </tr>
                  )
              })}
          </tbody>
      </Table>
         </>
    );
  }