/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/

import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import { useSelect } from "../../hooks";
import Table from "rc-table";

const columns = [
  {
    title: "Office Name",
    dataIndex: "officeName",
    key: "officeName",
    width: 130,
  },
  {
    title: "Year",
    dataIndex: "year",
    key: "year",
    width: 130,
  },
  {
    title: "Month",
    dataIndex: "month",
    key: "month",
    width: 130,
  },
  {
    title: "Unit",
    dataIndex: "unit",
    key: "unit",
    width: 130,
  },
  {
    title: "Stock type",
    dataIndex: "stockType",
    key: "stockType",
    width: 130,
  },
  {
    title: "Quantity",
    dataIndex: "quiantity",
    key: "quantity",
    width: 130,
  },
  {
    title: "Provision ID",
    dataIndex: "provision",
    key: "provision",
    width: 130,
  },
];

function MonthlyStock() {
  const yearOptions = [{ name: "2021", value: "2021" }];

  const officeOptions = [{ name: "BEACH PALACE", value: "BEACH PALACE" }];

  const [officeMsSelect, SelectOffice, resetSelectOffice] = useSelect(
    "Office",
    "",
    officeOptions
  );
  /*Selects */
  const [yearMsSelect, SelectYear, resetSelectYear] = useSelect(
    "Year",
    "",
    yearOptions
  );

  return (
    <Container fluid>
      <Row>
        <Col>
          <Row>
            <h1>Monthly Stock</h1>
          </Row>
          <Row>
            <span>Catalog Monthly Stock</span>
          </Row>
        </Col>
        <Col>
          <Row>
            <Col>
              <SelectYear />
            </Col>
            <Col className="mt-4">
              <Button>Apply Filter</Button>
            </Col>
          </Row>
          <Row>
            <Col>
              <SelectOffice />
            </Col>
            <Col className="mt-4">
              <Button>Clear Filter</Button>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <Table columns={columns} />
      </Row>
      <Row>
        <Col lg={{ offset: 5 }} md={{ offset: 5 }}>
          <Button>Copy Year</Button>
          <Button>Log</Button>
          <Button>Add</Button>
          <Button>Properties</Button>
          <Button>Refresh</Button>
          <Button>Close</Button>
        </Col>
      </Row>
    </Container>
  );
}

export default MonthlyStock;
