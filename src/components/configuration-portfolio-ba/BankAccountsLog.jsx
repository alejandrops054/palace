/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/

import React from "react";
import { Row, Col, Input, Label, Button } from "reactstrap";
import Table from "rc-table";
import BankAccountsLogFilters from "./BankAccountsLogFilters";

const columns = [
  {
    title: "User",
    dataIndex: "user",
    key: "user",
    width: 130,
  },
  {
    title: "Date/Time",
    dataIndex: "d/t",
    key: "d/t",
    width: 130,
  },
  {
    title: "Module",
    dataIndex: "module",
    key: "module",
    width: 130,
  },
  {
    title: "Action",
    dataIndex: "action",
    key: "action",
    width: 130,
  },
  {
    title: "Original",
    dataIndex: "original",
    key: "original",
    width: 130,
  },
  {
    title: "Changes",
    dataIndex: "changes",
    key: "changes",
    width: 130,
  },
];

function BankAccountsLog() {
  return (
    <>
      <h2>Bank Accounts Log</h2>
      <BankAccountsLogFilters />
      <Row>
        <Table columns={columns} />
      </Row>
      <Row>
        <Col>
          <Button>Details</Button>
        </Col>
      </Row>
    </>
  );
}

export default BankAccountsLog;
