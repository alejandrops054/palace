/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/
import React from "react";
import 'antd/dist/antd.css';
import { Table } from 'antd';
import {
    Col,
    Row,
    Card,
   CardBody,
   CardTitle,

  } from "reactstrap";

export default function Jobs () {
    const columns = [
        {
            title: 'Id',
            dataIndex: 'id',
            key: 'id',
               width: 50,
        },
        {
            title: 'Descripcion',
            dataIndex: 'descripcion',
            key: 'descripcion',
               width: 100,
        },
      

    ];
    const data = [
        { id: "CCREP", descripcion: "Call Center Rep"   },
        { id: "ASM", descripcion: "Ejecutivo Asm"   },
        { id: "LR", descripcion: "Legal Representative"   },
        { id: "VLO", descripcion: "VLO"   },



        
       
    ];
    return (
    <>
    <Card>
        <CardBody>
          <CardTitle>
            <h3>Jobs</h3>
          </CardTitle>
          <br />
     
            <Row>
            <Col xs="12">
            <Table columns={columns} dataSource={data}/>  
            </Col>
            </Row>
            
          </CardBody>
          </Card>
    </>
  );
};
