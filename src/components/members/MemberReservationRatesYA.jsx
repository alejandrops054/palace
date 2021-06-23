/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos Dev01
Comentarios: xxxxx
*/

import React from "react";
import { Col, Row, Form } from "reactstrap";
import { Checkbox } from "../index";

const years = [2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021];

function MemberReservationRatesYA(props) {
  return (
    <>
    <Form>
      <Row md={5}>
        <Col lg='4'></Col>
          <Col lg='8'>
          <h6>Years Available</h6>
          <ul>
            {years.map((value, index) => {
              return (
                <li key={index} style={{listStyle:'none'}}>
                  <Checkbox value={value} name={value} label={value}/>
                </li>
              );
            })}
          </ul>
          </Col>
      </Row>
    </Form>
    </>
  );
}

export default MemberReservationRatesYA;
