/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/

import React from "react";
import { Container, Row, Col, Input, Label, Button } from "reactstrap";

function HotelsZoneRole() {
  return (
    <Container fluid>
      <h4>Role</h4>
      <Row>
        <Col lg={{ size: 3 }} md={{ size: 3 }}>
          <Row>
            <Label>
              Id <Input type="text" />
            </Label>
          </Row>
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
              Description <Input type="text" />
            </Label>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col lg={{ size: 2 }} md={{ size: 2 }}>
          <Row>
            <Label>
              Status <Input type="select" />
            </Label>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col lg={{ offset: 10 }}>
          <Button>Ok</Button>
          <Button>Cancel</Button>
        </Col>
      </Row>
    </Container>
  );
}

export default HotelsZoneRole;
