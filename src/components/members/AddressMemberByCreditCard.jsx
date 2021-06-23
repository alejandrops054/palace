/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos Dev01
Comentarios: xxxxx
*/
import React from "react";
import { Button, Col, Row } from "reactstrap";
import { InfoMembersNoContainer } from "..";
import Table from "rc-table";

const col = [
  {
    title: "Application",
    dataIndex: "application",
    key: "application",
    width: 130,
  },
  {
    title: "Type Credit Card",
    dataIndex: "t-cc",
    key: "t-cc",
    width: 130,
  },
  {
    title: "Credit Card Number",
    dataIndex: "ccn",
    key: "ccn",
    width: 130,
  },
  {
    title: "Priority",
    dataIndex: "priority",
    key: "priority",
    width: 130,
  },
  {
    title: "Country",
    dataIndex: "country",
    key: "country",
    width: 130,
  },
];

function AddressMemberByCreditCard() {
  return (
    <>
      <h2>Address of member by credit card</h2>
      <Row>
        <h4>Member Information</h4>
        <Row>
          <Row>
            <Col>
              <InfoMembersNoContainer
                title="Member Name"
                text="NOMBRE COMPLETO"
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <InfoMembersNoContainer title="Company" text="5" />
            </Col>
            <Col>
              <InfoMembersNoContainer title="Application" text="6007770" />
            </Col>
          </Row>
        </Row>
      </Row>
      <Table columns={col} />
      <Row className="mt-5">
        <Col>
          <Button>Close</Button>
        </Col>
      </Row>
    </>
  );
}

export default AddressMemberByCreditCard;
