/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/

import React from "react";
import Table from "rc-table";
import { Container, Row, Col, Button } from "reactstrap";

const columns = [
  {
    title: "IdPriceLevels",
    dataIndex: "idpricelevels",
    key: "idpricelevels",
    width: 130,
  },
  {
    title: "MembershipMinimunPrice",
    dataIndex: "membershipMinimunPrice",
    key: "membershipMinimunPrice",
    width: 130,
  },
  {
    title: "MembershipMaximunPrice",
    dataIndex: "membershipMaximumPrice",
    key: "membershipMaximumPrice",
    width: 130,
  },
  {
    title: "Coin",
    dataIndex: "coin",
    key: "coin",
    width: 130,
  },
  {
    title: "MembershipValidity",
    dataIndex: "membershipValidity",
    key: "membershipValidity",
    width: 130,
  },
  {
    title: "BaseComisionable",
    dataIndex: "baseComisionable",
    key: "baseComisionable",
    width: 130,
  },
];

function PricesLevels() {
  return (
    <Container>
      <h2>Price Levels</h2>
      <Row>
        <Col>
          <Button>Log</Button>
          <Button>Add</Button>
          <Button>Properties</Button>
          <Button>Refresh</Button>
        </Col>
      </Row>
      <Row>
        <Table columns={columns} />
      </Row>
    </Container>
  );
}

export default PricesLevels;
