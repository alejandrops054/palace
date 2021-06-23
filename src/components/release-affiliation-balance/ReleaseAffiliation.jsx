/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/

import React from "react";
import { InfoMembersNoContainer } from "..";
import { Row, Col, Button, Label, Input, Container } from "reactstrap";

function ReleaseAffiliation() {
  return (
    <Row>
      <Col className="border" md={{ size: 2 }} lg={{ size: 3 }}>
        <span>Application</span>
        <Row>
          <Col>
            <Label>Company</Label>
            <Input type="text" />
          </Col>
        </Row>
        <Row>
          <Col>
            <Label>Application</Label>
            <Input type="text" />
          </Col>
        </Row>
      </Col>
      <Col className="border" md={{ size: 2 }} lg={{ size: 2 }}>
        <span>Source</span>
        <Row>
          <Col>
            <Label check>
              <Input type="checkbox" /> All
            </Label>
          </Col>
        </Row>
        <Row>
          <Col>
            <Label check>
              <Input type="checkbox" /> Foreigns
            </Label>
          </Col>
        </Row>
        <Row>
          <Col>
            <Label check>
              <Input type="checkbox" /> Nationals
            </Label>
          </Col>
        </Row>
      </Col>
      <Col className="border">
        <span>By Excel File</span>
        <Row>
          <Col>
            <Row>
              <Col>
                <Label>Path:</Label>
                <Input type="file" />
                <Button>X</Button>
              </Col>
            </Row>
            <Row>
              <Col>
                <InfoMembersNoContainer title="Records in the file" text="0" />
              </Col>
              <Col>
                <InfoMembersNoContainer
                  title="Affiliations in the database"
                  text="0"
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

export default ReleaseAffiliation;
