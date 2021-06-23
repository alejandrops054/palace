/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/
import React from 'react'
import Table from "rc-table";
import {CardTitle, CardBody, Container,CardHeader,Card, Row,Col, CardFooter } from 'reactstrap';
import {Button,Input} from '../index'
import {useSelect} from '../../hooks'

const TagManagement = () => {
    // select 1
    const TagTypeOptions = [{name: 'Alta', value: 'Alta'}, {name: 'Baja', value: 'Baja'}];
    const [tagTypeState, SelectTagType, resetTagType] = useSelect('Tag Type', '', TagTypeOptions);
    //select 2
    const StatusOptions = [{name: 'Alta', value: 'Alta'}, {name: 'Baja', value: 'Baja'}];
    const [statusState, SelectStatus, resetStatus] = useSelect('Status', '', StatusOptions);
    //DATA TABLE
    const columns = [
        {title: 'id',dataIndex: 'id',key: '1',width: 200,align: 'center'},
        {title: 'Tag Name',dataIndex: 'tag',key: '2',width: 200,align: 'center'},
        {title: 'Control Type',dataIndex: 'control',key: '3',width: 200,align: 'center'},
        {title: 'Status',dataIndex: 'status',key: '4',width: 200,align: 'center'}
    ]
    const data =[
       {id:'6',tag:'hotel',control:'Combo Box',status:'Active'},
       {id:'7',tag:'Campo_de_Golf',control:'Text',status:'Inactive'},
       {id:'8',tag:'Cantidad_de_ha',control:'Text',status:'Active'},
       {id:'9',tag:'Cantidad_de_ac',control:'Text',status:'Active'},

    ]

    return (
        <Container>
            <Card>
            <CardHeader>
                        <Row>
                            <Col lg="6">
                                <CardTitle tag="h3">Tag Management</CardTitle>
                            </Col>
                            <Col lg="6" className=" d-flex justify-content-end tables">
                                <Button col="1.5" title="Apply Filter" icon="fas fa-filter" typebootstrap="link main" type="button"/>
                                <Button col="1.5" title="Clean Filter" icon="fas fa-filter" typebootstrap="link" type="button"/>
                            </Col>
                        </Row>
                    </CardHeader>
                    <CardBody>
                        <Row>
                            <Col lg="6">
                            <Input type="text" label="ID Tag" col={12} name="tag" /> 
                            <Input type="text" label="Tag Name" col={12} name="tag_name" /> 
                            </Col>
                            <Col lg="6">
                                    <SelectTagType/>
                                    <SelectStatus/>
                            </Col>
                        </Row>
                        <Table className="table pt-4" id="resume-table" columns={columns} data={data}/>
                    </CardBody>
                   <CardFooter>
                   <div className="d-flex justify-content-end">
                        <Button col="2" title="Close" icon="fas fa-times" typebootstrap="secondary" type="button"/>
                        <Button col="2" title="Add" icon="fas fa-plus" typebootstrap="primary" type="button"/>
                    </div>
                   </CardFooter>
            </Card>
        </Container>
    )
}

export default TagManagement
