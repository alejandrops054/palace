/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/
import React from 'react';
import Table from 'react-bootstrap/Table'
import {Button} from "../index";

const columns = [
    { field: 'Code', headerName: 'Code', width: 70 },
    { field: 'Description', headerName: 'Description', width: 70 },
    { field: 'Status', headerName: 'Status', width: 70 },
    { field: 'Hotels Zone', headerName: 'Hotels Zone', width: 70 }
  ];
  
  const Data = [
      {Code:'JM', Description:'MOON PALACE JAMAICA', Status:'A', HotelsZone:'Caribe'}]
  
  export default function TablaUsuarios() {
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
                          <td>{valor.Status}</td>
                          <td>{valor.HotelsZone}</td>
                      </tr>
                  )
              })}
          </tbody>
      </Table>
    );
  }