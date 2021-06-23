/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos 
*/

import React from "react";
import Table from "rc-table";
import { Row, Col, Button } from "reactstrap";

const columns = [
  {
    title: "Code",
    dataIndex: "code",
    key: "code",
    width: 130,
  },
  {
    title: "Description",
    dataIndex: "description",
    key: "description",
    width: 130,
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    width: 130,
  },
  {
    title: "# Salesmen",
    dataIndex: "salesmen",
    key: "salesmen",
    width: 130,
  },
  {
    title: "Order",
    dataIndex: "order",
    key: "order",
    width: 130,
  },
];

function RolesTable() {
  return (
    <>
      <h1>Roles</h1>
      <Row className="mb-5">
        <Col>
          <Button>Log</Button>
        </Col>
        <Col>
          <Button>Add</Button>
        </Col>
        <Col>
          <Button>Properties</Button>
        </Col>
        <Col>
          <Button>Resfresh</Button>
        </Col>
        <Col>
          <Button>Close</Button>
        </Col>
      </Row>
      <Table columns={columns} />
    </>
  );
}

export default RolesTable;
