/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contrato1s
Comentarios: xxxxx
*/

import React from "react";
import {
    Col,
    Input,
    Label,
    Row,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
  } from "reactstrap";

function MemberWeeksInquiry() {
  return (
    <>
      <h4>MemberWeeksInquiry</h4>
      <Row>
        <Row>
          <Col>
            <Label>CO #</Label>
            <Input type="number" />
          </Col>
          <Col>
            <Label>APPLIC #</Label>
            <InputGroup>
              <Input type="number" />
              <InputGroupAddon addonType="append">
                <InputGroupText>
                  <i className="fas fa-search"></i>
                </InputGroupText>
              </InputGroupAddon>
            </InputGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <Label>REL:</Label>
            <Input type="number" />
          </Col>
          <Col>
            <Label>REF:</Label>
            <Input type="number" />
          </Col>
        </Row>
        <Row>
          <Col>
            <Label>NAME:</Label>
            <Input type="text" />
          </Col>
        </Row>
      </Row>
    </>
  );
}

export default MemberWeeksInquiry;
