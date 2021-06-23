/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos Dev01
Comentarios: xxxxx
*/

import React from "react";
import { Col, Row } from "reactstrap";
import {InfoMembersNoContainer} from '../index'

function MemberSalesmenInfo() {
  return (
    <>
      <Row>
        <h4>Member Information</h4>
        <Row>
          <Col>
            <InfoMembersNoContainer title="Company" text="5" />
          </Col>
          <Col>
            <InfoMembersNoContainer title="Application" text="60077770" />
          </Col>
          <Col>
            <InfoMembersNoContainer
              title="Member Name"
              text="PERSONA SALES MEN"
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <InfoMembersNoContainer title="Office" text="5" />
          </Col>
          <Col
            lg={{ offset: 2, size: 4 }}
            md={{ offset: 1, size: 4 }}
            sm={{ offset: 1, size: 4 }}
          >
            <InfoMembersNoContainer title="Project" text="60077770" />
          </Col>
        </Row>
      </Row>
    </>
  );
}

export default MemberSalesmenInfo;
