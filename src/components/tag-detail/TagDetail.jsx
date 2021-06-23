/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/
import React from 'react'
import Table from "rc-table";
import {CardTitle, CardBody, Container,CardHeader,Card, Row,Col, CardSubtitle, CardFooter } from 'reactstrap';
import {Button,Input, Checkbox} from '../index'
import {useSelect} from '../../hooks'

const TagDetail = () => {
     // select 1
     const TypeControlOptions = [{name: 'Alta', value: 'Alta'}, {name: 'Baja', value: 'Baja'}];
     const [typeControlState, SelectTypeControl, resetTypeControl] = useSelect('Type Control', '', TypeControlOptions);
     //select 2
     const StatusOptions = [{name: 'Alta', value: 'Alta'}, {name: 'Baja', value: 'Baja'}];
     const [statusState, SelectStatus, resetStatus] = useSelect('Status', '', StatusOptions);
     //DATA TABLE
     const columns = [
         {title: 'id',dataIndex: 'id',key: '1',width: 200,align: 'center'},
         {title: 'Description',dataIndex: 'description',key: '2',width: 200,align: 'center'},
     ]
     const data =[
        {id:'1',description:'Le Blanc Cancun'},
        {id:'2',description:'Moon Palace Nizuc '},
        {id:'3',description:'Moon Palace Sunrise'},
        {id:'4',description:'The Grand at Moon Palace'},
 
     ]
    return (
        <Container>
            <Card>
                    <CardTitle tag="h3">Tag Detail</CardTitle>
            <Row>
                <Col lg="6">
                    <CardHeader>
                        <CardSubtitle>General Information</CardSubtitle>
                    </CardHeader>
                    <div className="pt-3">
                    <Input type="text" label="ID Tag" col={12} name="tag" /> 
                    <Row>
                        <Col lg="6">
                        <SelectTypeControl/>
                        </Col>
                        <Col lg="6" className="pt-4">
                        <Checkbox label="Is Numeric"/>
                        </Col>
                    </Row>
                    <SelectStatus/>
                    </div>
                </Col>
                <Col lg="6">
                <CardHeader>
                        <CardSubtitle>User Information</CardSubtitle>
                    </CardHeader>
                    <Row className="pt-3">
                        <Col lg="6">
                            <Input type="text" label="Created By" col={12} name="tag" /> 
                            <Input type="date" label="Issued Date" col={12} name="tag" /> 
                        </Col>
                        <Col lg="6">
                            <Input type="text" label="Edited By" col={12} name="tag" /> 
                            <Input type="date" label="Modified On" col={12} name="tag" /> 
                        </Col>
                    </Row>
                    <Input type="text" label="Search" col={12} name="tag" /> 
                </Col>
            </Row>
            <CardBody>
                <CardSubtitle>Tag Values</CardSubtitle>
                <Table className="table pt-4" id="resume-table" columns={columns} data={data}/>
            </CardBody>
            <CardFooter>
                   <div className="d-flex justify-content-end">
                   <Button col="2" title="Add Value" icon="fas fa-plus" typebootstrap="secondary" type="button"/>
                        <Button col="2" title="Save" icon="fas fa-save" typebootstrap="secondary" type="button"/>
                        <Button col="2" title="Close" icon="fas fa-times" typebootstrap="primary" type="button"/>
                    </div>
                   </CardFooter>
            </Card>
        </Container>
    )
}

export default TagDetail
