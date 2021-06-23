/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/
import React from 'react'
import Table from 'rc-table'
import {Card, CardBody, CardTitle, CardSubtitle, CardHeader,Row, Col, CardFooter, Container} from 'reactstrap'
import {Input, Button as ButtonUI} from '../index'

import {useSelect} from '../../hooks'

const ImperialWeekRate = () => {
       /** Valores que se pintan en <Select/> */
       const roomTypeOptions = [
        {name: 'Government Le Blanc Cabos', value: 'Government'}, 
    ];
    const [roomTypeSelect, SelectRoomType, resetSelectRoomType] = useSelect('Room Type', '', roomTypeOptions);
    return (
        <Container className="themed-container" fluid="sm">
            <Card>
                <CardHeader><CardTitle tag="h3">Imperial Week Rate</CardTitle></CardHeader>
                <CardBody>
                <Input type="text" label="Year" placeholder="" col={12} name="year" />
                <SelectRoomType/>
                <Input type="text" label="Amount" placeholder="" col={12} name="amount"/>
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

export default ImperialWeekRate
