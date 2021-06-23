/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/
import React from 'react'
import {CardTitle, CardBody, Container,CardHeader,Card, Row,Col } from 'reactstrap';
import {Button} from '../index'
import {useSelect} from '../../hooks'


const TypeBenefit = () => {
     // select 1
     const CategoryOptions = [{name: 'Alta', value: 'Alta'}, {name: 'Baja', value: 'Baja'}];
     const [categoryState, SelectCategory, resetCategory] = useSelect('Category', '', CategoryOptions);
     //select 2
     const ActionOptions = [{name: 'Alta', value: 'Alta'}, {name: 'Baja', value: 'Baja'}];
     const [actionState, SelectAction, resetAction] = useSelect('Action', '', ActionOptions);
     // select 3
     const BenefitTypeOptions = [{name: 'Alta', value: 'Alta'}, {name: 'Baja', value: 'Baja'}];
     const [benefitTypeState, SelectBenefitType, resetBenefitType] = useSelect('Benefit Type', '', BenefitTypeOptions);
 
     const EstadoOptions = [{name: 'Alta', value: 'Alta'}, {name: 'Baja', value: 'Baja'}];
     const [estadoState, SelectEstado, resetEstado] = useSelect('Estado', '', EstadoOptions);
 
     const MovementTypeOptions = [{name: 'Alta', value: 'Alta'}, {name: 'Baja', value: 'Baja'}];
     const [movementState, SelectMovementType, resetMovementType] = useSelect('Movement Type', '', MovementTypeOptions);
    return (
        <Card>
            <CardHeader>
                <CardTitle tag="h3">Type Benefit Rules</CardTitle>
            </CardHeader>
            <CardBody>
               <Row>
                    <Col lg="6">
                        <SelectCategory/>
                        <SelectMovementType/>
                        <SelectEstado/>
                    </Col>
                    <Col lg="6">
                        <SelectBenefitType/>
                        <SelectAction/>
                        <div className="pt-4">
                    <Button col={6} title="Save" typebootstrap="primary" type="button"/>
                    </div>
                    </Col>
               </Row>
            </CardBody>
        </Card>
    )
}

export default TypeBenefit
