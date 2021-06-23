/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/
import React from "react";
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
  ButtonGroup,
} from "reactstrap";

export default function View() {
  const columns = [
    {
      title: "Menu ",
      dataIndex: "menu",
      key: "menu",
      width: 40,
      render: () => (
        <Input type="select">
          <option>Menu</option>
        </Input>
      ),
    },

    {
      title: "Description",
      dataIndex: "description",
      key: "description",
      width: 50,
    },
  ];
  const data = [
    {
      menu: "146",
      description: "Member Report",
    },
  ];
  const columns2 = [
    {
      title: "User Class ",
      dataIndex: "userclass",
      key: "userclass",
      width: 40,
      render: () => (
        <Input type="select">
          <option>CLB_VLOS_BP</option>
          <option>CLB_VLOS_MPS</option>
          <option>CLB_VLOS_PL</option>
          <option>CLB_VLOS_BP</option>
        </Input>
      ),
    },

    {
      title: "Description",
      dataIndex: "description",
      key: "description",
      width: 100,
    },
  ];
  const data2 = [
    {
      userclass: "",
      description: "Usuario Vlo's de Sala Beach Palace",
    },
    {
      userclass: "",
      description: "Usuario Vlo's de Sala Beach Palace",
    },
    {
      userclass: "",
      description: "Usuario Vlo's de Sala Beach Palace",
    },
  ];
  return (
    <>
      <Card>
        <CardBody>
          <CardTitle>
            <h2>View</h2>
          </CardTitle>
          <br />
          <Row>
            <Col xs="3">
              <Label>Code</Label>
              <Input type="text" />
            </Col>
            <Col xs="3"></Col>
            <Col xs="3">
              <br />
              <Label check>
                <Input type="checkbox" /> Special
              </Label>
            </Col>
          </Row>
          <br />
          <Row>
            <Col xs="8">
              <Label>Description</Label>
              <Input type="text" />
            </Col>
          </Row>
          <br />
          <Row>
            <Col xs="3">
              <Label>System</Label>
              <Input type="text" />
            </Col>
            <Col xs="3">
              <br />
              <Input type="select">
                <option>Systema de Contratos</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Input>
            </Col>
          </Row>
          <br />
          <Row>
            <Col xs="5">
              <Label>Status Help</Label>
              <Input type="text" />
            </Col>
          </Row>
          <br />
          <Row>
            <Col xs="5">
              <Label>Tag</Label>
              <Input type="text" />
            </Col>
          </Row>
          <br />
          <Row>
            <Col xs="12">
              <Table columns={columns} dataSource={data} />
              <span className="owner">Menus : 1</span>
            </Col>
          </Row>
          <br />
          <Row>
            <Col xs="12">
              <Table columns={columns2} dataSource={data2} />
              <span className="owner">User Classes : 13</span>
            </Col>
          </Row>
          <Row>
            <Col xs="8"></Col>
            <Col xs="4">
              <ButtonGroup>
                <Button color="primary">Save</Button>
                <Button color="primary">Close</Button>
              </ButtonGroup>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </>
  );
}
