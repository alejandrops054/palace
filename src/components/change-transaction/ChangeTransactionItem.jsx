/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/
import React from 'react'
import {Button, Card,CardHeader, CardBody, CardFooter, Row, Col, Container, CardTitle, CardSubtitle } from 'reactstrap'
import {Button as ButtonUI, InfoMembers, Input, Select} from '../index'

const ChangeTransactionItem = () => {
    return (
        <Container>
            <Card>
            <CardHeader>
                <CardTitle tag="h3">
                    Change Transaction Item
                </CardTitle>
            </CardHeader>
            <CardBody>
                <Row>
                <CardSubtitle >
                        Member Information
                    </CardSubtitle>
                    <div className=" d-flex justify-content-end tables">
                        <ButtonUI title='Specify Member'  col='1.5' typebootstrap='link main' type='button'/>
                     </div>
                </Row>
                <Row>
                   <Col lg="4">
                        <InfoMembers title="Member Name" text="Name"/>
                        <InfoMembers title="Company" text="Company"/>
                   </Col>
                   <Col lg="4">
                   <Input type="text" label="Application" col={12} />
                   </Col>   
                   <Col lg="4">
                   <InfoMembers title="Portafolio" text="Portafolio"/>
                   </Col>
                </Row>
                <hr/>
                <Row>
                    <div className="d-flex">
                    <Input type="date" label="Transaction Date" col={4} />
                    <Input type="text" label="Status" col={4} />
                    <Input type="text" label="Invoice check #" col={4} />
                    </div>
                    <div className="d-flex">
                    <Input type="date" label="Transaction Type" col={3} />
                    <Input type="text" label="Description code" col={3} />
                    <Input type="text" label="Code" col={3} />
                    <Input type="text" label="Id" col={3} />
                    </div>
                    <div className="d-flex">
                    <Input type="text" label="Reference" col={4} />
                    <Input type="text" label="Sales Man" col={4} />
                    <Input type="text" label="Credit Code" col={4} />
                    </div>
                    <div className="d-flex">
                    <Input type="text" label="Sales Man" col={4} />
                    <Input type="text" label="Credit Code" col={4} />
                    <Select label="Bank" option="Unassigned" col={4} colIcon={0}/>
                    </div>
                </Row>
                <hr/>
                <Row>
                    <div className="d-flex">
                    <Input type="text" label="Amount" col={4} />
                    <Input type="text" label="Balance Unpaid" col={4} />
                    <Input type="text" label="Transaction #" col={4} />
                    </div>
                    <div className="d-flex">
                    <Input type="text" label="Down" col={4} />
                    <Input type="text" label="Monthly Amount" col={4} />
                    <Input type="text" label="Escrow" col={4} />
                    </div>
                    <div className="d-flex">
                    <Input type="text" label="Prin" col={4} />
                    <Input type="text" label="Interest" col={4} />
                    <Input type="text" label="Suspense" col={4} />
                    </div>
                    <div className="d-flex">
                    <Input type="text" label="Other" col={4} />
                    <Input type="text" label="Late Fee" col={4} />
                    <Input type="text" label="Refinancing Fee" col={4} />
                    </div>
                </Row>
                <hr/>
                <Row>
                    <Col lg="8">
                    <Input type="text" label="Description" col={12} />
                    </Col>
                    <Col lg="4">
                    <Input type="date" label="Entry Date" col={12} />
                    <Input type="text" label="Cashier" col={12} />
                    </Col>
                </Row>
            </CardBody>
            <CardFooter>
                <Row>
                    <Col lg="8" className="d-flex justify-content-start">
                            <Button color="secondary">Previous</Button> 
                            <Button color="secondary">Next</Button> 
                    </Col>
                    <Col lg="4" className="justify-content-end">
                            <Button color="primary"><i className="fas fa-clipboard-list"></i>Log</Button> 
                            <Button color="primary"><i className="fas fa-trash"></i>Delete</Button>
                            <Button color="primary"><i className="fas fa-save"></i>Save</Button> 
                            <Button color="primary"><i className="fas fa-times"></i>Close</Button>  
                    </Col>
                 </Row>    
            </CardFooter>
        </Card>
        </Container>
    )
}

export default ChangeTransactionItem
