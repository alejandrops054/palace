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
  Button,
  ButtonGroup
} from "reactstrap";

export default function Portafoliocompanies() {
  const columns = [
    {
      title: "Code",
      dataIndex: "code",
      key: "code",
      width: 100,
    },

    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      width: 150,
    },
    {
      title: "Number Identification Fiscal",
      dataIndex: "number",
      key: "number",
      width: 100,
    }
  ];
  const data = [
    {
      code: "CIHC",
      name: "CONTROLADORA IHC S.A DE C.V",
      number: "CIHC121455",
    },
    {
        code: "CIHC",
        name: "CONTROLADORA IHC S.A DE C.V",
        number: "CIHC121455",
      },
      {
        code: "CIHC",
        name: "CONTROLADORA IHC S.A DE C.V",
        number: "CIHC121455",
      },
      {
        code: "CIHC",
        name: "CONTROLADORA IHC S.A DE C.V",
        number: "CIHC121455",
      },
      {
        code: "CIHC",
        name: "CONTROLADORA IHC S.A DE C.V",
        number: "CIHC121455",
      },
      {
        code: "CIHC",
        name: "CONTROLADORA IHC S.A DE C.V",
        number: "CIHC121455",
      },
      {
        code: "CIHC",
        name: "CONTROLADORA IHC S.A DE C.V",
        number: "CIHC121455",
      },
      {
        code: "CIHC",
        name: "CONTROLADORA IHC S.A DE C.V",
        number: "CIHC121455",
      },
  ];
  return (
    <>
      <Card>
        <CardBody>
          <CardTitle>
            <h3>Portafolio companies</h3>
          </CardTitle>          
          <br />
          <span>Catalog of portafolio companies</span>
          <Row>
            <Col xs="12">
              <Table columns={columns} dataSource={data} />
            </Col>
          </Row>
          <Row>
            <Col xs="7">
            </Col>
            <Col xs="5">
            <ButtonGroup>
            <Button color="primary">Log</Button>
            <Button color="primary">Add</Button>
            <Button color="primary">Properties</Button>
            <Button color="primary">Add Like</Button>
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
