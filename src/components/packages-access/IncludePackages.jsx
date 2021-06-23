/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos 
*/

import React from "react";
import Table from "rc-table";
import { Select, Button, Checkbox, Hr } from "../index";
import {  Form, Label, Input, Row, Col, Card } from 'reactstrap';
import AirCupons from "./AirCupons";
import Golf50 from './Golf50'
import AccessGolfCoursess from "./AccessGolfCoursess";
import HotelReservation from "./HotelReservation";


const IncludePackages = () => {
  return (
    <>
    <Card>
      <Row>
        <Col>
          <AirCupons/>
        </Col>
      </Row>
    </Card>
    <Hr/>
    <Card>
      <Row>
        <Col>
          <Golf50/>
        </Col>
      </Row>
    </Card>
    <Hr/>
    <Card>
      <Row>
        <Col>
          <AccessGolfCoursess/>
        </Col>
      </Row>
    </Card>
    <Hr/>
    <Card>
      <Row>
        <Col>
          <HotelReservation/>
        </Col>
      </Row>
    </Card>
    
    </>
  );
}

export default IncludePackages