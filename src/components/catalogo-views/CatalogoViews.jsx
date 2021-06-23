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

export default function Views() {
  const columns = [
    {
      title: "Code ",
      dataIndex: "code",
      key: "code",
      width: 100,
    },

    {
      title: "Description",
      dataIndex: "description",
      key: "description",
      width: 100,
    },
    {
      title: "System",
      dataIndex: "system",
      key: "system",
      width: 100,
    },
    {
        title: "ToolTip",
        dataIndex: "tooltip",
        key: "tooltip",
        width: 100,
      },
  ];
  const data = [
    {
      code: "1",
      description: "Panel de Password",
      system: "Tablas Globales",
      tooltip: "Mantenimiento de Vistas",
    },
    {
        code: "1",
      description: "Panel de Password",
      system: "Tablas Globales",
      tooltip: "Mantenimiento de Vistas",
      },
      {
        code: "1",
      description: "Panel de Password",
      system: "Tablas Globales",
      tooltip: "Mantenimiento de Vistas",
      },
  ];
  return (
    <>
      <Card>
        <CardBody>
          <CardTitle>
            <h2>Views</h2>
            <h4>Catalog of Views</h4>
          </CardTitle>
          <br />
             <Row>
              <Col xs="3">
                <Label>Code</Label>
                <Input type="text" />
              </Col>
              <Col xs="3">
                <Label>Description</Label>
                <Input type="text" />
              </Col>
              <Col xs="3">
                <br />
                <Button color="primary">Apply Filter</Button>
              </Col>
            </Row>
            <br />
            <Row>
              <Col xs="3">
                <Label>System </Label>
                <Input type="select">
                      <option></option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </Input>
              </Col>
              <Col xs="3">
                <Label> Tooltip</Label>
                <Input type="text" />
              </Col>
              <Col xs="3">
                <br />
                <Button color="primary">Clear Filter</Button>
              </Col>
            </Row>
          <br />
          <Row>
            <Col xs="12">
              <Table columns={columns} dataSource={data} />
            </Col>
          </Row>
          <Row>
            <Col xs="7">
            </Col>
            <Col xs="5">
            <ButtonGroup>
            <Button color="primary">Log</Button>
            <Button color="primary">Add</Button>
            <Button color="primary">Properties</Button>
            <Button color="primary">Add Like</Button>
            <Button color="primary">Refresh</Button>
            <Button color="primary">Close</Button>
            </ButtonGroup>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </>
  );
}
