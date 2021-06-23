/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/
import React from 'react'
import Table from 'rc-table'
import {Button as ButtonUI, InfoMembers, Input, Select} from '../index'
import {Button, Card,CardHeader, CardBody, CardFooter, Row, Col, Container, CardTitle, CardSubtitle } from 'reactstrap'

const CleanSuspense = () => {
    const columns = [
        { title: 'Company', dataIndex: 'Company', key: '1', width: 100},
        { title: 'Affiliation', dataIndex: 'Affiliation', key: '2', width: 100 },
      ]
      const data = [
          {Company:'3', Affiliation: '' },
          {Company:'3', Affiliation: '' },
          {Company:'3', Affiliation: '' },
          {Company:'3', Affiliation: '' },
          {Company:'3', Affiliation: '' },
          {Company:'3', Affiliation: '' },
          {Company:'3', Affiliation: '' },
          {Company:'3', Affiliation: '' },
          {Company:'3', Affiliation: '' },
      ]
    return (
        <Container>
            <Card>
                <CardHeader>
                    <CardTitle tag="h3">Clean Suspense</CardTitle>
                </CardHeader>
                <CardBody>
                   <Row>
                       <Col lg="8">
                       <CardSubtitle>From</CardSubtitle>
                            <Row>
                            <Col lg="4">
                                <Input type="text" label="Affiliation" col={12} />
                                <InfoMembers title="Name :" text="Name"/>
                                </Col>
                                <Col lg="4">
                                <InfoMembers title="Company :" text="Company"/>
                                </Col>
                            </Row>
                            <hr/>
                            <CardSubtitle>To</CardSubtitle>
                            <Row>
                            <Col lg="4">
                                <Input type="text" label="Affiliation" col={12} />
                                <InfoMembers title="Name :" text="Name"/>
                                </Col>
                                <Col lg="4">
                                <InfoMembers title="Company :" text="Company"/>
                                </Col>
                            </Row>
                       
                       </Col>
                       <Col lg="4">
                       <Table scroll={
                    {y: 'auto'}
                }
                className='table'
                id="resume-table"
                columns={columns}
                data={data}/>
                       </Col>
                   </Row>
                </CardBody>
                <CardFooter>
                <Row>
                    <div className="d-flex justify-content-end">
                            <Button color="primary"><i className="fas fa-check"></i>Execute</Button> 
                            <Button color="primary"><i className="fas fa-times"></i>Close</Button> 
                    </div>
                 </Row>    
            </CardFooter>
            </Card>
        </Container>
    )
}

export default CleanSuspense
