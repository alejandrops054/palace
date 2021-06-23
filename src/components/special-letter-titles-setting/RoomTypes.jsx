/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/

import React from "react";
import { Container, Row, Col, Input, Button, Label } from "reactstrap";
import Table from "rc-table";

const columns = [
    {
      title: "Code",
      dataIndex: "code",
      key: "code",
      width: 130,
    },
    {
        title: "Description",
        dataIndex: "desc",
        key: "desc",
        width: 130,
      },
      {
        title: "Status",
        dataIndex: "status",
        key: "status",
        width: 130,
      },

      {
        title: "Group",
        dataIndex: "group",
        key: "group",
        width: 130,
      },{
        title: "Sub Group",
        dataIndex: "subGroup",
        key: "subGroup",
        width: 130,
      },
    
]
function RoomTypes() {
  return (
    <Container fluid>
      <Row>
        <h1>Room Types</h1>
        <Col lg={{size:7, offset:2}}  md={{size:7, offset:2}} >
          <Row className="border mr-1">
            <Col >
              <Label>
                {" "}
                Code: <Input type="text" />{" "}
              </Label>
            </Col>
            <Col>
              <Label>
                {" "}
                Description: <Input type="text" />{" "}
              </Label>
            </Col>
          </Row>
        </Col>
        <Col lg={{size:2}} md={{ size: 2 }}>
          <Row>
            <Button>Apply Filter</Button>
          </Row>
          <Row className="mt-2">
            <Button>Clear Filter</Button>
          </Row>
        </Col>
      </Row>
      <Row>
          <Col>
            <Button>OrderSection</Button>
            <Button>Order</Button>
            <Button>Log</Button>
            <Button>Add</Button>
            <Button>Properties</Button>
            <Button>Refresh</Button>
            
          </Col>
      </Row>
      <Row>
          <Table columns={columns}/>
      </Row>
      <Row>
          <Col lg={{offset:10}}>
          <Button>Close</Button>
          </Col>
      </Row>
    </Container>
  );
}

export default RoomTypes;
