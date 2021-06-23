/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contrato1s
Comentarios: xxxxx
*/

import React from "react";
import { Col, Row, Label, Input, Button, ButtonToolbar } from "reactstrap";
import Table from "rc-table";
import SapAccountingSideBar from "./SapAccountingSideBar";

const columns = [
  {
    title: "Application",
    dataIndex: "app",
    key: "app",
    width: 130,
  },
  {
    title: "Company",
    dataIndex: "company",
    key: "company",
    width: 130,
  },
  {
    title: "SaleCode",
    dataIndex: "salecode",
    key: "salecode",
    width: 130,
  },
  {
    title: "S0C",
    dataIndex: "soc",
    key: "soc",
    width: 130,
  },
  {
    title: "Sala_Venta",
    dataIndex: "sala_venta",
    key: "sal_venta",
    width: 130,
  },
  {
    title: "Concept",
    dataIndex: "concept",
    key: "concept",
    width: 130,
  },
  {
    title: "Process_Date",
    dataIndex: "process_date",
    key: "process_date",
    width: 130,
  },
  {
    title: "IMPORTE",
    dataIndex: "importe",
    key: "importe",
    width: 130,
  },
  {
    title: "DESCUENTO",
    dataIndex: "descuento",
    key: "descuento",
    width: 130,
  },
  {
    title: "MONEDA",
    dataIndex: "moneda",
    key: "moneda",
    width: 130,
  },
];
const columns2 = [
  {
    title: "Type",
    dataIndex: "type",
    key: "type",
    width: 130,
  },
  {
    title: "Message",
    dataIndex: "message",
    key: "message",
    width: 130,
  },
];
function SapAccounting() {
  return (
    <div>
      <Row>
        <SapAccountingSideBar />
        <Col>
          <Row>
            <Table columns={columns} />
          </Row>
          <Row>
            <Col>
              <Button>Informations</Button>
              <Button>Errors</Button>
              <Button>Alerts</Button>
              <Button>Filter</Button>
            </Col>
          </Row>
          <Row>
            <Col>
              <Table columns={columns2} />
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default SapAccounting;
