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
  Card,
  CardBody,
  CardTitle,
  Input,
  Label,
  Button,
} from "reactstrap";

export default function ReportElectronicPurseDetail() {
  return (
    <>
      <Card>
        <CardBody>
          <CardTitle>
            <h2>Report Electronic Purse Detail</h2>
          </CardTitle>
          <br />
          <Card>
            <CardBody>
              <CardTitle>
                  <span>Filter</span>
              </CardTitle>
              <br/>
              <Row>
                <Col xs="3">
                  <Label check>
                    <Input type="radio" /> Date
                  </Label>
                </Col>
                <Col xs="1"></Col>
                <Col xs="3">
                  <Label check>
                    <Input type="radio" /> Application
                  </Label>
                </Col>
              </Row>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <CardTitle>
                <span>Date</span>
              </CardTitle>
              <br />
              <Row>
                <Col xs="3">
                  <Label>Start Date</Label>
                  <Input type="date" />
                </Col>
                <Col xs="1"></Col>
                <Col xs="3">
                  <Label>End Date</Label>
                  <Input type="date" />
                </Col>
              </Row>
            </CardBody>
          </Card>
          <Card>
            <CardBody>
              <CardTitle>
                <span>Application</span>
              </CardTitle>
              <br />
              <Row>
                <Col xs="3">
                  <Input type="text" />
                </Col>
              </Row>
            </CardBody>
          </Card>
          <Row>
          <Col xs="9"></Col>
          <Col xs="3">
            <br />
            <Button color="primary">Print</Button>
          </Col>
          </Row>
        </CardBody>
      </Card>
    </>
  );
}
