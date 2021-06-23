/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/

import React from "react";
import { Button, Col, Input, Label, Row, Container } from "reactstrap";
import { InfoMembersNoContainer } from "../index";
import Table from "rc-table";

const columns = [
  {
    title: "Order",
    dataIndex: "order",
    key: "order",
    width: 130,
  },
  {
    title: "Field Name",
    dataIndex: "fn",
    key: "fn",
    width: 130,
  },
  {
    title: "Original",
    dataIndex: "og",
    key: "og",
    width: 130,
  },
  {
    title: "Change",
    dataIndex: "change",
    key: "change",
    width: 130,
  },
];

function LogDetail(props) {
  const { title, module, action, user, date, column, data } = props;
  return (
    <Container fluid>
      <h4>{title ? title : "Titulo"}</h4>
      <Row>
        <Col>
          <InfoMembersNoContainer
            title="User"
            text={user ? user : "NOMBRE DE PRUEBA"}
          />
        </Col>
        <Col>
          <InfoMembersNoContainer
            title="Module"
            text={module ? module : "Catalog"}
          />
        </Col>
        <Col>
          <Label>field Name:</Label>
          <Input type="text" />
        </Col>
        <Col>
          <Button>Apply Filter</Button>
        </Col>
      </Row>
      <Row>
        <Col>
          <InfoMembersNoContainer
            title="Date/Time"
            text={date ? date : "6/30/2020 4:31 PM"}
          />
        </Col>
        <Col>
          <InfoMembersNoContainer
            title="Action"
            text={action ? action : "AddCatalog"}
          />
        </Col>
        <Col>
          <Label>Value:</Label>
          <Input type="text" />
        </Col>
        <Col>
          <Button>Clear Filter</Button>
        </Col>
      </Row>
      <Table columns={column} data={data} className="table" />
    </Container>
  );
}

export default LogDetail;
