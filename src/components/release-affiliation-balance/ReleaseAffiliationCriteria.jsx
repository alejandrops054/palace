/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/

import React from "react";
import { Row, Col, Button, Label, Input, Container } from "reactstrap";

function ReleaseAffiliationCriteria() {
  return (
    <>
      <span>Criteria</span>
      <Row className="border">
        <Col className=" " lg={{ size: 2 }} md={{ size: 2 }}>
          <Label check>
            <Input type="radio" name="radio1" /> Application
          </Label>
        </Col>
        <Col className=" " lg={{ size: 2 }} md={{ size: 2 }}>
          <Label check>
            <Input type="radio" name="radio1" /> Source
          </Label>
        </Col>
        <Col className=" " lg={{ size: 2 }} md={{ size: 2 }}>
          <Label check>
            <Input type="radio" name="radio1" /> Excel File
          </Label>
        </Col>
      </Row>
    </>
  );
}

export default ReleaseAffiliationCriteria;
