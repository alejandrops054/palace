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

export default function Accountsatement() {
  const [activeTab, setActiveTab] = useState("1");

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  const columns = [
    {
      title: "File Name ",
      dataIndex: "type",
      key: "type",
      width: 100,
    },

    {
      title: "Application Name",
      dataIndex: "trans",
      key: "trans",
      width: 100,
    },
    {
      title: "Status",
      dataIndex: "code",
      key: "code",
      width: 100,
    },
    {
      title: "Print",
      dataIndex: "salesarea",
      key: "salesarea",
      width: 100,
    },
    {
      title: "Upload",
      dataIndex: "where",
      key: "where",
      width: 100,
    },
    {
      title: "Exit Online",
      dataIndex: "invoice",
      key: "invoice",
      width: 100,
    },
    {
      title: "Status Print",
      dataIndex: "status",
      key: "status",
      width: 100,
    },
  ];
  const data = [{}];

  return (
    <>
      <Card>
        <CardBody>
          <CardTitle>
            <h3>Account Statement</h3>
          </CardTitle>
          <br />
          <h5>Member Resume</h5>
          <br />
          <Nav tabs>
            <NavItem>
              <NavLink
                className={classnames({ active: activeTab === "1" })}
                onClick={() => {
                  toggle("1");
                }}
              >
                General
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: activeTab === "2" })}
                onClick={() => {
                  toggle("2");
                }}
              >
                Print Form
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
                      <Col >
                        <Row>
                          <Col xs="3">
                            <Label check>
                              <Input type="checkbox" /> By Range
                            </Label>
                          </Col>
                        </Row>
                        <br />
                        <Row>
                          <Col xs="3">
                            <Label>Company</Label>
                            <Input type="select" disabled>
                              <option>Todas</option>
                            </Input>
                          </Col>
                        </Row>
                        <br />
                        <Row>
                          <Col xs="3">
                            <Label>Period</Label>
                            <Input type="select" disabled>
                              <option>All</option>
                            </Input>
                          </Col>
                        </Row>
                        <br />
                        <Row>
                          <Col xs="3">
                            <Label>Translate Date</Label>
                            <Input type="date" disabled></Input>
                          </Col>
                        </Row>
                        <br />
                        <Row>
                          <Col xs="3">
                            <Label>Statement Date</Label>
                            <Input type="date" disabled></Input>
                          </Col>
                        </Row>
                        <br />
                        <Row>
                          <Col xs="3">
                            <Label>Month for Billing</Label>
                            <Input type="select">
                              <option>1</option>
                            </Input>
                          </Col>
                        </Row>
                        <br />
                        <Row>
                          <Col xs="3">
                            <Label>Year for Billing</Label>
                            <Input type="select">
                              <option>2021</option>
                            </Input>
                          </Col>
                        </Row>
                        <br />
                        <Row>
                          <Col xs="3">
                            <Label>Send Statement</Label>
                            <Input type="select">
                              <option></option>
                            </Input>
                          </Col>
                        </Row>
                        <br />
                        <Row>
                          <Col xs="3">
                            <Label check>
                              <Input type="checkbox" /> Auto Debit C/C
                            </Label>
                          </Col>
                        </Row>
                        <Row>
                          <Col xs="3">
                            <Label check>
                              <Input type="checkbox" /> Overwrite
                            </Label>
                          </Col>
                        </Row>
                      </Col>
                      <Col >
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
                      </Col>
                    </Row>
                  </Card>
                </Col>
              </Row>
            </TabPane>
          </TabContent>
          <Row>
            <Col xs="3">
              <Label check>
                <Input type="checkbox" /> Print All
              </Label>
            </Col>
            <Col xs="3">
              <Label check>
                <Input type="checkbox" /> Upload All
              </Label>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </>
  );
}
