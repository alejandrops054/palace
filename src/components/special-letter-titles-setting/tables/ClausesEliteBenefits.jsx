import React from "react";
import {Container, Row, Col, Input, Label} from 'reactstrap'

function ClausesEliteBenefits() {
  return (
    <Container fluid>
        <Row>
            <Label>
                Clauses Weeks Extra <Input type="select"/>
            </Label>
        </Row>
        <Row>
            <Label>
               Description spanish <Input type="textarea"/>
            </Label>
        </Row>
        <Row>
            <Label>
                Clauses Exchange Weeks <Input type="select"/>
            </Label>
        </Row>
        <Row>
            <Label>
               Description spanish <Input type="textarea"/>
            </Label>
        </Row>
        <Row>
            <Label>
                Clauses Occupation <Input type="select"/>
            </Label>
        </Row>
        <Row>
            <Label>
               Description spanish <Input type="textarea"/>
            </Label>
        </Row>
    </Container>
  );
}

export default ClausesEliteBenefits;
