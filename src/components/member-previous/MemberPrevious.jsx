/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/

import React, { useState } from 'react';
import { Button, Table, Form, Row, Col, FormGroup, Input, Label} from 'reactstrap';

const MemberPrevious = () => {
//   const {
//     className,
//   } = props;

//   const [modal, setModal] = useState(true);

//   const toggle = () => setModal(!modal);

  return (
    <div>
        <h1>Member Previous</h1>
        <Form>
            <h2>Member Information</h2>
            
                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                    <Label>User Name</Label>
                    <Input type='text'/>
                </FormGroup>
                <Row>
                    <Col md={3}>
                        <FormGroup>
                            <Label>Company</Label>
                            <Input type='text' style={{width:'40%'}}/>
                        </FormGroup>
                    </Col>
                    <Col md={3}>
                        <FormGroup>
                            <Label>Application</Label>
                            <Input type="number" style={{width:'40%'}}/>
                        </FormGroup>
                    </Col>
                    <Col md={6}>
                        <FormGroup style={{padding:'4%'}}>
                            <Button color="primary">Spacify member</Button>
                        </FormGroup>  
                    </Col>
                </Row>
                <Row>
                <FormGroup>
                    <Table striped>
                        <thead>
                            <tr>
                                <th>Main</th>
                                <th>Company</th>
                                <th>Club</th>
                                <th>Application</th>
                                <th>Name</th>
                                <th>Date</th>
                                <th>Amount</th>
                                <th>Exch. Rate</th>
                                <th>Sale in USD</th>
                                <th>Amount Paid in USD</th>
                                <th>Remainder in USD</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><Input type='checkbox'/></td>
                                <td>5</td>
                                <td>Elite</td>
                                <td>4037050</td>
                                <td>DERLY LILIBETH LOPEZ</td>
                                <td>5/15/2018</td>
                                <td>$35,375.00</td>
                                <td>$0.00</td>
                                <td>$35,375.00</td>
                                <td>$21,407.21</td>
                                <td>$13,967.00</td>
                            </tr>
                        </tbody>
                    </Table>
                </FormGroup>
                </Row>
                <FormGroup>
                    <Col sm={{ size: 10, offset: 10 }}>
                        <Button color="primary">Save changes</Button>{' '}
                        <Button color='primary'>Cancel</Button>{' '}
                        <Button color="secondary" >Close</Button>
                    </Col>
                </FormGroup>
          </Form>
    </div>
  );
}

export default MemberPrevious;