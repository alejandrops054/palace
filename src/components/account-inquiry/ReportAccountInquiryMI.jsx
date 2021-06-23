import React from "react";
import {
  Row,
  Col,
  Input,
  Label,
  InputGroup,
  InputGroupText,
  InputGroupAddon,
} from "reactstrap";
import InfoMembersNoContainer from "../info-members/InfoMembersNoContainer";
function ReportAccountInquiryMI() {
  return (
    <>
      <Row>
        <Col
          lg={{ size: 4, offset: 4 }}
          md={{ size: 4, offset: 4 }}
          sm={{ size: 8, offset: 2 }}
        >
          <InputGroup>
            <Label>Application: </Label>
            <Input type="text"></Input>
            <InputGroupAddon addonType="append">
              <InputGroupText>...</InputGroupText>
            </InputGroupAddon>
          </InputGroup>
        </Col>
      </Row>
      <Row>
        <Col
          lg={{ size: 4, offset: 5 }}
          md={{ size: 4, offset: 5 }}
          sm={{ size: 3, offset: 5 }}
        >
          <InfoMembersNoContainer title="Company" text="Company" />
          <InfoMembersNoContainer title="Member Name" text="Name" />
        </Col>
      </Row>
    </>
  );
}

export default ReportAccountInquiryMI;
