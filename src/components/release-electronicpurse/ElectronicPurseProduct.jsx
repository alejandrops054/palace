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

export default function ElectronicPurseProduct() {
  return (
    <>
      <Card>
        <CardBody>
          <CardTitle>
            <h3>Electronic Purse Product</h3>
          </CardTitle>
          <br />
          <Row>
            <Col xs="3">
              <Label>Product ID</Label>
              <Input type="text" />
            </Col>
          </Row>
          <br />
          <Row>
            <Col xs="3">
              <Label>CIA </Label>
              <Input type="text" />
            </Col>
          </Row>
          <br />
          <Row>
            <Col xs="3">
              <Label>Type</Label>
              <Input type="text" />
            </Col>
          </Row>
          <br />
          <Row>
            <Col xs="6">
              <Label>Description</Label>
              <Input type="text" />
            </Col>
          </Row>
          <br />
          <Row>
            <Col xs="3">
              <Label>Status</Label>
              <Input type="select">
                <option>Alta</option>
              </Input>
            </Col>
          </Row>
          <br />
          <Row>
            <Col xs="3">
              <Label>Unit </Label>
              <Input type="text" />
            </Col>
          </Row>
          <br />
          <Row>
            <Col xs="4">
              <Label>Currency </Label>
              <Input type="select">
                <option>DOLLAR U.S.A</option>
              </Input>
            </Col>
          </Row>
          <br/>
          <Row>
            <Col xs="3">
              <Label>Service ID</Label>
              <Input type="text" />
            </Col>
          </Row>
          <br/>
          <Row>
            <Col xs="3">
              <Label>Valdity </Label>
              <Input type="text" />
            </Col>
          </Row>
          <br />
          <Row>
            <Col xs="4">
              <Label>Category </Label>
              <Input type="select">
                <option></option>
              </Input>
            </Col>
          </Row>
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
