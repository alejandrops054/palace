/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/

import React from "react";
import { Row, Col, Input, Label, Button, Container } from "reactstrap";
import Table from "rc-table";
import LogFilters from "./LogFilters";

function Log(props) {
  const { title, columns, data } = props;
  return (
    <Container fluid>
      <h2>{title}</h2>
      <LogFilters />
      <Row>
        <Table columns={columns} data={data} className="table" />
      </Row>
      <Row>
        <Col>
          <Button>Details</Button>
        </Col>
      </Row>
    </Container>
  );
}

export default Log;
