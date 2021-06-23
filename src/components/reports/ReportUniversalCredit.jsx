/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
*/
import React, { useState } from "react";
import {
  Col,
  Row,
  Card,
  CardBody,
  CardTitle,
  Input,
  Label,
  Button,
  ButtonGroup,
  FormGroup
} from "reactstrap";

export default function ReportUniversalCredit() {
  return (
    <>
      <Card>
        <CardBody>
          <CardTitle>
            <h3>Universal Credit REF500 (HOTEL)</h3>
          </CardTitle>
          <br />
          <Row>
            <Col xs="12">
              <Card>
                <CardBody>
                  <CardTitle>
                    <h5>Data Rage</h5>
                  </CardTitle>
                  <br />
                  <Row>
            <Col xs="4">
            <Label>Date From</Label>
              <Input type="date" />
            </Col>
          </Row>
          <br/>
          <Row>
            <Col xs="4">
            <Label>Date To</Label>
              <Input type="date" />
            </Col>
          </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <br/>
          <Row>
              <Col>
              <FormGroup check inline>
        <Label check>
          <Input type="checkbox" /> Open report after generate
        </Label>
      </FormGroup>
              </Col>
          </Row>
          <Row>
            <Col xs="2"></Col>
            <Col xs="7"></Col>
            <Col xs="3">
              <ButtonGroup>
                <Button color="primary">Execute</Button>
                <Button color="primary">Close</Button>
              </ButtonGroup>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </>
  );
}
