/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/

import React from "react";
import {
  Col,
  Row,
  Input,
  InputGroup,
  InputGroupText,
  Label,
  InputGroupAddon,
  Progress,
  Button,
} from "reactstrap";
import { InfoMembersNoContainer } from "..";
function portfolioSales() {
  return (
    <>
      <Row className="d-flex justify-content-center">
        <Col>
          <h3>Portfolio Sales</h3>
        </Col>
      </Row>
      <Row>
        <Col>
          <Label>New Portfolio: </Label>
          <Input type="select" />
        </Col>
        <Col>
          <Label>File path: </Label>
          <InputGroup>
            <Input type="textarea" />
            <InputGroupAddon addonType="append">
              <InputGroupText>Open File</InputGroupText>
            </InputGroupAddon>
          </InputGroup>
        </Col>
      </Row>
      <Row>
        <Col>
          <Label>Comment:</Label>
          <Input type="textarea" />
        </Col>
      </Row>
      <Row>
        <Col>
          <InfoMembersNoContainer title="Records to process" text="0" />
        </Col>
        <Col className="mt-3">
          <Label>Progress</Label>
          <Progress value="25" />
        </Col>
        <Col>
          <Button>Process</Button>
          <Button>Cancel</Button>
        </Col>
      </Row>
    </>
  );
}

export default portfolioSales;
