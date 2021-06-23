/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: La tabla esta incompleta revisar 18/01/2021
Agregando comnentario de testing
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
  Button,
  ButtonGroup
} from "reactstrap";

export default function AccountBank() {
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
      title: "Merchar Code",
      dataIndex: "merchar",
      key: "merchar",
      width: 100,
    },
    {
      title: "Account",
      dataIndex: "account",
      key: "account",
      width: 100,
    },
    {
      title: "Currency",
      dataIndex: "currency",
      key: "currency",
      width: 100,
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      width: 100,
    },
    {
      title: "Account Location",
      dataIndex: "accountL",
      key: "accountL",
      width: 100,
    },
  ];
  const data = [
    {
      code: "1",
      description: "Santander",
      merchar: "7271271",
      account: "3121211",
      currency: "MX",
      status: "A",
      accountL: "",
    },
    {
        code: "1",
        description: "Santander",
        merchar: "7271271",
        account: "3121211",
        currency: "MX",
        status: "A",
        accountL: "",
      },
      {
        code: "1",
        description: "Santander",
        merchar: "7271271",
        account: "3121211",
        currency: "MX",
        status: "A",
        accountL: "",
      },
      {
        code: "1",
        description: "Santander",
        merchar: "7271271",
        account: "3121211",
        currency: "MX",
        status: "A",
        accountL: "",
      },
      {
        code: "1",
        description: "Santander",
        merchar: "7271271",
        account: "3121211",
        currency: "MX",
        status: "A",
        accountL: "",
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
            <Col xs="8">
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
