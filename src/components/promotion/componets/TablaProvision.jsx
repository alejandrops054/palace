
/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/
import React from 'react';
import Table from 'react-bootstrap/Table'
import {Input, Select, Checkbox} from "../../index";

const columns = [
    { field: '#', headerName: '#', width: 70 },
    { field: 'Provision', headerName: 'Provision', width: 70 },
    { field: 'Quantity', headerName: 'Quantity', width: 70 },
    { field: 'Validity', headerName: 'Validity', width: 70 },
    { field: 'Status', headerName: 'Status', width: 70 }
  ];
  
  const ValorTabla = [
      {Id:'1', Provision:'IMP WK LBC PROG REFERIDOS PLUS ELITE',Quantity:'1', Validity:'1', Status:'A'},
      {Id:'2', Provision:'IMP WK LBC PROG REFERIDOS PLUS ELITE',Quantity:'1', Validity:'1', Status:'A'},
      {Id:'3', Provision:'IMP WK LBC PROG REFERIDOS PLUS ELITE',Quantity:'1', Validity:'1', Status:'A'}
  ];

  export default function TablaProvision() {
    return (
        <>
        <div>
            <Table className="table table-hover" striped bordered hover>
                <thead>
                    <tr>
                        {columns.map((data)=>{ return(
                            <td key={data.field} className="text-align-justify">{data.field}</td>
                        )})}
                    </tr>
                </thead>
                <tbody>
                    {ValorTabla.map((valor, index)=>{
                        return(
                            <tr rowKey={index.Id}>
                                <td className="text-align-justify">{valor.Id}</td>
                                <td className="text-align-justify">{valor.Provision}</td>
                                <td className="text-align-justify">{valor.Quantity}</td>
                                <td className="text-align-justify">{valor.Validity}</td>
                                <td className="text-align-justify">{valor.Status}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </div>
        </>
    );
  }