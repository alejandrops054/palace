/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/
import React from 'react';
import { Card, Row, Col, Form, Input, Label } from 'reactstrap'
import DataTable from 'react-data-table-component';



const columns = [
    {
        name:'',
        selector:'check',
        sortable:true,
        cell: row => ( <Input type='checkbox'/> ),
    },
    {
        name: 'Group',
        selector: 'group',
        sortable:true,
    },
    {
        name: 'Total Access',
        selector: 'total',
        sortable: true,
    },
];
const data = [
    { check:'', group:'', total:''}
];
const customStyles = {
    rows: {
      style: {
        minHeight: '72px', // override the row height
      }
    },
    headCells: {
      style: {
        fontSize:'18px',
        paddingLeft: '8px', // override the cell padding for head cells
        paddingRight: '8px',
      },
    },
    cells: {
      style: {
        fontSize:'15px',
        paddingLeft: '8px', // override the cell padding for data cells
        paddingRight: '8px',
      },
    },
  };


const SpecialGroupTab1 = () => {
    return(
        <Card>
            <Row>
                <Row>
                    <DataTable className='table' columns={columns} data={data} customStyles={customStyles}/>
                </Row>
            </Row>
        </Card>
    )
}

export default SpecialGroupTab1