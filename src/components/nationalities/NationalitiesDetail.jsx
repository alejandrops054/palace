/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/
import React from 'react'
import {Card, CardBody, CardTitle, CardHeader,Row, Col, CardFooter, Container} from 'reactstrap'
import {Input, Button as ButtonUI, Checkbox} from '../index'

const NationalitiesDetail = () => {
    return (
        <Container fluid>
        <Card>
            <CardHeader><CardTitle tag="h3">Nationalities</CardTitle></CardHeader>
            <CardBody>
            <div className="d-flex">
                <Input type="text" label="Spanish" placeholder="" col={4} name="city"/>
                <Input type="text" label="English" placeholder="" col={4} name=""/>
                <Input type="text" label="Portuguese" placeholder="" col={4} name=""/>
            </div>
            <div className="d-flex">
                <Input type="text" label="Country" placeholder="" col={4} name=""/>
            </div>
            </CardBody>
            <CardFooter>
                        <div className="d-flex justify-content-end">
                            <ButtonUI col={2}
                                icon="fas fa-save"
                                title="Save"
                                typebootstrap="primary"
                                type="button"
                                />
                            <ButtonUI col={2}
                                icon="fas fa-times"
                                title="Close"
                                typebootstrap="secondary "
                                />
                        </div>
            </CardFooter>
        </Card>
    </Container>
    )
}

export default NationalitiesDetail
