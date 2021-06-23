/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/
import React from 'react';
import Table from 'react-bootstrap/Table'

const columns = [
  { field: 'ID', headerName: 'id', width: 70 },
  { field: 'Code', headerName: 'Code', width: 70 },
  { field: 'Name', headerName: 'Name', width: 70 },
  { field: 'Number identification fiscal', headerName: 'Time', width: 70 }
];

const dataJSON = [
    {ID:'1', code:'CIHC', Name:'CONTROLADOR IHC S.A DE' ,NumberIdentificationfiscal:'Cih130221V31'},
    {ID:'2', code:'HPR', Name:'HOTEL PALACE RESORTS, S.A.P.I DE C.V' ,NumberIdentificationfiscal:'Cih130221V31'},
    {ID:'2', code:'HPR', Name:'HOTEL PALACE RESORTS, S.A.P.I DE C.V' ,NumberIdentificationfiscal:'Cih130221V31'}
]

export default function TablaPortafolioCompanies() {
  return (
        <Table striped bordered hover>
        <thead>
            <tr>
                {columns.map((data, index)=>{ return(
                    <td key={index}>{data.field}</td>
                )})}
            </tr>
        </thead>
        <tbody>
            {dataJSON.map((item, index) =>{
                return (
                    <tr rowKey={index.ID}>
                        <td>{item.ID}</td>
                        <td>{item.code}</td>
                        <td>{item.Name}</td>
                        <td>{item.NumberIdentificationfiscal}</td>
                    </tr>
                )
            })}
        </tbody>
    </Table>
  );
}