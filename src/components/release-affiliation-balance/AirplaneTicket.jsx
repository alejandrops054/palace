/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/

import React from "react";
import { Row, Col, Container, Input, Label, Button } from "reactstrap";
import { InfoMembersNoContainer } from "..";

function AirplaneTicket() {
  return (
    <Container fluid>
      <h2>Airplane Ticket</h2>
      <Row>
        <h4>Company Information</h4>
        <Row>
          <Label>
            Company: <Input type="text" />{" "}
          </Label>
        </Row>
        <Row>
          <InfoMembersNoContainer title="Name" text="Company Name" />
        </Row>
      </Row>
      <Row>
        <Row>
          <Label>
            From date <Input type="date" />
          </Label>
        </Row>
        <Row>
          <Label>
            To date <Input type="date" />
          </Label>
        </Row>
        <Row>
          <Label>
            Order by{" "}
            <Input type="select">
              <option>Sale Date</option>
            </Input>
          </Label>
        </Row>
      </Row>
      <Row className="border">
        <span>Status</span>
        <Row>
          <Col>
            <Label check>
              <Input type="radio" name="radio1" disabled /> Available
            </Label>
          </Col>
          <Col>
            <Label check>
              <Input type="radio" name="radio1" disabled /> Owe Monthly
            </Label>
          </Col>
          <Col>
            <Label check>
              <Input type="radio" name="radio1" disabled /> Reservation
            </Label>
          </Col>
        </Row>
        <Row>
          <Col>
            <Label check>
              <Input type="radio" name="radio1" disabled /> Transfered
            </Label>
          </Col>
          <Col>
            <Label check>
              <Input type="radio" name="radio1" disabled /> Used
            </Label>
          </Col>
          <Col>
            <Label check>
              <Input type="radio" name="radio1" disabled /> Cancel
            </Label>
          </Col>
          <Col>
            <Label check>
              <Input type="radio" name="radio1" disabled /> All
            </Label>
          </Col>
        </Row>
      </Row>
      <Row>
        <Label>
          {" "}
          <Input type="checkbox" /> Abrir reporte despues de generar
        </Label>
      </Row>
      <Row>
        <Col lg={{ offset: 5 }} md={{ offset: 5 }}>
          <Button>Execute</Button>
          <Button>Close</Button>
        </Col>
      </Row>
    </Container>
  );
}

export default AirplaneTicket;
