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
    { field: '#', headerName: '#', width: 70 },
    { field: 'User Name', headerName: 'User Name', width: 70 },
    { field: 'User Type', headerName: 'User Type', width: 70 },
    { field: 'User of Employee', headerName: 'User of Employee', width: 70 },
    { field: 'User full Name', headerName: 'User full Name', width: 70 },
    { field: 'Email', headerName: 'Email', width: 70 },
    { field: 'Status', headerName: 'Status', width: 70 },
  ];
  
  const Data = [
      {Id:'1', UserName:'Aarce', UserType:'Verificador legal club', UserOfEmployee:'942866', UserFullName:'Ana Paola Arece', Email:'aarce@palacclite.com.mx', Status:<Button className="btn btn-primary" title="Active" style={{width:'20%'}}/>}
  ]
  
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
                      <tr rowKey={index.Id}>
                          <td>{valor.Id}</td>
                          <td>{valor.UserName}</td>
                          <td>{valor.UserType}</td>
                          <td>{valor.UserOfEmployee}</td>
                          <td>{valor.UserFullName}</td>
                          <td>{valor.Email}</td>
                          <td>{valor.Status}</td>
                      </tr>
                  )
              })}
          </tbody>
      </Table>
    );
  }