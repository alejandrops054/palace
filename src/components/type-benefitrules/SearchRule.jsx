/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/
import React from 'react'
import Table from "rc-table";
import {CardTitle, CardBody, Container,CardHeader,Card, Row,Col } from 'reactstrap';
import {Button} from "../index";

import {useSelect} from '../../hooks'



const SearchRule = () => {
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

    const columns = [
        {title: 'ID Category',dataIndex: 'id',key: '1',width: 'auto',align: 'center'},
        {title: 'Category',dataIndex: 'category',key: '2',width: 200,align: 'center'},
        {title: 'ID Benefit Type',dataIndex: 'id_benefit',key: '3',width: 'auto',align: 'center'},
        {title: 'Benefit Type',dataIndex: 'benefit_type',key: '4',width: 350,align: 'center'},
        {title: 'Movement',dataIndex: 'movement',key: '5',width: 'auto',align: 'center'},
    ]
    const data =[
        {id:'1',category:'ACCESS',id_benefit:'2',benefit_type:'ACCESS TO SUITE - ADITIONAL PAX',movement:'Unificacion'},
        {id:'1',category:'ACCESS',id_benefit:'2',benefit_type:'ACCESS TO SUITE - ADITIONAL PAX',movement:'Ugrade'},
        {id:'1',category:'ACCESS',id_benefit:'2',benefit_type:'ACCESS TO SUITE - ADITIONAL PAX',movement:'Downgrade'},
        {id:'1',category:'ACCESS',id_benefit:'2',benefit_type:'ACCESS TO SUITE - ADITIONAL PAX',movement:'Downgrade'}
    ]

    return (
        <Card>
            <CardHeader>
                <CardTitle tag="h3">Search Type Benefit Rule</CardTitle>
            </CardHeader>
            <CardBody>
                <Row>
                    <Col lg="4">
                     <SelectCategory/>
                     <SelectAction/>
                    </Col>
                    <Col lg="4">
                    <SelectBenefitType/>
                    <SelectEstado/>
                    </Col>
                    <Col lg="4">
                    <SelectMovementType/>
                    <div className="pt-4">
                    <Button col={6} title="Search" typebootstrap="primary" type="button"/>
                    </div>
                    </Col>
                </Row>
                <Table className="table pt-4" id="resume-table" columns={columns} data={data}/>
            </CardBody>
        </Card>   
    )
}

export default SearchRule
