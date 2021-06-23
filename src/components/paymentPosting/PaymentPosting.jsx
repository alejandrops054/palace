/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
*/
import React, { useState } from "react";
import "antd/dist/antd.css";
import {
  Col,
  Row,
  Card,
  CardBody,
  CardTitle,
  Input,
  Label,
  Button,
  ButtonGroup,
} from "reactstrap";

export default function PaymentPosting() {

  return (
    <>
      <Card>
        <CardBody>
          <CardTitle>
            <h3>Payment Posting</h3>
          </CardTitle>
          <br />
          <h5>Member Information</h5>
          <br />
          <Row>
            <Col xs="3">
              <Label>Member Name</Label>
              <Input type="text" />
            </Col>
          </Row>
          <br />
          <Row>
            <Col xs="3">
              <Label>Company </Label>
              <Input type="text" />
            </Col>
            <Col xs="3">
              <Label>Application </Label>
              <Input type="text" />
            </Col>
            <Col xs="3">
              <Label> Portafolio</Label>
              <Input type="text" />
            </Col>
            <Col xs="3">
              <Button color="primary">Specify Member</Button>
            </Col>
          </Row>
          <br />
          <Card>
            <CardBody>
              <CardTitle>
                <h5>Current Member Statistics</h5>
              </CardTitle>
              <Row>
                <Col xs="9"></Col>
                <Col xs="3">
                  <Label>FDB</Label>
                  <Input type="text" />
                </Col>
              </Row>
              <br />
              <Row>
                <Col xs="1"></Col>
                <Col xs="2">
                  <span>DOWN PAYMENT</span>
                </Col>
                <Col xs="1"></Col>
                <Col xs="2">
                  <span>COLLECTED</span>
                </Col>
                <Col xs="1"></Col>
                <Col xs="2">
                  <span>REMAINING</span>
                </Col>
                <Col xs="3">
                  <Row>
                    <Col>
                      <Label>Prints</Label>
                      <Input type="text" />
                    </Col>
                    <Col>
                      <Label>Delq</Label>
                      <Input type="text" />
                    </Col>
                  </Row>
                </Col>
              </Row>
              <br />
              <Row>
                <Col xs="3">
                  <Label>Escrow</Label>
                  <Input type="text" />
                </Col>

                <Col xs="3">
                  <Label>Principal</Label>
                  <Input type="text" />
                </Col>

                <Col xs="3">
                  <Label>.</Label>
                  <Input type="text" />
                </Col>
                <Col xs="3">
                  <Label>Sale Price</Label>
                  <Input type="text" />
                </Col>
              </Row>
              <br />
              <Row>
                <Col xs="3">
                  <Label>Balance</Label>
                  <Input type="text" />
                </Col>

                <Col xs="3">
                  <Label>Interest</Label>
                  <Input type="text" />
                </Col>

                <Col xs="3">
                  <Label>.</Label>
                  <Input type="text" />
                </Col>
                <Col xs="3">
                  <Label>Monthy Print</Label>
                  <Input type="text" />
                </Col>
              </Row>
              <br />
              <Row>
                <Col xs="3">
                  <Label>Total</Label>
                  <Input type="text" />
                </Col>

                <Col xs="3">
                  <Label>Total</Label>
                  <Input type="text" />
                </Col>

                <Col xs="3">
                  <Label>.</Label>
                  <Input type="text" />
                </Col>
                <Col xs="3">
                  <Label>Suspense</Label>
                  <Input type="text" />
                </Col>
              </Row>
            </CardBody>
          </Card>
          <br />
          <Card>
            <CardBody>
              <CardTitle>
                <h5>CAPTURE BANK ACCOUNT</h5>
              </CardTitle>
              <Row>
                <Col xs="3">
                  <br />
                  <Card>
                    <CardBody>
                      <CardTitle>
                        <span>Bank Account</span>
                      </CardTitle>
                      <br />
                      <Row>
                        <Col>
                          <Label>Bank</Label>
                          <Input type="select" disabled>
                            <option>Unassigned</option>
                          </Input>
                        </Col>
                      </Row>
                      <br />
                      <Row>
                        <Col>
                          <Label>Room </Label>
                          <Input type="select" disabled>
                            <option>BEACH PALACE</option>
                          </Input>
                        </Col>
                      </Row>
                      <br />
                      <Row>
                        <Col>
                          <Label>Currency </Label>
                          <Input type="select" disabled>
                            <option></option>
                          </Input>
                        </Col>
                      </Row>
                    </CardBody>
                  </Card>
                </Col>
                <Col xs="9">
                  <br />
                  <Row>
                    <Col xs="3">
                      <Label>TRANSACTION TYPE</Label>
                      <Input type="text" />
                    </Col>
                    <Col xs="3">
                      <Label>.</Label>
                      <Input type="select">
                        <option></option>
                      </Input>
                    </Col>
                    <Col xs="3">
                      <Label>CC. TYPE</Label>
                      <Input type="select" disabled>
                        <option>AMERICAN EXPRESS</option>
                      </Input>
                    </Col>
                  </Row>
                  <br />
                  <Row>
                    <Col xs="6">
                      <Label>BANK ACCOUNT</Label>
                      <Input type="text" />
                    </Col>
                    <Col xs="3">
                      <Label>AFFILATION</Label>
                      <Input type="select" disabled>
                        <option>AMERICAN EXPRESS</option>
                      </Input>
                    </Col>
                  </Row>
                  <br />
                  <Row>
                    <Col xs="6">
                      <Label>PAYMENT REF.</Label>
                      <Input type="text" />
                    </Col>
                  </Row>
                  <br/>
                  <Row>
                    <Col xs="6">
                      <Label>BANK ACCOUNT</Label>
                      <Input type="text" />
                    </Col>
                    <Col xs="3">
                      <Label>APPLICATION BANK</Label>
                      <Input type="select" disabled>
                        <option>AMERICAN EXPRESS</option>
                      </Input>
                    </Col>
                  </Row>
                  <br />
                </Col>
              </Row>
            </CardBody>
          </Card>
          <Card>
            <CardBody>
              <CardTitle>
                <span>Payment Data</span>
              </CardTitle>
              <br />
              <Row>
                <Col xs="3">
                  <Label>INVOICE CHECK #</Label>
                  <Input type="text" disabled></Input>
                </Col>
                <Col xs="3">
                  <Label>TRANSLATION DATE</Label>
                  <Input type="date" disabled></Input>
                </Col>
              </Row>
              <br />
              <Row>
                <Col xs="3">
                  <Label>.</Label>
                  <Input type="select" disabled>
                    <option></option>
                  </Input>
                </Col>
                <Col xs="3">
                  <Label>CODE</Label>
                  <Input type="select" disabled>
                    <option></option>
                  </Input>
                </Col>
                <Col xs="3">
                  <Label>WHERE</Label>
                  <Input type="select" disabled>
                    <option></option>
                  </Input>
                </Col>
                <Col xs="3">
                  <span>(T.M.W.P.C = cc)</span>
                  <br />
                  <span>(A = AEX. D = dirdep)</span>
                </Col>
              </Row>
              <br />
              <Row>
                <Col xs="6">
                  <Label>DESCRIPTION </Label>
                  <Input type="select" disabled>
                    <option></option>
                  </Input>
                </Col>
                <Col xs="3">
                  <Label>.</Label>
                  <Input type="select" disabled>
                    <option></option>
                  </Input>
                </Col>
                <Col xs="3">
                  <Label>EXCHANGE </Label>
                  <Input type="select" disabled>
                    <option></option>
                  </Input>
                </Col>
              </Row>
              <br />
              <Row>
                <Col>
                  <Card>
                    <CardBody>
                      <CardTitle>
                        <span>Avalaible Codes</span>
                      </CardTitle>
                      <br />
                      <Row>
                        <Col xs="12">
                          <span>
                            F = RED PRIN B=BOUCED CHK H= CREDIT NOTE D=DOWN PAY
                            E=ESCROW I=INTERES L=DEVIT ACT N=DispRf K=BAK CHARGE
                            M=MO PAYMENT O=TRANS 3RD P=PRINIPAL R=REFUND
                            T=TRANSFER CR W=OP MX ESC V=CNX VOUCER X=TRANSF BD
                            Y=DISCOUNT Z=MO NO INT G=ADMIN FEE Q=DEPOSIT
                            S=SUSPENSE J=CshMoRf
                          </span>
                        </Col>
                      </Row>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
              <br />
              <Row>
                <Col xs="4">
                  <Row>
                    <Col>
                      <Label>MO PAYMENTS</Label>
                      <Input type="text" disabled />
                    </Col>
                    <Col>
                      <Input type="checkbox" />
                      <Label>Late/Service Fee</Label>
                      <Input type="text" disabled />
                    </Col>
                  </Row>
                  <br />
                  <Row>
                    <Col>
                      <Label>PAYMENT AMT</Label>
                      <Input type="text" disabled />
                    </Col>
                    <Col>
                      <Input type="checkbox" />
                      <Label> Refinancing Fee</Label>
                      <Input type="text" disabled />
                    </Col>
                  </Row>
                </Col>

                <Col xs="8">
                  <Card>
                    <CardBody>
                      <CardTitle>
                        <span>Current Payment Application</span>
                      </CardTitle>
                      <br />
                      <Row>
                        <Col>
                          <Label>PRINCIPAL</Label>
                          <Input type="text" disabled />
                        </Col>
                        <Col>
                          <Label>INTEREST</Label>
                          <Input type="text" disabled />
                        </Col>
                        <Col>
                          <Label>SUPENSE</Label>
                          <Input type="text" disabled />
                        </Col>
                        <Col>
                          <Label>DOWN</Label>
                          <Input type="text" disabled />
                        </Col>
                      </Row>
                      <br />
                      <Row>
                        <Col>
                          <Label>ESCROW</Label>
                          <Input type="text" disabled />
                        </Col>
                        <Col>
                          <Label>OTHER</Label>
                          <Input type="text" disabled />
                        </Col>
                        <Col>
                          <Label>LATE FEE</Label>
                          <Input type="text" disabled />
                        </Col>
                        <Col>
                          <Label>REFINANCING FEE</Label>
                          <Input type="text" disabled />
                        </Col>
                      </Row>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </CardBody>
          </Card>
          <Row>
            <Col xs="9"></Col>
            <Col xs="3">
              <ButtonGroup>
                <Button color="primary">Save</Button>
                <Button color="primary">Cancel</Button>
                <Button color="primary">Close</Button>
              </ButtonGroup>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </>
  );
}
