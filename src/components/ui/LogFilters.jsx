/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/

import React from "react";
import { Row, Col, Input, Label, Button } from "reactstrap";

function LogFilters() {
  return (
    <>
      <Row>
        <Col xl={{size:4}} lg={{ size: 3 }} md={{ size: 3 }} sm={{ size: 3 }}>
          <Label>Date From:</Label>
          <Input type="date" />
        </Col>
        <Col
          xl={{size:4, offset:3}}
          lg={{ size: 3, offset: 3 }}
          md={{ size: 3, offset: 3 }}
          sm={{ size: 3, offset: 3 }}
        >
          <Label>Field Name:</Label>
          <Input type="text" />
        </Col>
        <Col>
          <Button>Apply Filter</Button>
        </Col>
      </Row>
      <Row className="mt-2">
        <Col xl={{size:4}} lg={{ size: 3 }} md={{ size: 3 }} sm={{ size: 3 }}>
          <Label>Date To:</Label>
          <Input type="date" />
        </Col>
        <Col xl={{size:3}}>
          <Label>User:</Label>
          <Input type="text" />
        </Col>
        <Col xl={{size:4}}>
          <Label>Value:</Label>
          <Input type="text" />
        </Col>
        <Col>
          <Button>Clear Filter</Button>
        </Col>
      </Row>
    </>
  );
}

export default LogFilters;
