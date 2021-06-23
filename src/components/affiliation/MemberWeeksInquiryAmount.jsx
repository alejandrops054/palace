/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contrato1s
Comentarios: xxxxx
*/

import React from 'react'
import {
    Col,
    Input,
    Label,
    Row,
    InputGroup,
  } from "reactstrap";

function MemberWeeksInquiryAmount() {
    return (
        <>
            <Row className="mt-5">
        <h4>Amount</h4>
        <Row>
          <Row>
            <Col>
              <Label>PURCHASE SALE AMT</Label>
            </Col>
            <Col>
              <Label>TOT GOLF AFFILIAT</Label>
            </Col>
            <Col>
              <Label>PRINCIPAL COLLECTED</Label>
            </Col>
            <Col>
              <Label>ESCROW PD</Label>
            </Col>
            <Col>
              <Label>DOWEN COMP</Label>
            </Col>
          </Row>
          <Row>
            <Col>
              <Input type="text" />
            </Col>
            <Col>
              <Input type="text" />
            </Col>
            <Col>
              <Input type="text" />
            </Col>
            <Col>
              <Input type="text" />
            </Col>
            <Col>
              <Input type="text" />
            </Col>
          </Row>
          <Row className="mt-5">
            <Col lg="4">
              <InputGroup>
                <Label>PALACE ELITE AMOUNT: </Label>
                <Input type="text" />
              </InputGroup>
            </Col>
          </Row>
        </Row>
      </Row>
      
        </>
    )
}

export default MemberWeeksInquiryAmount
