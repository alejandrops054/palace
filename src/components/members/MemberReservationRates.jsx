/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos Dev01
Comentarios: xxxxx
*/

import React from "react";
import { Row, Col, Button } from "reactstrap";
import { InfoMembersNoContainer, Checkbox } from "..";
import Table from "rc-table";
import MemberReservationRatesMI from "./MemberReservationRatesMI";
import MemberReservationRatesYA from "./MemberReservationRatesYA";

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
];

function MemberReservationRates(props) {
  return (
    <>
      <h2>Member Reservation Rates</h2>
      <MemberReservationRatesMI />
      <Row>
        <Col className="border">
          <Table columns={col} />
        </Col>
        <MemberReservationRatesYA />
      </Row>
      <Row className="justify-content-around">
        <Col>
          <InfoMembersNoContainer title="Reservation Rates" text="14" />
        </Col>

        <Col lg={{ size: 2, offset: 1 }}>
          <Button>Log</Button>

          <Button>Save Changes</Button>

          <Button>Close</Button>
        </Col>
      </Row>
    </>
  );
}

export default MemberReservationRates;
