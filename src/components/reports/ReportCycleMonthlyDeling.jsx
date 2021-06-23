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
  FormGroup,
} from "reactstrap";

export default function ReportCycleMothlyDeling() {
  return (
    <>
      <Card>
        <CardBody>
          <CardTitle>
            <h3>Cycle Montly Deling Report</h3>
          </CardTitle>
          <br />
          <Row>
            <Col xs="4">
              <Label>Cycle Code</Label>
              <Input type="select" disabled>
                <option>1</option>
              </Input>
            </Col>
          </Row>
          <br />
          <Row>
            <Col>
              <Label check>
                <Input type="checkbox" /> All Companys
              </Label>
            </Col>
          </Row>
          <br/>
          <Row>
            <Col xs="4">
              <Label>Company</Label>
              <Input type="select" disabled>
                <option>5</option>
              </Input>
            </Col>
          </Row>
          <br />
          <Row>
            <Col xs="4">
              <Label>Portafolio</Label>
              <Input type="select" disabled>
                <option>ALL</option>
              </Input>
            </Col>
          </Row>
          <br />
          <Row>
            <Col xs="4">
              <Label>CNX</Label>
              <Input type="select" disabled>
                <option>Temporal</option>
              </Input>
            </Col>
          </Row>
          <br/>
          <Row>
            <Col>
              <Label check>
                <Input type="checkbox" /> By Date
              </Label>
            </Col>
          </Row>
          <br/>
          <Row>
          <Col xs="1">
            </Col>
            <Col xs="3">
            <Label>From</Label>
              <Input type="date" />
            </Col>
            <Col xs="3">
            <Label>To</Label>
              <Input type="date" />
            </Col>
          </Row>
          <br/>
          <Row>
            <Col>
              <Label check>
                <Input type="checkbox" /> Do you want to the open the report?
              </Label>
            </Col>
          </Row>
          <br/>
          <Row>
            <Col xs="3"></Col>
            <Col xs="3">
              <ButtonGroup>
                <Button color="primary">Generate</Button>
                <Button color="primary">Cancel</Button>
              </ButtonGroup>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </>
  );
}
