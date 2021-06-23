/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/
import React from 'react'
import Table from 'rc-table'
import {
    Card, CardBody,
    CardTitle, CardSubtitle, Container, CardHeader, Row, Col, Label, Input
} from 'reactstrap';
import { ToggleCheck, Button, Select } from '../index'

const BinBankCreditCard = () => {
    const columns = [
        { title: 'Code', dataIndex: 'Code', key: '1', width: 200},
        { title: 'Description', dataIndex: 'Description', key: '2', width: 200 },
    ]
    const data = [
        { Code: '3400-0000-0000-00009', Description: 'American Express' }
    ]
    return (
        <Container >
            <Card>
                <CardHeader>
                    <CardTitle>
                        <h3>Bin Bank Credit Card</h3>
                    </CardTitle>
                    <CardSubtitle>Search</CardSubtitle>
                    <div className="col-lg-12 d-flex justify-content-end tables">
                        <Button
                            title='Apply Filter'
                            col="1.5"
                            icon="fas fa-filter"
                            typebootstrap="link main"
                            type="button"
                        />
                        <Button
                            title='Clear Filter'
                            col="1.5"
                            icon="fas fa-filter"
                            typebootstrap="link"
                            type="button"
                        />

                    </div>
                </CardHeader>
                <CardBody>
                    <Row>
                        <Col lg="6" >
                            <ToggleCheck label="Number Bin" />
                        </Col>
                        <Col lg="3">
                            <Label> Number Bin</Label>
                            <Input type="text" name="bin" />
                        </Col>
                    </Row>
                    <hr />
                    <Row>
                        <Col lg="6">
                            <ToggleCheck label="Name Bank" />
                        </Col>
                        <Col lg="3">
                            <Label> Name Bank</Label>
                            <Input type="text" name="bin" />

                        </Col>
                        <Col lg='3'>
                            <Select label="Contry" option="México" col={12} />
                        </Col>
                    </Row>
                    <div className="pt-3 ">
                        <Table className='table' id="resume-table" columns={columns} data={data} />
                    </div>
                </CardBody>
            </Card>

        </Container>
    )
}

export default BinBankCreditCard
