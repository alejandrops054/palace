import React from 'react'
import {Card, CardBody, CardTitle, CardSubtitle, CardHeader,Row, Col, CardFooter, Container, Input, Button} from 'reactstrap'
import {Select, Input as InputUI} from '../index'
import img from '../../assets/images/brand/systems-logos/blancos/logo-palaceelite.svg'

const EInvoicingProcess = () => {
    return (
        <Container>
            <Card style={{width:400}}>
                <CardHeader>
                    <CardTitle tag="h3"><p></p>E-Invoicing Process</CardTitle>
                </CardHeader>
                <CardBody>
                    <Row>
                    <Col lg="12">
                    <InputUI type="date" label="Movement Data" col={12} />
                    <Select label="Source" option="Membresia club" col={12} colIcon={0} />
                    <Select  option="Sale" col={12} colIcon={0} />
                    </Col>
                    </Row>
                    <div className="pt-3 d-flex justify-content-center">
                        <Button color="primary">Load</Button>
                        <Button color="secondary">Post</Button>
                    </div>
                </CardBody>
            </Card>
        </Container>
    )
}

export default EInvoicingProcess
