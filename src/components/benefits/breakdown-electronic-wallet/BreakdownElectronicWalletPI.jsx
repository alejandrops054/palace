import React from "react";
import { Row, Col } from "reactstrap";
import {InfoMembers}  from '../../index'

function BreakdownElectronicWalletPI() {
  return (
    <>
      <Col>
        <span>Product Information</span>
        <Row>
          <Col>
            <Row>
              <InfoMembers
                title="Account number:"
                text="03974374747823432874"
              />
            </Row>
            <Row>
              <InfoMembers
                title="Product number:"
                text="03974374747823432874"
              />
            </Row>
          </Col>
          <Col>
            <Row>
              <InfoMembers title="Amount:" text="200.00" />
            </Row>
            <Row>
              <InfoMembers title="Total payments:" text="21" />
            </Row>
          </Col>
        </Row>
      </Col>
    </>
  );
}

export default BreakdownElectronicWalletPI;
