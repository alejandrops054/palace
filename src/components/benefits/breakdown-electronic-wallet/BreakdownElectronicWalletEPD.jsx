import React from 'react'
import { Row, Col, Input, Label } from "reactstrap";

function BreakdownElectronicWalletEPD() {
    return (
        <>
           <Col>
        
        <span>Electronic Purse Detail</span>
          <Row>
            <Col>
              <Row>
                <Label>Quantity:</Label>
                <Input type="text" />
              </Row>
              <Row>
              <Label>Expiration:</Label>
                <Input type="date" />
              </Row>
            </Col>
            <Col>
              <Row>
              <Label>Payments:</Label>
                <Input type="number" />
              </Row>
              <Row>
              <Label>Financing type:</Label>
                <Input type="select">
                  <option></option>
                </Input>
              </Row>
            </Col>
          </Row>
        </Col> 
        </>
    )
}

export default BreakdownElectronicWalletEPD
