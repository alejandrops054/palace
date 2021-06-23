import React from "react";
import { Container, Row, Col, Input, Label } from "reactstrap";
function Company() {
  return (
    <Container>
      <h2>Company</h2>
      <Row>
        <Col>Company Detail</Col>
      </Row>
      <Row>
        <Col>
          <Label>
            Code <Input type="number"></Input>
          </Label>
        </Col>
        <Col className="mt-4">
          <Label>
            <Input type="checkbox"></Input> Mexican Company
          </Label>
        </Col>
      </Row>
      <Row>
        <Col>
          <Row>
            <Label>
              Name <Input type="text" />
            </Label>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col>
          <Row>
            <Label>
              Address 1 <Input type="text" />
            </Label>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col>
          <Row>
            <Label>
              Address 2 <Input type="text" />
            </Label>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col>
          <Row>
            <Label>
              Address 3 <Input type="text" />
            </Label>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col>
          <Row>
            <Label>
              Address 4 <Input type="text" />
            </Label>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col>
          <Row>
            <Label>
              Phone 1 <Input type="text" />
            </Label>
          </Row>
        </Col>
        <Col>
          <Row>
            <Label>
              Phone 2 <Input type="text" />
            </Label>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col>
          <Row>
            <Label>
              Company Name For Letters <Input type="text" />
            </Label>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col>
          <Row>
            <Label>
              Club Name For Letters <Input type="text" />
            </Label>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col lg={{ size: 2 }} md={{ size: 2 }} sm={{ size: 2 }}>
          <Row>
            <Label>
              Currency <Input type="text" />
            </Label>
          </Row>
        </Col>
        <Col className="mt-4">
          <Row>
            <Label>
              <Input type="select" />
            </Label>
          </Row>
        </Col>
        <Col lg={{ size: 2 }} md={{ size: 2 }} sm={{ size: 2 }}>
          <Row>
            <Label>
              Status
              <Input type="select" />
            </Label>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col lg={{ size: 2 }} md={{ size: 2 }} sm={{ size: 2 }}>
          <Row>
            <Label>
              Payment Currency <Input type="text" />
            </Label>
          </Row>
        </Col>
        <Col className="mt-4">
          <Row>
            <Label>
              <Input type="select" />
            </Label>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col lg={{ size: 2 }} md={{ size: 2 }} sm={{ size: 2 }}>
          <Row>
            <Label>
              Country <Input type="text" />
            </Label>
          </Row>
        </Col>
        <Col className="mt-4">
          <Row>
            <Label>
              <Input type="select" />
            </Label>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col></Col>
      </Row>
    </Container>
  );
}

export default Company;
