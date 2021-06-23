/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/

import React from "react";
import { Row, Col, Button, Label, Input, Container } from "reactstrap";

function ReleaseAffiliationRSA() {
  return (
    <>
      <Row>
        <Col className="border">
          <span>Remain</span>
          <Row>
            <Col>
              <Row>
                <Label check>
                  <Input type="checkbox" /> Monthly Payment
                </Label>
              </Row>
              <Row>
                <Label check>
                  <Input type="checkbox" /> Down Payment
                </Label>
              </Row>
            </Col>
          </Row>
        </Col>
        <Col className="border">
          <span>Source</span>
          <Row>
            <Col>
              <Row>
                <Label check>
                  <Input type="checkbox" /> All
                </Label>
              </Row>
              <Row>
                <Label check>
                  <Input type="checkbox" /> With Suspense
                </Label>
              </Row>
              <Row>
                <Label check>
                  <Input type="checkbox" /> Without Suspense
                </Label>
              </Row>
            </Col>
          </Row>
        </Col>
        <Col className="border">
          <span>Amounts</span>
          <Row>
            <Col>
              <Row>
                <Label check>
                  Max Balance <Input type="number" /> USD
                </Label>
              </Row>
              <Row>
                <Label check>
                  Exchange rate <Input type="number" />
                </Label>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className="mt-2">
        <Col lg={{ offset: 9, size: 4 }} md={{ offset: 8, size: 5 }}>
          <Button>Simulate</Button>
          <Button>Process</Button>
          <Button>Cancel</Button>
        </Col>
      </Row>
    </>
  );
}

export default ReleaseAffiliationRSA;
