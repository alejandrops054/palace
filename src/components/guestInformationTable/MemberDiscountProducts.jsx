/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/
import React from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Card,
  CardBody,
  CardTitle,
  ButtonGroup,
  Container,
  Row,
  Col,
  Progress,
} from "reactstrap";

const MemberDiscountProducts = () => {
  return (
    <>
      <Card>
        <CardBody>
          <CardTitle>
            <h3>Member Discount Product</h3>
          </CardTitle>
          <br />
          <Form>
            <FormGroup>
              <Container>
                <Row>
                  <Col xs="6">
                    <span className="ant-form-text">
                      <h4>Member Information</h4>
                    </span>
                  </Col>
                  <Col xs="6">
                    <div className="text-center">
                      Current Amount $0.00 / $25,000.00 Total Amount Goal
                    </div>
                    <Progress multi>
                      <Progress bar value="15">
                        Meh
                      </Progress>
                      <Progress bar color="success" value="35">
                        Wow!
                      </Progress>
                      <Progress bar color="warning" value="25">
                        25%
                      </Progress>
                      <Progress bar color="danger" value="25">
                        LOOK OUT!!
                      </Progress>
                    </Progress>
                  </Col>
                </Row>
              </Container>
            </FormGroup>
                <Row>
                  <Col xs="12">
                    <Label>Member Name</Label>
                    <Input type="text" placeholder="OMER PEREZ MARTINEZ" />
                  </Col>
                </Row>
                <br />
                <Row>
                  <Col xs="6">
                    <Label>Company</Label>
                    <Input type="text" placeholder="7" />
                  </Col>
                  <Col xs="6">
                    <Label>Application</Label>
                    <Input type="text" placeholder="31244332" />
                  </Col>
                </Row>
                <br />
                <Row>
                  <Col xs="3">
                    <Label>Code</Label>
                    <Input type="text" placeholder="1" />
                  </Col>
                  <Col xs="5">
                    <br />
                    <ButtonGroup>
                      <Button>
                        <i className="fas fa-search"></i>
                      </Button>
                      <Button>
                        <i className="fas fa-plus">Add</i>
                      </Button>
                    </ButtonGroup>
                  </Col>
                  <Col xs="4">
                    <br />
                    <Label check>
                      <Input type="checkbox" /> Stock
                    </Label>
                  </Col>
                </Row>
                <br />
                <Row>
                  <Col xs="3">
                    <Label>Type</Label>
                    <Input type="text" placeholder="0" />
                  </Col>
                  <Col xs="5">
                    <br/>
                     <Input type="select">
                      <option></option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </Input>
                  </Col>
                  <Col xs="4">
                     <Label>Afilation Origin</Label>
                    <Input type="text" placeholder="0405032" />
                  </Col>
                </Row>
                <br />
                <Row>
                  <Col xs="3">
                    <Label>Product</Label>
                    <Input type="text" placeholder="0" />
                  </Col>
                  <Col xs="5">
                    <br/>
                     <Input type="select">
                      <option></option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </Input>
                  </Col>
                  <Col xs="4">
                     <Label>Date origin</Label>
                    <Input type="Date" />
                  </Col>
                </Row>
                <br />
                <Row>
                  <Col xs="3">
                    <Label>Quality</Label>
                    <Input type="text" placeholder="0" />
                  </Col>
                  <Col xs="2">
                    <Label>Amount</Label>
                    <Input type="text" placeholder="0" />
                  </Col>
                  <Col xs="2">
                    <Label>Currency</Label>
                    <Input type="select">
                      <option></option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </Input>
                  </Col>
                  <Col xs="1">
                    <br />
                    <Label check>
                      <Input type="checkbox" /> Transfer
                    </Label>
                  </Col>
                  <Col xs="2">
                    <Label>Status</Label>
                    <Input type="select">
                      <option>Alta</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </Input>
                  </Col>
                </Row>
                <br />
                <Row>
                  <Col xs="8">
                    <Label>Selers</Label>
                    <Input type="textarea"  />
                  </Col>
                  <Col xs="4">
                  <br />
                    <ButtonGroup>
                      <Button>
                        <i className="fas fa-plus">Add Seller</i>
                      </Button>
                    </ButtonGroup>
                  </Col>
                  
                </Row>
          </Form>
        </CardBody>
      </Card>
    </>
  );
};
export default MemberDiscountProducts;
