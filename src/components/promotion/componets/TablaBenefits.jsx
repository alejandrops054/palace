
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
    { field: 'Id', headerName: 'Id', width: 70 },
    { field: 'Market', headerName: 'Market', width: 70 },
    { field: 'Market Defined stay', headerName: 'Market Defined stay', width: 70 },
    { field: 'Referral regular stay', headerName: 'Referral regular stay', width: 70 },
    { field: 'Bonus sttay/ Univesal credit', headerName: 'Bonus sttay/ Univesal credit', width: 70 },
    { field: 'Benefit to be award', headerName: 'Id', width: 70 },
    { field: 'Number Couples', headerName: 'Number Couples', width: 70 }
  ];
  
  const ValorTabla = [
      {Id:'1', Market:'USA', MarketDefined:'7', Referral:'7',Bonus:'1',Benefit:'Bonus Week', Number:'2'},
      {Id:'2', Market:'MEX', MarketDefined:'7', Referral:'7',Bonus:'2',Benefit:'Bonus Week', Number:'2'},
      {Id:'3', Market:'CANADA', MarketDefined:'4', Referral:'1',Bonus:'3',Benefit:'Bonus Week', Number:'2'}
  ];

  export default function TablaBenefits() {
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
                                <td className="text-align-justify">{valor.Market}</td>
                                <td className="text-align-justify">{valor.MarketDefined}</td>
                                <td className="text-align-justify">{valor.Referral}</td>
                                <td className="text-align-justify">{valor.Bonus  }</td>
                                <td className="text-align-justify">{valor.Benefit  }</td>
                                <td className="text-align-justify">{valor.Number  }</td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </div>
        </>
    );
  }