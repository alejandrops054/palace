/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
*/
import React, { useState } from "react";
import "antd/dist/antd.css";
import {
  Col,
  Row,
  Card,
  CardBody,
  CardTitle,
  Input,
  Label,
  Button,
  ButtonGroup
} from "reactstrap";

export default function PortafolioCompany() {
  return (
    <>
      <Card>
        <CardBody>
          <CardTitle>
            <h3>Portafolio Company</h3>
          </CardTitle>
          <br />
          <Row>
            <Col xs="3">
              <Label>Code</Label>
              <Input type="text" />
            </Col>
          </Row>
          <br />
          <Row>
            <Col xs="6">
              <Label>Name </Label>
              <Input type="text" />
            </Col>
          </Row>
          <br />
          <Row>
            <Col xs="6">
              <Label>Description</Label>
              <Input type="textarea" />
            </Col>
          </Row>
          <br />
          <Row>
            <Col xs="3">
              <Label>InitialDate</Label>
              <Input type="date" />
            </Col>
          </Row>
          <br />
          <Row>
            <Col xs="3">
              <Label>EndDate</Label>
              <Input type="date" />
            </Col>
          </Row>
          <br />
          <Row>
            <Col xs="4">
              <Label>Number Identification Fiscal </Label>
              <Input type="text" />
            </Col>
          </Row>
          <br />
          <Row>
            <Col xs="4">
              <Label>Status </Label>
              <Input type="select">
                <option>Baja</option>
              </Input>
            </Col>
          </Row>
          <br />
          <Row>
          <Col xs="9">
            </Col>
            <Col xs="3">
              <ButtonGroup>
                <Button color="primary">Ok</Button>
                <Button color="primary">Cancel</Button>
              </ButtonGroup>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </>
  );
}
