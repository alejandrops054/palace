/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos Dev01
Comentarios: xxxxx
*/

import React from "react";
import { Row, Col } from "reactstrap";
import { InfoMembersNoContainer } from "..";

function MemberReservationRatesMI(props) {
  return (
    <>
      <Row>
        <Row>
          <h4>Member Information</h4>
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
            <InfoMembersNoContainer title="Application" text="60007770" />
          </Col>
        </Row>
      </Row>
    </>
  );
}

export default MemberReservationRatesMI;
