
/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/
import React from 'react';
import Table from 'react-bootstrap/Table'

const columns = [
    { field: '', headerName: '', width: 70 },
    { field: 'Room Type Name', headerName: 'Room Type Name', width: 70 },
    { field: 'Room Type', headerName: 'Room Type', width: 70 },
    { field: 'Date From', headerName: 'Date From', width: 70 },
    { field: 'Date To', headerName: '', width: 70 },
    { field: 'Season', headerName: 'Season', width: 70 },
    { field: 'Zone', headerName: 'Zone', width: 70 },
    { field: 'Apply Replacement', headerName: 'Apply Replacement', width: 70 },
    { field: 'Status', headerName: 'Status', width: 70 }
  ];
  
  const Data = [{Id:'',RoomTypeName:'', RoomType:'', DateFrom:'', DateTo:'',Season:'',Zone:'', ApplyReplacement:'', Status}]
  
  export default function TablaProvisionRoomTypePromotional() {
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
                      <tr key={index.Id}>
                          <td>{valor.Id}</td>
                          <td>{valor.RoomTypeName}</td>
                          <td>{valor.RoomType}</td>
                          <td>{valor.DateFrom}</td>
                          <td>{valor.DateTo}</td>
                          <td>{valor.Season}</td>
                          <td>{valor.Zone}</td>
                          <td>{valor.ApplyReplacement}</td>
                          <td>{valor.Status}</td>
                      </tr>
                  )
              })}
          </tbody>
      </Table>
    );
  }