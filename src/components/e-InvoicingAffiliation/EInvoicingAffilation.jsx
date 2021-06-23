/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: La tabla esta incompleta revisar 18/01/2021
*/
import React, { useState } from "react";
import "antd/dist/antd.css";
import { Table } from "antd";
import classnames from "classnames";
import {
  Col,
  Row,
  Card,
  CardBody,
  CardTitle,
  Input,
  Label,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

export default function EInvoicingAffilation() {
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
          <h5>Member Resume</h5>
          <br/>
          <Row>
            <Col xs="4">
              <Label>Company</Label>
              <Input type="text" />
            </Col>
            <Col xs="4">
              <Label>Application</Label>
              <Input type="text" />
            </Col>
            <Col xs="4">
              <Label>Member Name </Label>
              <Input type="text" />
            </Col>
          </Row>
          <br />
          <Row>
            <Col xs="4">
              <Label>Office </Label>
              <Input type="text" />
            </Col>
            <Col xs="4"></Col>
            <Col xs="4">
              <Label> Project</Label>
              <Input type="text" />
            </Col>
          </Row>
          <br />
          <Nav tabs>
            <NavItem>
              <NavLink
                className={classnames({ active: activeTab === "1" })}
                onClick={() => {
                  toggle("1");
                }}
              >
                In Process
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: activeTab === "2" })}
                onClick={() => {
                  toggle("2");
                }}
              >
                Processed
              </NavLink>
            </NavItem>
          </Nav>
          <TabContent activeTab={activeTab}>
            <TabPane tabId="1">
              <Row>
                <Col sm="12">
                  <Card body>
                    <CardTitle></CardTitle>
                    <Row>
                      <Col xs="12">
                        <Table columns={columns} dataSource={data} />
                      </Col>
                    </Row>
                  </Card>
                </Col>
              </Row>
            </TabPane>
            <TabPane tabId="2">
              <Row>
                <Col sm="12">
                  <Card body>
                    <CardTitle></CardTitle>
                    <Row>
                      <Col xs="12">
                        <Table columns={columns2} dataSource={data2} />
                      </Col>
                    </Row>
                  </Card>
                </Col>
              </Row>
            </TabPane>
          </TabContent>
          <br />
        </CardBody>
      </Card>
    </>
  );
}
