/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/

import React from "react";
import { Container, Row, Col } from "reactstrap";
import Table from "rc-table";

const columns = [
  {
    title: "DateFrom",
    dataIndex: "datefrom",
    key: "datefrom",
    width: 130,
  },
  {
    title: "DateTo",
    dataIndex: "dateto",
    key: "dateto",
    width: 130,
  },
];

const columns2 = [
  {
    title: "Id",
    dataIndex: "id",
    key: "id",
    width: 130,
  },
  {
    title: "CodigoNivel",
    dataIndex: "codigonivel",
    key: "codigonivel",
    width: 130,
  },
  {
    title: "Program",
    dataIndex: "program",
    key: "program",
    width: 130,
  },
  {
    title: "PrecioMinimoMembers",
    dataIndex: "preciominimomembers",
    key: "preciominimomembers",
    width: 130,
  },
];

function PriceLevelsTransactionsDetail() {
  return (
    <Container fluid>
      <Row>
        <Col className="border" lg={{ size: 3 }} md={{ size: 3 }}>
          <Table columns={columns} />
        </Col>
        <Col className="border">
          <Table columns={columns2} />
        </Col>
      </Row>
    </Container>
  );
}

export default PriceLevelsTransactionsDetail;
