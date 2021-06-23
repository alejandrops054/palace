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




const HotelsOutHouseDetail = () => {
       /** Valores que se pintan en <Select/> */
   const statusOptions = [
    {name: 'Alta', value: 'Alta'}, 
    {name: 'Baja', value: 'Baja'}
    ];
const [statusCoSelect, SelectStatus, resetSelectStatus] = useSelect('Status', '', statusOptions);
    return (
        <Container fluid>
            <Card>
                <CardHeader><CardTitle tag="h3">Hotels Outhouse</CardTitle></CardHeader>
                <CardBody>
                <Row>
                    <Row>
                        <Col lg="6">
                        <Input type="text" label="Id" placeholder="" col={12} name="id" />
                        </Col>
                        <Col lg="6">
                        <Checkbox label="Allow Automatic Assignment" name="check1" col={12}/>
                        </Col>
                    </Row>

                <Input type="text" label="Name" placeholder="" col={3} name="name"/>
                <Input type="text" label="Business Name" placeholder="" col={3} name="user_login" />
                
                </Row>
                <div className="d-flex">
                <Input type="text" label="City" placeholder="" col={4} name="city"/>
                <Input type="text" label="State" placeholder="" col={4} name=""/>
                <Input type="text" label="Zip" placeholder="" col={4} name=""/>

                
                </div>
                <div className="d-flex">
                
                <Input type="text" label="Telephone" placeholder="" col={4} name=""/>
                <Input type="text" label="Fax" placeholder="" col={4} name=""/>
                </div>
                <div className="d-flex">
                <Input type="text" label="Palace Code" placeholder="" col={4} name=""/>
                <Col lg="3">
                <SelectStatus/>
                </Col>               
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

export default HotelsOutHouseDetail
