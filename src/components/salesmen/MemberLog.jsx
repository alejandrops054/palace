/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/
import React from "react";
import "antd/dist/antd.css";
import { Table } from "antd";
import {
  Col,
  Row,
  Card,
  CardBody,
  CardTitle,
  Input,
  Label,
  FormGroup,
  Button,
  ButtonGroup,
} from "reactstrap";

export default function MemberLog() {
    const columns = [
        {
          title: "User ",
          dataIndex: "user",
          key: "user",
          width: 100,
        },
    
        {
          title: "Date/Time",
          dataIndex: "date",
          key: "date",
          width: 100,
        },
        {
          title: "Module ",
          dataIndex: "module",
          key: "module",
          width: 100,
        },
        {
          title: "Action ",
          dataIndex: "action",
          key: "action",
          width: 100,
        },
        {
          title: "Original ",
          dataIndex: "original",
          key: "original",
          width: 150,
        },
        {
          title: "Changes ",
          dataIndex: "changes",
          key: "changes",
          width: 150,
        },
      ];
  const data = [
    {
      user: "Willian Jesus Torres",
      date: "1/12/12 ",
      module: "Membership Inpu",
      action: "Delete Saleman",
      original: "RECTNUM-63212",
      changes: "RECNUM-4421",


    },
    {
        user: "Willian Jesus Torres",
        date: "1/12/12 ",
        module: "Membership Inpu",
        action: "Delete Saleman",
        original: "RECTNUM-63212",
        changes: "RECNUM-4421",
  
  
      },
      {
        user: "Willian Jesus Torres",
        date: "1/12/12 ",
        module: "Membership Inpu",
        action: "Delete Saleman",
        original: "RECTNUM-63212",
        changes: "RECNUM-4421",
  
  
      },
   
  ];
  return (
    <>
      <Card>
        <CardBody>
          <CardTitle>
            <h3>Member Log</h3>
          </CardTitle>
          <br />
             <Row>
              <Col xs="3">
                <Label>Date From</Label>
                <Input type="Date" />
              </Col>
              <Col xs="3">
                
              </Col>
              <Col xs="3">
                <Label>Field Name </Label>
                <Input type="text" />
              </Col>
              <Col xs="3">
                <br />
                <Button color="primary">Apply Filter</Button>
              </Col>
            </Row>
            <br />
            <Row>
              <Col xs="3">
                <Label>Date To </Label>
                <Input type="Date" />
              </Col>
              <Col xs="3">
                <Label>User </Label>
                <Input type="text" />
              </Col>
              <Col xs="3">
                <Label> Value</Label>
                <Input type="text" />
              </Col>
              <Col xs="3">
                <br />
                <Button color="primary">Clear Filter</Button>
              </Col>
            </Row>
           <br />
          <Row>
            <Col xs="12">
              <Table columns={columns} dataSource={data} />
            </Col>
          </Row>
          <Row>
            <Col xs="9">
            </Col>
            <Col xs="3">
            <Button color="primary">Details</Button>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </>
  );
}
