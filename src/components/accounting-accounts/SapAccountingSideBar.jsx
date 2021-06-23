/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contrato1s
Comentarios: xxxxx
*/

import React from "react";
import { Row, Col, Input, Label, Button } from "reactstrap";

function SapAccountingSideBar() {
  return (
    <>
      <Col lg={{ size: 3 }} md={{ size: 3 }}>
        <Row className="border">
          <Col>
            <Label>Policy type</Label>
            <Input type="select" />
          </Col>
        </Row>
        <Row className="border">
          <span>Search Date</span>
          <Row>
            <Col>
              <Label>From</Label>
              <Input type="date" />
            </Col>
          </Row>
          <Row>
            <Col>
              <Label>To</Label>
              <Input type="date" />
            </Col>
          </Row>
        </Row>
        <Row className="border">
          <span>Filters Daily</span>
          <Col>
            <Label>Company</Label>
            <Input type="select" />
          </Col>
        </Row>
        <Row className="border">
          <span>Actions</span>
          <Row>
            <Col>
              <Button>Search</Button>
            </Col>
            <Col>
              <Button>Export to Excel</Button>
            </Col>
          </Row>
          <Row>
            <Col>
              <Button>send to SAP</Button>
            </Col>
            <Col>
              <Button>Policy Log</Button>
            </Col>
          </Row>
        </Row>
      </Col>
    </>
  );
}

export default SapAccountingSideBar;
