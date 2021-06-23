/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/

import React from "react";
import { Container, Row, Col, Label, Input, Button } from "reactstrap";
import AccountsReceivableFilters from "./AccountsReceivableFilters";

function AccountsReceivable() {
  return (
    <Container fluid>
      <h2>ACCOUNTS RECEIVABLE</h2>
      <AccountsReceivableFilters />
      <Row className="border mt-3">
        <span>Options</span>
        <Col>
          <Label check>
            <Input type="checkbox" /> Current
          </Label>
        </Col>
        <Col>
          <Label check>
            <Input type="checkbox" /> Generate SAP
          </Label>
        </Col>
        <Col>
          <Label check>
            <Input type="checkbox" /> Open report after generate
          </Label>
        </Col>
      </Row>
      <Row className="mt-2">
        <Col lg={{ offset: 5 }}>
          <Button>Print</Button>
          <Button>Close</Button>
        </Col>
      </Row>
    </Container>
  );
}

export default AccountsReceivable;
