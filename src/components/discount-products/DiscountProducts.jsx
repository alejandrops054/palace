/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: La tabla esta incompleta revisar 18/01/2021
*/
import React, { useState } from "react";
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
  Button,
  ButtonGroup
} from "reactstrap";

export default function DiscountProducts() {
  const columns = [
    {
      title: "Code ",
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
      description: "5% POR VENTA",
      status: "Alta",
    },
    {
      code: "2",
      description: "CREDITO UNIVERSAL",
      status: "Baja",
    },
    {
      code: "3",
      description: "SOBRE PRECIO",
      status: "Alta",
    },
    {
      code: "4",
      name: "CONTROLADORA IHC S.A DE C.V",
      description: "PEM",
      status: "Alta",
    },
  ];
  return (
    <>
      <Card>
        <CardBody>
          <CardTitle>
            <h3>Discount Product</h3>
          </CardTitle>
          <br />
          <span>Catalog of Type Products</span>
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
          <Col xs="5">
            </Col>
            <Col xs="5">
              <ButtonGroup>
                <Button color="primary">Add Type</Button>
                <Button color="primary">Product</Button>
                <Button color="primary">Log</Button>
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
