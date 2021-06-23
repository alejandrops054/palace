
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
    { field: 'CODE', headerName: 'CODE', width: 70 },
    { field: 'DESCRIPTION', headerName: 'DESCRIPTION', width: 70 },
    { field: 'STATUS', headerName: 'STATUS', width: 70 },
    { field: 'ORDER', headerName: 'ORDER', width: 70 }
  ];
  
  const ValorTabla = [
      {Id:'1', Code:'CCREP', Description:'CALL CENTER REP', Status:'A',Order:'1'},
      {Id:'2', Code:'CLOS', Description:'CLOSER', Status:'A',Order:'2'},
      {Id:'3', Code:'ASM', Description:'EJECUTIVO ASM', Status:'A',Order:'3'}
  ];

  export default function TablaPromotion2() {
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
                                <td className="text-align-justify">{valor.Code}</td>
                                <td className="text-align-justify">{valor.Description}</td>
                                <td className="text-align-justify">{valor.Status}</td>
                                <td className="text-align-justify">{valor.Order  }</td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </div>
        </>
    );
  }