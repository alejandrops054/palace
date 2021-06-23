import React from "react";
import { Container, Row, Col, Input, Button, Label } from "reactstrap";

function DiscountProductsForm() {
  return (
    <Container fluid>
      <h2>Discount Products</h2>
      <Row>
        <Col lg={{ size: 4 }}>
          <Row>
            <Input type="search" placeholder="Code..." />
          </Row>
        </Col>
      </Row>
      <Row>
        <Col lg={{ size: 3 }} xl={{ size: 3 }} md={{ size: 4 }}>
          <Row>
            <Label>
              Type <Input type="text" />
            </Label>
          </Row>
        </Col>
        <Col>
          <Row className="mt-4">
            <Input type="select" />
          </Row>
        </Col>
      </Row>
      <Row>
        <Col lg={{ size: 3 }} xl={{ size: 3 }} md={{ size: 4 }}>
          <Row>
            <Label>
              Product <Input type="text" />
            </Label>
          </Row>
        </Col>
        <Col>
          <Row className="mt-4">
            <Input type="select" />
          </Row>
        </Col>
      </Row>
      <Row>
        <Col lg={{ size: 3 }} xl={{ size: 3 }} md={{ size: 4 }}>
          <Row>
            <Label>
              Quantity <Input type="text" />
            </Label>
          </Row>
        </Col>
        <Col lg={{ size: 3 }} xl={{ size: 3 }} md={{ size: 4 }}>
          <Row>
            <Label>
              Amount <Input type="text" />
            </Label>
          </Row>
        </Col>
        <Col lg={{ size: 4 }} xl={{ size: 4 }} md={{ size: 4 }}>
          <Row>
            <Button color="warning">Electronic Purse Transfer</Button>
          </Row>
        </Col>
      </Row>

    </Container>
  );
}

export default DiscountProductsForm;
