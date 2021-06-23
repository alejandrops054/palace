import React, { useState } from "react";
import {
  Label,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Card,
  CardBody,
  CardTitle,
  Col,
  Row,
  Container,
  Input,
} from "reactstrap";
import Language from "./tables/Language";
import Hotels from "./tables/Hotels";
import ClausesEliteBenefits from "./tables/ClausesEliteBenefits";
import ClausesReservationsRates from "./tables/ClausesReservationsRates";

function RoomType() {
  const [activeTab, setActiveTab] = useState("1");

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <Container fluid>
      <h1>Room Type</h1>
      <Row>
        <Col>
          <Row>
            <Col lg={{ size: 8 }}>
              <Row>
                <Label>
                  Code <Input type="text" />
                </Label>
              </Row>
            </Col>
            <Col>
              <Label>
                Status{" "}
                <Input type="select">
                  <option>Alta</option>
                </Input>
              </Label>
            </Col>
          </Row>
          <Row>
            <Col lg={{ size: 9 }}>
              <Row>
                <Label>
                  Code <Input type="text" />
                </Label>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col>
              <Row>
                <Label>
                  Minimum Occupancy <Input type="text" />
                </Label>
              </Row>
            </Col>
            <Col className="mt-5">
              <Row>
                <Label>
                  <Input type="checkbox" /> Only Adults
                </Label>
              </Row>
            </Col>
            <Col className="mt-5">
              <Row>
                <Label>
                  <Input type="checkbox" /> Adults Extra
                </Label>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col>
              <Row>
                <Label>
                  Maximum Occupancy <Input type="text" />
                </Label>
              </Row>
            </Col>
            <Col>
              <Row>
                <Label>
                  Imperal Weeks <Input type="number" />
                </Label>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col>
              <Row>
                <Label>
                  Maximum Occupancy 2<Input type="text" />
                </Label>
              </Row>
            </Col>
            <Col>
              <Row>
                <Label>
                  Elite Weeks <Input type="number" />
                </Label>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col>
              <Row>
                <Label>
                  Imperial Week Rate Type
                  <Input type="select">
                    <option>Special</option>
                  </Input>
                </Label>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col>
              <Row>
                <Label>
                  Group
                  <Input type="select">
                    <option>Standard</option>
                  </Input>
                </Label>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col>
              <Row>
                <Label>
                  Sub Group
                  <Input type="select">
                    <option></option>
                  </Input>
                </Label>
              </Row>
            </Col>
          </Row>
        </Col>
        <Col>
          <Row>
            <Col lg={{ size: 5, offset: 2 }}>
              <Row>
                <Label>
                  Print Order <Input type="text" />
                </Label>
              </Row>
            </Col>
            <Col lg={{ size: 5 }}>
              <Row>
                <Label>
                  Ponderation <Input type="text" />
                </Label>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col lg={{ size: 5, offset: 2 }}>
              <Row>
                <Label>
                  Assignment Order <Input type="text" />
                </Label>
              </Row>
            </Col>
            <Col lg={{ size: 5 }}>
              <Row>
                <Label>
                  <Input type="checkbox" /> Ponderation{" "}
                </Label>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col lg={{ size: 10, offset: 2 }}>
              <Row>
                <Label>
                  Category (Only For The Grand){" "}
                  <Input type="select">
                    <option></option>
                  </Input>
                </Label>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col lg={{ size: 10, offset: 2 }}>
              <Row>
                <Label>
                  Rate Type (Only For The Grand){" "}
                  <Input type="select">
                    <option></option>
                  </Input>
                </Label>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col lg={{ size: 10, offset: 2 }}>
              <Row>
                <Label>
                  Reservation Rate Type Extra{" "}
                  <Input type="select">
                    <option></option>
                  </Input>
                </Label>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col lg={{ size: 5, offset: 2 }}>
              <Row>
                <Label>
                  Reservation Cost Type <Input type="select" />
                </Label>
              </Row>
            </Col>
            <Col lg={{ size: 5 }}>
              <Row>
                <Label>
                  Discount % <Input type="text" />
                </Label>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col lg={{ size: 10, offset: 2 }}>
              <Row>
                <Label>
                  Market{" "}
                  <Input type="select">
                    <option></option>
                  </Input>
                </Label>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <Nav tabs>
          <NavItem>
            <NavLink
              // className={classnames({ active: activeTab === '1' })}
              onClick={() => {
                toggle("1");
              }}
            >
              Language
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              // className={classnames({ active: activeTab === '2' })}
              onClick={() => {
                toggle("2");
              }}
            >
              Hotels
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              // className={classnames({ active: activeTab === '3' })}
              onClick={() => {
                toggle("3");
              }}
            >
              Clauses Elite Benefits
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              // className={classnames({ active: activeTab === '4' })}
              onClick={() => {
                toggle("4");
              }}
            >
              Clauses Reservations Rates
            </NavLink>
          </NavItem>
        </Nav>
        <Card>
          <CardBody>
            <TabContent activeTab={activeTab}>
              <TabPane tabId="1">
                <Language />
              </TabPane>
              <TabPane tabId="2">
                <Hotels />
              </TabPane>
              <TabPane tabId="3">
                <ClausesEliteBenefits />
              </TabPane>
              <TabPane tabId="4">
                <ClausesReservationsRates />
              </TabPane>
            </TabContent>
          </CardBody>
        </Card>
      </Row>
    </Container>
  );
}

export default RoomType;
