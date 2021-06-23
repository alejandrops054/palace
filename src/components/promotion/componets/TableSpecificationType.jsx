
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
    { field: 'Specification Type', headerName: 'Specification Type', width: 70 },
    { field: 'Specification Value', headerName: 'DESCRIPTION', width: 70 },
    { field: 'STATUS', headerName: 'STATUS', width: 70 },
  ];
  
  const ValorTabla = [
      {Id:'1', SpecificationType:'CCREP', SpecificationValue:'CALL CENTER REP', Status:'A'},
      {Id:'2', SpecificationType:'CLOS', SpecificationValue:'CLOSER', Status:'A'},
      {Id:'3', SpecificationType:'ASM', SpecificationValue:'EJECUTIVO ASM', Status:'A'}
  ];

  export default function TableSpecificationType() {
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
                                <td className="text-align-justify">{valor.SpecificationType}</td>
                                <td className="text-align-justify">{valor.SpecificationValue}</td>
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