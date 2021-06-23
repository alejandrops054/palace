/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/

import React from "react";
import { Button, Col, Input, Label, Row } from "reactstrap";
import { InfoMembersNoContainer } from "..";
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

function BankAccountsLogDetail() {
  return (
    <>
      <h4>Bank Accounts Login Detail</h4>
      <Row>
        <Col>
          <InfoMembersNoContainer title="User" text="NOMBRE DE PRUEBA" />
        </Col>
        <Col>
          <InfoMembersNoContainer title="Module" text="Catalog" />
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
          <InfoMembersNoContainer title="Date/Time" text="6/30/2020 4:31 PM" />
        </Col>
        <Col>
          <InfoMembersNoContainer title="Action" text="AddCatalog" />
        </Col>
        <Col>
          <Label>Value:</Label>
          <Input type="text" />
        </Col>
        <Col>
          <Button>Clear Filter</Button>
        </Col>
      </Row>
      <Table columns={columns} />
    </>
  );
}

export default BankAccountsLogDetail;
