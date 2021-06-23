/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/

import React from "react";
import { Button } from "react-bootstrap";
import { Row, Col, InputGroup, Input, Label } from "reactstrap";
import { Checkbox } from "..";

function PortfolioBankAccount() {
  return (
    <>
      <h2>Portfolio Bank Account</h2>
      <Row>
        <Col
          xs={{ size: 1, offset: 5 }}
          sm={{ size: 1, offset: 4 }}
          md={{ size: 1, offset: 3, margin: "0 auto" }}
          lg={{ size: 1, offset: 3 }}
        >
          <Label>Code</Label>
        </Col>
        <Col md={{ size: 2 }} lg={{ size: 4 }} sm={{ size: 3 }}>
          <Input type="" />
        </Col>
      </Row>
      <Row>
        <Col
          xs={{ size: 1, offset: 5 }}
          sm={{ size: 1, offset: 4 }}
          md={{ size: 1, offset: 3, margin: "0 auto" }}
          lg={{ size: 1, offset: 3 }}
        >
          <Label>Code Project</Label>
        </Col>
        <Col md={{ size: 2 }} lg={{ size: 4 }} sm={{ size: 3 }}>
          <Input type="" />
        </Col>
      </Row>
      <Row>
        <Col
          xs={{ size: 1, offset: 5 }}
          sm={{ size: 1, offset: 4 }}
          md={{ size: 1, offset: 3, margin: "0 auto" }}
          lg={{ size: 1, offset: 3 }}
        >
          <Label>Company</Label>
        </Col>
        <Col md={{ size: 6 }} lg={{ size: 6 }} sm={{ size: 6 }}>
          <Input type="select" />
        </Col>
      </Row>
      <Row>
        <Col
          xs={{ size: 1, offset: 5 }}
          sm={{ size: 1, offset: 4 }}
          md={{ size: 1, offset: 3, margin: "0 auto" }}
          lg={{ size: 1, offset: 3 }}
        >
          <Label>Portfolio</Label>
        </Col>
        <Col md={{ size: 6 }} lg={{ size: 6 }} sm={{ size: 6 }}>
          <Input type="text" />
        </Col>
      </Row>
      <Row>
        <Col
          xs={{ size: 1, offset: 5 }}
          sm={{ size: 1, offset: 4 }}
          md={{ size: 1, offset: 3, margin: "0 auto" }}
          lg={{ size: 1, offset: 3 }}
        >
          <Label>Bank</Label>
        </Col>
        <Col md={{ size: 6 }} lg={{ size: 6 }} sm={{ size: 6 }}>
          <Input type="select" />
        </Col>
      </Row>
      <Row>
        <Col
          xs={{ size: 1, offset: 5 }}
          sm={{ size: 1, offset: 4 }}
          md={{ size: 1, offset: 3, margin: "0 auto" }}
          lg={{ size: 1, offset: 3 }}
        >
          <Label>Account</Label>
        </Col>
        <Col md={{ size: 6 }} lg={{ size: 6 }} sm={{ size: 6 }}>
          <Input type="text" />
        </Col>
      </Row>
      <Row>
        <Col
          xs={{ size: 1, offset: 5 }}
          sm={{ size: 1, offset: 4 }}
          md={{ size: 1, offset: 3, margin: "0 auto" }}
          lg={{ size: 1, offset: 3 }}
        >
          <Label>Mechant code</Label>
        </Col>
        <Col md={{ size: 6 }} lg={{ size: 6 }} sm={{ size: 6 }}>
          <Input type="text" />
        </Col>
      </Row>
      <Row>
        <Col
          xs={{ size: 1, offset: 5 }}
          sm={{ size: 1, offset: 4 }}
          md={{ size: 1, offset: 3, margin: "0 auto" }}
          lg={{ size: 1, offset: 3 }}
        >
          <Label>Room</Label>
        </Col>
        <Col md={{ size: 6 }} lg={{ size: 6 }} sm={{ size: 6 }}>
          <Input type="text" />
        </Col>
      </Row>
      <Row>
        <Col
          xs={{ size: 1, offset: 5 }}
          sm={{ size: 1, offset: 4 }}
          md={{ size: 1, offset: 3, margin: "0 auto" }}
          lg={{ size: 1, offset: 3 }}
        >
          <Label>Transaction Type</Label>
        </Col>
        <Col md={{ size: 6 }} lg={{ size: 6 }} sm={{ size: 6 }}>
          <Input type="select" />
        </Col>
      </Row>
      <Row>
        <Col
          xs={{ size: 1, offset: 5 }}
          sm={{ size: 1, offset: 4 }}
          md={{ size: 1, offset: 3, margin: "0 auto" }}
          lg={{ size: 1, offset: 3 }}
        >
          <Label>Currency</Label>
        </Col>
        <Col md={{ size: 6 }} lg={{ size: 6 }} sm={{ size: 6 }}>
          <Input type="select" />
        </Col>
      </Row>

      <Row>
        <Col
          xs={{ size: 1, offset: 7 }}
          sm={{ size: 1, offset: 6 }}
          md={{ size: 1, offset: 5, margin: "0 auto" }}
          lg={{ size: 1, offset: 5 }}
        >
          <Checkbox label="Attendance" />
        </Col>
        <Col md={{ size: 6 }} lg={{ size: 6 }} sm={{ size: 6 }}>
          <Checkbox label="Recurring ADP" />
        </Col>
      </Row>
      <Row>
        <Col
          xs={{ size: 1, offset: 7 }}
          sm={{ size: 1, offset: 6 }}
          md={{ size: 1, offset: 5, margin: "0 auto" }}
          lg={{ size: 1, offset: 5 }}
        >
          <Checkbox label="Recurring Month" />
        </Col>
        <Col md={{ size: 6 }} lg={{ size: 6 }} sm={{ size: 6 }}>
          <Checkbox label="Visible" />
        </Col>
      </Row>
      <Row>
        <Col className="">
          <Button>Save</Button>
          <Button>Close</Button>
        </Col>
      </Row>
    </>
  );
}
export default PortfolioBankAccount;
