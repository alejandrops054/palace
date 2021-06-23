/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/

import React from "react";
import { Row, Col, Button, Label, Input, Container } from "reactstrap";
import ReleaseAffiliation from "./ReleaseAffiliation";
import ReleaseAffiliationCriteria from "./ReleaseAffiliationCriteria";
import ReleaseAffiliationRSA from "./ReleaseAffiliationRSA";
function ReleaseAffiliationBalance() {
  return (
    <>
      <Container fluid>
        <h2>Release Affiliation Balance</h2>
        <Row>
          <ReleaseAffiliationCriteria />
          <ReleaseAffiliation />
          <ReleaseAffiliationRSA />
        </Row>
      </Container>
    </>
  );
}

export default ReleaseAffiliationBalance;
