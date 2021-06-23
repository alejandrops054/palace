/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos 
*/

import React from "react";
import { Row, Col, Input, Label, InputGroup, Button } from "reactstrap";
import { Checkbox } from "..";

import ReportAccountInquiryMI from "./ReportAccountInquiryMI";
function ReportAccountInquiry() {
  return (
    <div>
      <h2>Account Inquiry</h2>
      <Row>
        <h4>Member Information</h4>
        <ReportAccountInquiryMI />
        <Row>
          <Col>
            <InputGroup>
              <Label>From date: </Label>
              <Input type="date"></Input>
            </InputGroup>
          </Col>
          <Col>
            <InputGroup>
              <Label>To date: </Label>
              <Input type="date"></Input>
            </InputGroup>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col
            lg={{ size: 4, offset: 4 }}
            md={{ size: 4, offset: 4 }}
            sm={{ size: 3, offset: 4 }}
          >
            <Checkbox label="Open report after generate" />
          </Col>
        </Row>
        <Row>
          <Col
            lg={{ size: 3, offset: 4 }}
            md={{ size: 3, offset: 9 }}
            sm={{ size: 3, offset: 4 }}
          >
            <Button className="">Execute</Button>

            <Button>Close</Button>
          </Col>
        </Row>
      </Row>
    </div>
  );
}

export default ReportAccountInquiry;
