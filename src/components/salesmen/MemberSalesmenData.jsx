/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos Dev01
Comentarios: xxxxx
*/
import React from "react";
import {
  Input,
  Label,
  Row,
  Col,
  Button,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
} from "reactstrap";

function MemberSalesmenData() {
  return (
    <>
      <h2>Member Salesmen</h2>
      <Row className="mb-2">
        <Col
          lg={{ size: 4 }}
          md={{ size: 5 }}
          sm={{ size: 6 }}
          xs={{ size: 6 }}
        >
          <Label>Number</Label>
          <Input type="number" />
        </Col>
      </Row>
      <Row className="mb-2">
        <Col
          lg={{ size: 4 }}
          md={{ size: 5 }}
          sm={{ size: 6 }}
          xs={{ size: 6 }}
        >
          <Label>Job</Label>
          <InputGroup>
            <Input type="text" />
            <InputGroupAddon addonType="append">
              <InputGroupText>
                <i className="fas fa-search"></i>
              </InputGroupText>
            </InputGroupAddon>
          </InputGroup>
        </Col>
      </Row>
      <Row className="mb-2">
        <Col
          lg={{ size: 4 }}
          md={{ size: 5 }}
          sm={{ size: 6 }}
          xs={{ size: 6 }}
        >
          <Label>Salesman</Label>
          <InputGroup>
            <Input />
            <InputGroupAddon addonType="append">
              <InputGroupText>
                <i className="fas fa-search"></i>
              </InputGroupText>
            </InputGroupAddon>
          </InputGroup>
        </Col>
      </Row>
      <Row className="mb-2">
        <Col>
          <Label>Name</Label>
          <Input type="text" />
        </Col>
      </Row>
      <Row className="mb-2">
        <Col
          lg={{ size: 4 }}
          md={{ size: 5 }}
          sm={{ size: 6 }}
          xs={{ size: 6 }}
        >
          <Label>Status</Label>
          <Input type="select">
            <option>Alta</option>
          </Input>
        </Col>
      </Row>
      <Row className="mb-2">
        <Col className="mt-5">
          <Button>Save</Button>
          <Button>Close</Button>
        </Col>
      </Row>
    </>
  );
}

export default MemberSalesmenData;
