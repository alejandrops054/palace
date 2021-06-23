/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos 
*/

import React from "react";
import {  Form, Label, Input, Row, Col, Card } from 'reactstrap';
import DataTable from 'react-data-table-component';


const columns = [
    {
      name: <i className="fas fa-caret-right"></i>,
      selector: "priority",
      sortable:true
    },
    {
      name: "Moom Palace Cancún",
      selector: "mom",
      sortable:true,
    },
  ];

  const customStyles = {
    rows: {
      style: {
        minHeight: '72px', // override the row height
      }
    },
    headCells: {
      style: {
        fontSize: '15px',
        paddingLeft: '8px', // override the cell padding for head cells
        paddingRight: '8px',
      },
    },
    cells: {
      style: {
        fontSize: '13px',
        paddingLeft: '8px', // override the cell padding for data cells
        paddingRight: '8px',
      },
    },
  };
  
  const data = [{}];

const AccessGolfCoursess = () => {
    return(
        <>
        <div className="d-flex justify-content-end">
            <button id="consult" className="btn btn-link main" type="button"><i className="fas fa-plus"></i>{' '}Add</button>
        </div>
        <Card>
            <h3>Access Golf Coursess</h3>
            <Form>
                <Row>
                    <Col lg='12'>
                    <DataTable
                        className="table"
                        id="resume-table"
                        customStyles={customStyles}
                        columns={columns}
                        data={data}
                        responsive
              />
                    </Col>
                </Row>
                <Row>
                    <Col lg='6'>
                        <Label>Price</Label>
                        <Input type='select'/>
                    </Col>
                </Row>
            </Form>
        </Card>
        </>
    )
}

export default AccessGolfCoursess