/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/

import React from "react";
import { Container, Row, Col, Label, Input, Button } from "reactstrap";

function AccountsReceivableFilters() {
  return (
    <Row>
      <Col className="border">
        <Row>
          <Label>
            National or Foreigners{" "}
            <Input type="select">
              <option>TODOS</option>
            </Input>
          </Label>
        </Row>
        <Row>
          <Label>
            Company{" "}
            <Input type="select">
              <option></option>
            </Input>
          </Label>
        </Row>
        <Row>
          <Label>
            Portfolio{" "}
            <Input type="select">
              <option>ALL</option>
            </Input>
          </Label>
        </Row>
        <Row className="border">
          <span>Active|Temp|Both</span>
          <Col>
            Type Member{" "}
            <Input type="select">
              <option>Both</option>
            </Input>
          </Col>
        </Row>
      </Col>
      <Col className="border">
        <Row>
          <Label>
            Number Account{" "}
            <Input type="select">
              <option></option>
            </Input>
          </Label>
        </Row>
        <Row>
          <Label>
            Society <Input type="text" />
          </Label>
        </Row>
        <Row>
          <Label>
            Date <Input type="date" />
          </Label>
        </Row>
        <Row>
          <Label>
            Application <Input type="text" />
          </Label>
        </Row>
      </Col>
    </Row>
  );
}
export default AccountsReceivableFilters;
