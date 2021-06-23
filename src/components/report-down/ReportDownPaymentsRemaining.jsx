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
} from "reactstrap";

export default function ReportDownPaymentsRemaining() {
  return (
    <>
      <Card>
        <CardBody>
          <CardTitle>
            <h2>Report Down Payments Remaining</h2>
          </CardTitle>
          <Row>
            <Col xs="6">
            </Col>
            <Col xs="3">
              <Label check>
                <Input type="checkbox" /> Detail Report
              </Label>
            </Col>
          </Row>
          <Row>
            <Col xs="6">
            </Col>
            <Col xs="3">
              <Label check>
                <Input type="checkbox" /> Only Whith Remaining
              </Label>
            </Col>
          </Row>
          <Row>
            <Col xs="6">
            </Col>
            <Col xs="3">
              <Label check>
                <Input type="checkbox" /> By Member
              </Label>
            </Col>
          </Row>
          <Card>
        <CardBody>
          <CardTitle>
            <span>Select Deposit Date</span>
          </CardTitle>
          <br/>
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
            <span>Select Project</span>
          </CardTitle>
          <br/>
          <Row>
            <Col xs="3">
              <Input type="text" />
            </Col>
            <Col xs="1"></Col>
            <Col xs="3">
            <Input type="select">
                      <option>PALACE ELITE</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </Input>
            </Col>
          </Row>
          </CardBody>
          </Card>
          <Card>
        <CardBody>
          <CardTitle>
            <span>Select Office</span>
          </CardTitle>
          <br/>
          <Row>
            <Col xs="3">
              <Input type="text" />
            </Col>
            <Col xs="1"></Col>
            <Col xs="3">
            <Input type="select">
                      <option>PLAYACAR ELITE</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </Input>
            </Col>
          </Row>
          </CardBody>
          </Card>
          <Card>
        <CardBody>
          <CardTitle>
            <span>Select Promissory</span>
          </CardTitle>
          <br/>
          <Row>
            <Col xs="3">
            <Input type="select">
                      <option>Todas</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </Input>
            </Col>
          </Row>
          </CardBody>
          </Card>
          <Card>
        <CardBody>
          <CardTitle>
            <span>Select Credit Card Type</span>
          </CardTitle>
          <br/>
          <Row>
            <Col xs="3">
            <Input type="select">
                      <option>Todas</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </Input>
            </Col>
          </Row>
          </CardBody>
          </Card>
          <Card>
        <CardBody>
          <CardTitle>
            <span>Status</span>
          </CardTitle>
          <br/>
          <Row>
            <Col xs="3">
            <Input type="select">
                      <option>Activas</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </Input>
            </Col>
          </Row>
          </CardBody>
          </Card>
        </CardBody>
      </Card>
    </>
  );
}
