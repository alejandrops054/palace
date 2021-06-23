import React from 'react'
import Table from 'rc-table'
import {Container, Row, Col, Input, Label, Button} from 'reactstrap'

function ClausesReservationsRates() {
    return (
        <Container fluid>
        <Row>
            <Col lg={{size:9}}>
                <Row>
                    <Label>
                        Clauses Stay Periods <Input type="select"/>
                    </Label>
                </Row>
            </Col>
            <Col>
                <Button>Add as</Button>
                <Button>Edit</Button>
            </Col>
        </Row>
        <Row>
            <Label>
               Description spanish <Input type="textarea"/>
            </Label>
        </Row>
        <Row>
            <Col lg={{size:9}}>
                <Row>
                    <Label>
                        Clauses Occupation <Input type="select"/>
                    </Label>
                </Row>
            </Col>
            <Col>
                <Button>Add as</Button>
                <Button>Edit</Button>
            </Col>
        </Row>
        <Row>
            <Label>
               Description spanish <Input type="textarea"/>
            </Label>
        </Row>
        <Row>
            <Col>
                <Button>Save</Button>
                <Button>Close</Button>
            </Col>
        </Row>
    </Container>
    )
}

export default ClausesReservationsRates
