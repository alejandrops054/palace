/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/
import React from 'react'
import {Card, CardBody, CardTitle, CardHeader,Row, Col, CardFooter, Container} from 'reactstrap'
import {Input,Button as ButtonUI} from '../index'

const DiamontClassificationDetail = () => {
    return (
        <Container className="themed-container" fluid="sm">
            <Card>
                <CardHeader><CardTitle tag="h3">Diamond Classifications</CardTitle></CardHeader>
                <CardBody>
                <Input type="text" label="Id" placeholder="" col={3} name="id" />
                <Input type="text" label="Description" placeholder="" col={3} name="description" />

                <Input type="text" label="Status" placeholder="" col={3} name="status"/>
                </CardBody>
                <CardFooter>
                            <div className="d-flex justify-content-end">
                                <ButtonUI col={2}
                                    icon="fas fa-check"
                                    title="Ok"
                                    typebootstrap="primary"
                                    type="button"
                                    />
                                <ButtonUI col={2}
                                    icon="fas fa-times"
                                    title="Cancel"
                                    typebootstrap="secondary "
                                    />
                            </div>
                        </CardFooter>
            </Card>
        </Container>
    )
}

export default DiamontClassificationDetail
