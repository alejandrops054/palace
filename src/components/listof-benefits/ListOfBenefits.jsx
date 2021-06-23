/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/
import React from 'react'
import Table from "rc-table";
import {Card,CardBody,CardTitle,CardHeader,Row,Col,Container} from "reactstrap";
import {Button,InfoMembers} from "../index";

import {useSelect} from '../../hooks'

import {data,columns} from "./DataListOfBenefits";
const countData = data.length

const ListOfBenefits = () => {
    const statusOptions = [
        {name: 'Español', value: 'Español'}, 
        {name: 'Ingles', value: 'Ingles'},
        {name: 'Portugues', value: 'Portugues'}
    ];
    const [languageLetterState, SelectLanguageLetter, resetLanguageLetter] = useSelect('Language of Letter', '', statusOptions);

 
    return (
        <Container>
            <Card>
                <CardHeader>
                    <CardTitle tag="h3">List of Benefits</CardTitle>
                </CardHeader>
                <CardBody>
                    <Row>
                        <Col lg="6">
                            <SelectLanguageLetter />
                            <div className="d-flex pt-3">
                            <InfoMembers title="Membership" text="6007770"/>
                            <InfoMembers title="Member" text="WILLIAM JESUS TORRES FLOTA"/>
                            </div>
                        </Col>
                        <Col lg="6">
                            <Button col={6} title="Assignments Benefits" typebootstrap="primary " type="submit"/>
                        </Col>
                    </Row>
                    <CardHeader>
                        <CardTitle tag="h4"><i className="fas fa-copy"></i> List of Benefits</CardTitle>
                    </CardHeader>
                    <CardBody>
                        <p>Total <strong>{countData}</strong> Elementos. </p> 
                        <Table style={{width:'auto'}} className="table" id="resume-table" columns={columns} data={data}/>
                    </CardBody>
                </CardBody>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle tag="h3"><i className="fas fa-file"></i> Preview</CardTitle>
                </CardHeader>
                <CardBody>
                    <Button col={3} title="Close" icon="fas fa-eye-slash" typebootstrap="primary " type="submit"/>
                </CardBody>
            </Card>
        </Container>
    )
}

export default ListOfBenefits
