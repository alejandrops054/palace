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

export default function MemberLogDetail() {
  const columns = [
    {
      title: "Order ",
      dataIndex: "order",
      key: "order",
      width: 100,
    },

    {
      title: "Field Name",
      dataIndex: "fielname",
      key: "fielname",
      width: 100,
    },
    {
      title: "Original",
      dataIndex: "original",
      key: "original",
      width: 100,
    },
    {
        title: "Change",
        dataIndex: "change",
        key: "change",
        width: 100,
      },
  ];
  const data = [
    {
      order: "1",
      fielname: "RECNUM",
      original: "6363",
      change: "",
    },
    {
        order: "2",
        fielname: "RECNUM",
        original: "6363",
        change: "",
      },
      {
        order: "3",
        fielname: "RECNUM",
        original: "6363",
        change: "",
      },
  ];
  return (
    <>
      <Card>
        <CardBody>
          <CardTitle>
            <h3>Member Log Detail</h3>
          </CardTitle>
          <br />
             <Row>
              <Col xs="3">
                <Label>User</Label>
                <Input type="text" />
              </Col>
              <Col xs="3">
                <Label>Module</Label>
                <Input type="text" />
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
                <Label>Date/Time </Label>
                <Input type="Date" />
              </Col>
              <Col xs="3">
                <Label>Actions </Label>
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
        </CardBody>
      </Card>
    </>
  );
}
