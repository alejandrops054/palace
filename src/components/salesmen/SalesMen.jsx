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
  FormGroup,
} from "reactstrap";

export default function SalesMen() {
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
      width: 100,
    },
    {
        title: "Job",
        dataIndex: "job",
        key: "job",
        width: 100,
      },
      {
        title: "Zone",
        dataIndex: "zone",
        key: "zone",
        width: 100,
      },
  ];
  const data = [
    { code: "L8", name: "Abril del Carmen Garzenas" , job: "Lega Representative", zone: "BP"},
    { code: "L5", name: "Abril del Carmen Garzenas" , job: "Lega Representative", zone: "BP"},
    { code: "C3", name: "Abril del Carmen Garzenas" , job: "Lega Representative", zone: "BP"},
    { code: "B2", name: "Abril del Carmen Garzenas" , job: "Lega Representative", zone: "BP"},


  ];
  return (
    <>
      <Card>
        <CardBody>
          <CardTitle>
            <h3>Salesmen</h3>
          </CardTitle>
          <br />

          <FormGroup check>
          <Row>
            <Col xs="4">
            <Label check>
              <Input type="radio" name="radio1" /> 
              Option two can be something
            </Label>
                </Col>
                <Col xs="6">
                <Input type="text"  />
                </Col>
                </Row>
                <Row>
                <Col xs="12">
                <Label check>
              <Input type="radio" name="radio1" /> Option three is
              disabled
            </Label>
                </Col>
                </Row>
          </FormGroup>
          <Row>
            <Col xs="12">
              <Table columns={columns} dataSource={data} />
            </Col>
          </Row>
        </CardBody>
      </Card>
    </>
  );
}
