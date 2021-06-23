/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/
import React from 'react'
import Table from 'rc-table'
import {Card, CardBody, CardTitle, CardSubtitle, Button, CardHeader,Row, Col, CardFooter, Container} from 'reactstrap'
import {InfoMembers, Checkbox} from '../index'

const ReportsMember = () => {
    const columns = [
        { title:  'Select', dataIndex: 'Select', key: '1', width: 60},
        { title: 'Report', dataIndex: 'Report', key: '2', width: 200 },    
      ]
      const data = [
          {Select:<Checkbox/>, Report:'Cash Receipt'},
          {Select:<Checkbox/>, Report:'Card Change Authorization'},
          {Select:<Checkbox/>, Report:'Promissory Payments'},
          {Select:<Checkbox/>, Report:'Contract'},
          {Select:<Checkbox/>, Report:'Contract Clauses'},
          {Select:<Checkbox/>, Report:'Agile Verification'},
          {Select:<Checkbox/>, Report:'Reservation Rates'},
          {Select:<Checkbox/>, Report:'Reservation Rates Extra Variable'},
          {Select:<Checkbox/>, Report:'Golf Rates'},
          {Select:<Checkbox/>, Report:'Letters Default'},
          {Select:<Checkbox/>, Report:'Directory'},
          {Select:<Checkbox/>, Report:'Cash Receipt'},
          {Select:<Checkbox/>, Report:'Cash Receipt'},

      ]
    return (
        <Container>
            <Card>
                <CardHeader>
                    <CardTitle tag="h3">
                        Reports Member
                    </CardTitle>
                </CardHeader>
                <CardBody>
                    <CardSubtitle>Member Information</CardSubtitle>
                    <Row className="mt-3">
                    <Col lg="4">
                    <InfoMembers title="Member Name"  text="WILLIAN JESUS TORRES FLOTA"/> 
                    <InfoMembers title="Company"  text="5"/> 
                    </Col>
                    <Col lg="4">
                    <InfoMembers title="Affiliation"  text="6007770"/> 
                    </Col>
                    <Col lg="4">
                    <Button color="primary">Specify Member</Button> 
                    </Col>
                    </Row>
                    <Table style={{width:'auto'}} className='table' id="resume-table" columns={columns} data={data} />

                </CardBody>
                <CardFooter>
                    <Row>
                        <Col lg="8">
                        <Button color="primary"><i className="fas fa-print"></i>Print PDF</Button> 
                        </Col>
                        <Col lg="2">
                        <Button color="primary"><i className="fas fa-print"></i>Print</Button> 
                        </Col>
                        <Col lg="2">
                        <Button color="primary"><i className="fas fa-times"></i>Close</Button> 
                        </Col>
                    </Row>
                </CardFooter>
            </Card>
        </Container>
    )
}

export default ReportsMember
