/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/
import React from 'react'
import {Card, CardBody, CardTitle, CardHeader,Row, Col, CardFooter, Container} from 'reactstrap'
import {Input, Button as ButtonUI, Checkbox} from '../index'

import {useSelect} from '../../hooks'

const AsmCatalogsDetail = () => {
   /** Valores que se pintan en <Select/> */
   const statusOptions = [
    {name: 'Alta', value: 'Alta'}, 
    {name: 'Baja', value: 'Baja'}
];
const [statusCoSelect, SelectStatus, resetSelectStatus] = useSelect('Status', '', statusOptions);

    return (
        <Container className="themed-container" fluid="sm">
            <Card>
                <CardHeader><CardTitle tag="h3">ASM</CardTitle></CardHeader>
                <CardBody>
                <Row>
                <Input type="text" label="Id" placeholder="" col={3} name="id" />
                <Input type="text" label="User Login" placeholder="" col={3} name="user_login" />
                <Input type="text" label="Name" placeholder="" col={3} name="name"/>
                <Col lg="3">
                <SelectStatus/>
                </Col>
                </Row>
                <div className="d-flex">
                <Input type="email" label="Email" placeholder="" col={4} name="email"/>
                <Checkbox label="Is Active" name="check1"/>
                <Input type="text" label="Priority" placeholder="" col={4} name=""/>
                <Checkbox label="Allow Automatic Assignment" name="check1"/>
                
                </div>
                <div className="d-flex">
                <Checkbox label="Permit Assign MM" name="check1"/>
                <Input type="text" label="Priority Assign MM" placeholder="" col={4} name=""/>
                <Checkbox label="Permit Assign NC" name="check1"/>
                <Input type="text" label="Priority Assign NC" placeholder="" col={4} name=""/>
                </div>
                <div className="d-flex">
                <Checkbox label="Permit Assign M1" name="check1"/>
                <Input type="text" label="Priority Assign M1" placeholder="" col={4} name=""/>
                <Checkbox label="Permit Assign Crx TMP" name="check1"/>
                <Input type="text" label="Priority Assign Crx TMP" placeholder="" col={4} name=""/>
                </div>
                <div className="d-flex">
                <Checkbox label="Permit Assign SM" name="check1"/>
                <Input type="text" label="Priority Assign SM" placeholder="" col={4} name=""/>

                </div>

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

export default AsmCatalogsDetail
