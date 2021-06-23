
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
    { field: 'Order', headerName: 'Order', width: 70 },
    { field: 'Code', headerName: 'Code', width: 70 },
    { field: 'Description', headerName: 'Description', width: 70 }
  ];
  
  const ValorTabla = [
      {Order:'1', Code:'CCREP', Description:'Promocion $500 Resort credit'},
      {Order:'2', Code:'CLOS', Description:'Programa de palace rewards UK'},
      {Order:'3', Code:'ASM', Description:'Niños gratis'}
  ];

  export default function TablaOrder() {
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
                            <tr rowKey={index.Order}>
                                <td className="text-align-justify">{valor.Order}</td>
                                <td className="text-align-justify">{valor.Code}</td>
                                <td className="text-align-justify">{valor.Description}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </div>
        </>
    );
  }