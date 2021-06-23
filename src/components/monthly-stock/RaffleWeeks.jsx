/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos Dev01
Comentarios: xxxxx
*/

import React from "react";
import {
  Container,
  Col,
  Row,
  Button,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  Label,
} from "reactstrap";

function RaffleWeeks() {
  return (
    <Container fluid>
      <Row>
        <Col>
          <h1>Raffle Weeks</h1>
        </Col>
        <Col>
          <Row className="mt-2">
            <Col lg={{ size: 4, offset: 6 }} md={{ size: 3, offset: 6 }}>
              <Row>
                <Button block>Get Raffle Week</Button>
              </Row>
            </Col>
          </Row>
          <Row className="mt-1">
            <Col lg={{ size: 4, offset: 6 }} md={{ size: 3, offset: 6 }}>
              <Row>
                <Button block>New</Button>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <Row>
          <Col lg={{ size: 2 }} md={{ size: 2 }}>
            <Label>
              Project: <Input type="text" />
            </Label>
          </Col>
          <Col className="mt-4" lg={{ size: 5 }}>
            <Input type="select" />
          </Col>
        </Row>
        <Row>
          <Col lg={{ size: 2 }} md={{ size: 2 }}>
            <Label>
              Office: <Input type="text" />
            </Label>
          </Col>
          <Col className="mt-4" lg={{ size: 5 }}>
            <Input type="select" />
          </Col>
        </Row>
        <Row>
          <Col lg={{ size: 2 }} md={{ size: 2 }}>
            <Label>
              Folio: <Input type="text" />
            </Label>
          </Col>
        </Row>
        <Row>
          <Col lg={{ size: 3 }} md={{ size: 3 }}>
            <Label>
              Application: <Input type="text" />
            </Label>
          </Col>
        </Row>
        <Row>
          <Col lg={{ size: 5 }} md={{ size: 5 }}>
            <Row>
              <Label>
                First: <Input type="text" />
              </Label>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col lg={{ size: 5 }} md={{ size: 5 }}>
            <Row>
              <Label>
                Last: <Input type="text" />
              </Label>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col lg={{ size: 10 }} md={{ size: 10 }}>
            <Row>
              <Label>
                Address: <Input type="text" />
              </Label>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col lg={{ size: 10 }} md={{ size: 8 }}>
            <Row>
              <InputGroup>
                <Label>
                  {" "}
                  Phone: <Input type="number" />{" "}
                </Label>
                <InputGroupAddon addonType="prepend">
                  <InputGroupText className="mt-4 ml-2">.</InputGroupText>
                </InputGroupAddon>
              </InputGroup>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col lg={{ size: 10 }} md={{ size: 8 }}>
            <Row>
              <InputGroup>
                <Label>
                  {" "}
                  City: <Input type="text" />{" "}
                </Label>
                <InputGroupAddon addonType="prepend">
                  <InputGroupText className="mt-4 ml-2">..</InputGroupText>
                </InputGroupAddon>
              </InputGroup>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col lg={{ size: 10 }} md={{ size: 10 }}>
            <Row>
              <Label>
                State: <Input type="text" />
              </Label>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col lg={{ size: 5 }} md={{ size: 5 }}>
            <Row>
              <Label>
                Country: <Input type="text" />
              </Label>
            </Row>
          </Col>
          <Col lg={{ size: 3 }} md={{ size: 3 }}>
            <Row>
              <Label>
                Zip: <Input type="text" />
              </Label>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col lg={{ size: 3 }} md={{ size: 3 }}>
            <Row>
              <Label>
                Sale Date: <Input type="date" />
              </Label>
            </Row>
          </Col>
          <Col lg={{ size: 3, offset: 1 }} md={{ size: 3, offset: 1 }}>
            <Row>
              <Label>
                Venc Yrs: <Input type="number" />
              </Label>
            </Row>
          </Col>
          <Col lg={{ size: 3, offset: 1 }} md={{ size: 3, offset: 1 }}>
            <Row>
              <Label>
                Validate: <Input type="date" />
              </Label>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col lg={{ size: 6 }} md={{ size: 6 }}>
            <Row>
              <Label>
                Language: <Input type="select" />
              </Label>
            </Row>
          </Col>
        </Row>
      </Row>
    </Container>
  );
}

export default RaffleWeeks;
