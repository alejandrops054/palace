/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/
import React from 'react'
import Table from 'rc-table'
import {Card, CardBody, CardTitle, CardSubtitle, CardHeader,Row, Col, CardFooter, Container, Input, Button} from 'reactstrap'
import {InfoMembers, Checkbox, Button as ButtonUI} from '../index'

const DespositsMaintenance = () => {
    const columns1 = [
        { title: 'Date >>', dataIndex: 'Date', key: '1', width: 100},
        { title: 'Deposit >>', dataIndex: 'Deposit', key: '2', width: 100 },
        { title: 'Transaction', dataIndex: 'Transaction', key: '3', width: 100 },
        { title: 'Credit Card', dataIndex: 'Credit_Card', key: '4', width: 100 },
        { title: 'Funds', dataIndex: 'Funds', key: '5', width: 100 },
        { title: 'Bank', dataIndex: 'Bank', key: '6', width: 100 },
        { title: 'Account', dataIndex: 'Account', key: '7', width: 100 },
        { title: 'Reference', dataIndex: 'Reference', key: '8', width: 100 },
      ]
      const data1 = [
          {Date:'3', Deposit: '',Transaction:'',Credit_Card:'',Funds:'', Amount:'', Bank:'', Account:'', Reference:'' },
          {Date:'3', Deposit: '',Transaction:'',Credit_Card:'',Funds:'', Amount:'', Bank:'', Account:'', Reference:'' },
          {Date:'3', Deposit: '',Transaction:'',Credit_Card:'',Funds:'', Amount:'', Bank:'', Account:'', Reference:'' },

          {Date:'3', Deposit: '',Transaction:'',Credit_Card:'',Funds:'', Amount:'', Bank:'', Account:'', Reference:'' },

      ]
      const columns2 = [
        { title: 'Item', dataIndex: 'Item', key: '1', width: 100},
        { title: 'Description', dataIndex: 'Description', key: '2', width: 100 },
        { title: 'Totals', dataIndex: 'Totals', key: '3', width: 100 },
      ]
      const data2 = [
          {Item:'3', Description: '',Totals:'' },
          {Item:'3', Description: '',Totals:'' },
          {Item:'3', Description: '',Totals:'' }
      ]
    return (
        <Container>
            <Card>
                <CardHeader>
                <Row>
              <Col lg="6">
                <CardSubtitle tag="h3">Deposits Maintenance</CardSubtitle>
              </Col>
              
            </Row>
                </CardHeader>
                <CardBody>
                
                  <Row>
                    <Col lg="8">
                          <CardSubtitle>Member Information</CardSubtitle>
                          <Row>
                                  <Col lg="12" className="d-flex justify-content-end tables">
                                    <ButtonUI
                                      title="Affiliation"  
                                      col="1.5"
                                      icon="fas fa-users"
                                      typebootstrap="link main"
                                      type="button"
                                    />
                                    <ButtonUI
                                    title="Credit Card" 
                                      col="1.5"
                                      icon="fas fa-credit-card"
                                      typebootstrap="link"
                                      type="button"
                                    />
                                    <ButtonUI
                                    title="Add Deposit" 
                                      col="1.5"
                                      onClick={() => toggle()}
                                      icon="fas fa-plus"
                                      typebootstrap="link"
                                      type="button"
                                    />
                                  </Col>
                          </Row>
                          <Row className="mt-3">
                              <Col lg="4">
                              <InfoMembers title="Company"  text="5"/> 
                              <InfoMembers title="Office"  text=""/> 
                              </Col>
                              <Col lg="4">
                              <InfoMembers title="Application"  text=" "/> 
                              </Col>
                              <Col lg="4">
                              <InfoMembers title="Member Name"  text=""/> 
                              <InfoMembers title="Project"  text=""/> 
                              </Col>
                          </Row>
                          <Table scroll={{x:'auto'}} className='table' id="resume-table" columns={columns1} data={data1} />
                      </Col>
                      <Col lg="4" className="p-2">
                      <CardSubtitle>Entry</CardSubtitle>
                        <Row>
                            <Col lg="4">
                            <Input/>
                            </Col>
                            <Col lg="4">
                            <Input/>
                            </Col>
                            <Col lg="4">
                            <Input/>
                            </Col>
                        </Row>
                        <CardSubtitle>Last Entry</CardSubtitle>
                        <Row>
                       
                            <Col lg="4">
                            <Input/>
                            </Col>
                            <Col lg="4">
                            <Input/>
                            </Col>
                            <Col lg="4">
                            <Input/>
                            </Col>
                        </Row>
                        <Table scroll={{x:'auto'}} className='table' id="resume-table" columns={columns2} data={data2} />
                      </Col>
                      
                  </Row>
                    
                </CardBody>
                <CardFooter>
                    <div className="d-flex justify-content-end">
                      
                        <Button color="primary"><i className="fas fa-clipboard-list"></i>Log</Button> 
                        <Button color="primary"><i className="fas fa-trash"></i>Delete</Button> 
                        <Button color="primary"><i className="fas fa-print"></i>Print</Button> 
                        <Button color="primary"><i className="fas fa-check"></i>Ok</Button> 
                        <Button color="primary"><i className="fas fa-times"></i>Cancel</Button> 
                       
                        
                    </div>
                </CardFooter>
            </Card>
        </Container>
    )
}

export default DespositsMaintenance
