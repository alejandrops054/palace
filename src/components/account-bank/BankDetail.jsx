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

export default function BankDetail() {
  const columns = [
    {
      title: "DESCRIPTION",
      dataIndex: "description",
      key: "description",
      width: 100,
    },

    {
      title: "SHORT DESCRIPTION",
      dataIndex: "shortdes",
      key: "shortdes",
      width: 100,
    },
    {
      title: "SELECCION",
      dataIndex: "seleccionar",
      key: "seleccionar",
      width: 100,
      render: () => <Input type="checkbox" />
      ,

    },
  ];
  const data = [
    {
      description: "AMERICAN EXPRESS",
      shortdes: "AEX",
      seleccionar:  <Input type="checkbox" />
    },
    {
        description: "DINNERS",
        shortdes: "DIN",
        seleccionar:  <Input type="checkbox" />
      },
      {
        description: "DISCOVER",
        shortdes: "DIS",
        seleccionar:  <Input type="checkbox" />
      },
      {
        description: "MASTER CARD",
        shortdes: "MC",
        seleccionar:  <Input type="checkbox" />
      },
      {
        description: "UNDEFINED",
        shortdes: "UND",
        seleccionar:  <Input type="checkbox" />
      },
      {
        description: "VISA",
        shortdes: "V",
        seleccionar:  <Input type="checkbox" />
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
            <Col xs="4">
            <Label>Code</Label>
              <Input type="text" />
            </Col>
            <Col xs="4">
            <Label>Name</Label>
              <Input type="text" />
            </Col>
            <Col xs="4">
            <Label>Status </Label>
              <Input type="select">
                <option>Alta</option>
              </Input>
            </Col>
          </Row>
          <Row>
            <Col xs="12">
              <Table columns={columns} dataSource={data} />
            </Col>
          </Row>
          <Row>
          <Col xs="2">
            </Col>
          <Col xs="7">
            </Col>
            <Col xs="3">
              <ButtonGroup>
                <Button color="primary">Save</Button>
                <Button color="primary">Close</Button>
              </ButtonGroup>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </>
  );
}
