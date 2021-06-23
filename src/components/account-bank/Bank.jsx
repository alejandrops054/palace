/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
nn*/
import React, { useState } from "react";
import "antd/dist/antd.css";
import { Table } from "antd";
import {
  Col,
  Row,
  Card,
  CardBody,
  CardTitle,
  Button,
  ButtonGroup
} from "reactstrap";

export default function Bank() {
  const columns = [
    {
      title: "Code",
      dataIndex: "code",
      key: "code",
      width: 100,
    },

    {
      title: "Description",
      dataIndex: "description",
      key: "description",
      width: 100,
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      width: 100,
    },
  ];
  const data = [
    {
      code: "1",
      description: "Santander",
      status: "A",
    },
    {
        code: "2",
        description: "Bancomer",
        status: "A",
      },
      {
        code: "3",
        description: "Banamex",
        status: "A",
      },
      {
        code: "4",
        description: "Banorte",
        status: "A",
      },
      {
        code: "5",
        description: "AMerican Expres",
        status: "A",
      },
    
  ];
  return (
    <>
      <Card>
        <CardBody>
          <CardTitle>
            <h3>Bank</h3>
          </CardTitle>
          <br />
          <Row>
            <Col xs="12">
              <Table columns={columns} dataSource={data} />
            </Col>
          </Row>
          <Row>
          <Col xs="2">
              <span>Records: 8</span>
            </Col>
          <Col xs="7">
            </Col>
            <Col xs="3">
              <ButtonGroup>
                <Button color="primary">Log</Button>
                <Button color="primary">Add</Button>
                <Button color="primary">Properties</Button>
                <Button color="primary">Refresh</Button>
                <Button color="primary">Close</Button>
              </ButtonGroup>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </>
  );
}
