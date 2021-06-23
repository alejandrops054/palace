/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/
import React from 'react'
import Table from "rc-table";
import {Card,CardBody,CardTitle,CardHeader,Row,Col,Container, CardSubtitle} from "reactstrap";
import {Button,InfoMembers} from "../index";

const RequerimentoAutorizaciones = () => {
    const columns = [
        {title: 'Tipo autorizacion descripcion',dataIndex: 'autorizacion',key: '1',width: 'auto',align: 'center'},
        {title: 'Beneficio descripcion',dataIndex: 'beneficio',key: '2',width: 200,align: 'center'},
        {title: 'Autorizado',dataIndex: 'autorizado',key: '3',width: 'auto',align: 'center'},
        {title: 'Autorizar',dataIndex: 'autorizar',key: '4',width: 200,align: 'center'},
        {title: 'Desautorizar',dataIndex: 'desautorizar',key: '5',width: 'auto',align: 'center'},
    ]
    const data =[
      //  {autorizacion:'',beneficio:'',autorizado:'',autorizar:'',desautorizar:''}
    ]
    return (
        <Container>
            <Card>
            <CardHeader>
                        <Row>
                            <Col lg="6">
                                <CardTitle tag="h3">Requerimento Autorizaciones</CardTitle>
                            </Col>
                        </Row>
                    </CardHeader>
                <CardBody>
                    <dic className="d-flex pb-4">
                                <Button col="3" title="Search" typebootstrap="primary" type="button"/>
                                <Button col="3" title="Create" typebootstrap="secondary" type="button"/>
                           
                    </dic>
                <Row>
                            <Col lg="6">
                                <CardSubtitle>Requerimento Autorizaciones</CardSubtitle>
                            </Col>
                            <Col lg="6" className=" d-flex justify-content-end tables">
                                <Button col="3" title="Todo" icon="fas fa-expand-alt" typebootstrap="link " type="button"/>
                                <Button col="1"  icon="fas fa-upload" typebootstrap="link main" type="button"/>
                            </Col>
                        </Row>
                <Table className="table" id="resume-table" columns={columns} data={data}/>
                {data.length === 0 ? (<CardSubtitle>No se encuentran resultados</CardSubtitle>) : null}
                </CardBody>
            </Card>
            
        </Container>
    )
}

export default RequerimentoAutorizaciones
