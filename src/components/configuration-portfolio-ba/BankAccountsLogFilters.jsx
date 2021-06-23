/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/

import React from "react";
import { Row, Col, Input, Label, Button } from "reactstrap";

function BankAccountsLogFilters() {
  return (
    <>
      <Row>
        <Col lg={{ size: 3 }} md={{ size: 3 }} sm={{ size: 3 }}>
          <Label>Date From:</Label>
          <Input type="date" />
        </Col>
        <Col
          lg={{ size: 3, offset: 3 }}
          md={{ size: 3, offset: 3 }}
          sm={{ size: 3, offset: 3 }}
        >
          <Label>Field Name:</Label>
          <Input type="text" />
        </Col>
        <Col>
          <Button>Apply Filter</Button>
        </Col>
      </Row>
      <Row>
        <Col lg={{ size: 3 }} md={{ size: 3 }} sm={{ size: 3 }}>
          <Label>Date To:</Label>
          <Input type="date" />
        </Col>
        <Col>
          <Label>User:</Label>
          <Input type="text" />
        </Col>
        <Col>
          <Label>Value:</Label>
          <Input type="text" />
        </Col>
        <Col>
          <Button>Clear Filter</Button>
        </Col>
      </Row>
    </>
  );
}

export default BankAccountsLogFilters;
