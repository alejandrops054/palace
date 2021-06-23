/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: La tabla esta incompleta revisar 18/01/2021
*/
import React, { useState } from "react";
import "antd/dist/antd.css";
import { Table } from "antd";
import {
  Col,
  Row,
  Card,
  CardBody,
  CardTitle,
  Input,
  Label,
  Button,

} from "reactstrap";

export default function SapAccountingLog() {
  const [activeTab, setActiveTab] = useState("1");

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  const columns = [
    {
      title: "Type ",
      dataIndex: "type",
      key: "type",
      width: 100,
    },

    {
      title: "Trans.date",
      dataIndex: "trans",
      key: "trans",
      width: 100,
    },
    {
      title: "Code/Sale Type",
      dataIndex: "code",
      key: "code",
      width: 100,
    },
    {
      title: "Sales Area",
      dataIndex: "salesarea",
      key: "salesarea",
      width: 100,
    },
    {
      title: "Where",
      dataIndex: "where",
      key: "where",
      width: 100,
    },
    {
      title: "Invoice",
      dataIndex: "invoice",
      key: "invoice",
      width: 100,
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      width: 100,
    },
    {
      title: "Document",
      dataIndex: "document",
      key: "document",
      width: 100,
    },
  ];
  const data = [{}];

  const columns2 = [
    {
      title: "ReInvoice ",
      dataIndex: "reinvoice",
      key: "reinvoice",
      width: 100,
    },

    {
      title: "Credit.Note",
      dataIndex: "creditnote",
      key: "creditnote",
      width: 100,
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
      width: 100,
    },
    {
      title: "Code / Sale type",
      dataIndex: "codesale",
      key: "codesale",
      width: 100,
    },
    {
      title: "Where",
      dataIndex: "where",
      key: "where",
      width: 100,
    },
    {
      title: "Invoice #",
      dataIndex: "invoice",
      key: "invoice",
      width: 100,
    },
    {
      title: "Type",
      dataIndex: "type",
      key: "type",
      width: 100,
    },
    {
      title: "Document",
      dataIndex: "document",
      key: "document",
      width: 100,
    },
  ];
  const data2 = [{}];
  return (
    <>
      <Card>
        <CardBody>
          <CardTitle>
            <h3>E-Invoicing by Affilation</h3>
          </CardTitle>
          <br />
          <Row>
            <Col xs="3">
              <Label>From</Label>
              <Input type="date" />
            </Col>
            <Col xs="3">
              <Label>To</Label>
              <Input type="date" />
            </Col>
            <Col xs="3">
              <Label>Police Code</Label>
              <Input type="text" />
            </Col>
            <Col xs="3">
              <Button color="primary">Search</Button>
            </Col>
          </Row>
          <br />
          <Row>
            <Col xs="8">
              <Table columns={columns} dataSource={data} />
            </Col>
            <Col xs="4">
              <Button color="primary">Show XML</Button>
              <Row>
                <Label check>
                <br/>
                  <Input type="checkbox" />
                   Only Errors
                </Label>
              </Row>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </>
  );
}
