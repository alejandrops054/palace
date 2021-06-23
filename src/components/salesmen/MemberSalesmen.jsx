/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos Dev01
Comentarios: xxxxx
*/
import React from "react";
import { Row, Col, Button } from "reactstrap";
import Table from "rc-table";
import MemberSalesmenInfo from "./MemberSalesmenInfo";

const columns = [
  {
    title: "Code",
    dataIndex: "code",
    key: "code",
    width: 100,
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    width: 250,
  },
  {
    title: "Job",
    dataIndex: "job",
    key: "job",
    width: 150,
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    width: 100,
  },
  {
    title: "Id Global",
    dataIndex: "id-global",
    key: "id-global",
    width: 150,
  },
];

function MemberSalesmen() {
  return (
    <>
      <h2>Member Salesmen</h2>
      <MemberSalesmenInfo />
      <Row className="mt-5">
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
            <Button>Delete</Button>
          </Col>
          <Col>
            <Button>Refresh</Button>
          </Col>
          <Col>
            <Button>Close</Button>
          </Col>
        </Row>
        <Table className="table" columns={columns} />
      </Row>
    </>
  );
}

export default MemberSalesmen;
