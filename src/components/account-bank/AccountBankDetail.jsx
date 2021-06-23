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

export default function AccountBankDetail() {
  const columns = [
    {
      title: "Id ",
      dataIndex: "id",
      key: "id",
      width: 100,
    },

    {
      title: "Name",
      dataIndex: "name",
      key: "name",
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
      id: "1",
      name: "CONTROLADORA IHC S.A DE C.V",
      description: "PEM",
      status: "Active",
    },
    {
      id: "1",
      name: "CONTROLADORA IHC S.A DE C.V",
      description: "PEM",
      status: "Active",
    },
    {
      id: "1",
      name: "CONTROLADORA IHC S.A DE C.V",
      description: "PEM",
      status: "Active",
    },
    {
      id: "1",
      name: "CONTROLADORA IHC S.A DE C.V",
      description: "PEM",
      status: "Active",
    },
  ];
  return (
    <>
      <Card>
        <CardBody>
          <CardTitle>
            <h3>Account Bank</h3>
          </CardTitle>
          <br />
          <Row>
            <Col xs="3">
              <Label>Code</Label>
              <Input type="text" />
            </Col>
          </Row>
          <br />
          <Row>
            <Col xs="3">
              <Label>Bank </Label>
              <Input type="select">
                <option>Santander</option>
              </Input>
            </Col>
          </Row>
          <br />
          <Row>
            <Col xs="3">
              <Label>Account</Label>
              <Input type="text" />
            </Col>
          </Row>
          <br />
          <Row>
            <Col xs="3">
              <Label>Merchar Code</Label>
              <Input type="text" />
            </Col>
          </Row>
          <br />
          <Row>
            <Col xs="3">
              <Label>Account Location</Label>
              <Input type="text" />
            </Col>
          </Row>
          <br />
          <Row>
            <Col xs="3">
              <Label>Company </Label>
              <Input type="select">
                <option>7 - PALACE ELITE S.A DE CV</option>
              </Input>
            </Col>
          </Row>
          <br />
          <Row>
            <Col xs="3">
              <Label>Currency </Label>
              <Input type="select">
                <option>MX</option>
              </Input>
            </Col>
            <Col xs="3">
              <Label>Room </Label>
              <Input type="select">
                <option>SUNRISE</option>
              </Input>
            </Col>
            <Col xs="3">
              <Label>Status </Label>
              <Input type="select">
                <option>Alta</option>
              </Input>
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
