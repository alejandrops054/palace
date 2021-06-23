/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/
import React from 'react'
import Table from 'rc-table'
import {Card, CardBody, CardTitle, CardHeader,Row, Col, CardFooter} from 'reactstrap'
import {Button as ButtonUI} from '../index'

const HotelsOutHouse = () => {
    const columns = [
        { title: 'Code', dataIndex: 'Code', key: '1', width: 'auto'},
        { title: 'Name', dataIndex: 'Name', key: '2', width: 'auto' },
        { title: 'Reason', dataIndex: 'Reason', key: '3', width: 'auto' },
        { title: 'RFC', dataIndex: 'RFC', key: '4', width: 'auto' },
        { title: 'Address', dataIndex: 'Address', key: '5', width: 'auto' },
        { title: 'Address2', dataIndex: 'Address2', key: '6', width: 'auto' },
        { title: 'City', dataIndex: 'City', key: '7', width: 'auto' },
        { title: 'State', dataIndex: 'State', key: '8', width: 'auto' },
        { title: 'Zip', dataIndex: 'Zip', key: '9', width: 'auto' },
        { title: 'Telephone', dataIndex: 'Telephone', key: '10', width: 'auto' },
        { title: 'Fax', dataIndex: 'Fax', key: '11', width: 'auto' },
        { title: 'Palace Code', dataIndex: 'Palace_Code', key: '12', width: 'auto' },
        { title: 'Status', dataIndex: 'Status', key: '13', width: 'auto' }
      ]
      const data = [
          {Code:'2201', Name: '',Reason:'',RFC:"", Address:"",Address2:"",City:'',State:'',Zip:'',Telephone:'',Fax:'',Palace_Code:'',Status:''},
          {Code:'2201', Name: '',Reason:'',RFC:"", Address:"",Address2:"",City:'',State:'',Zip:'',Telephone:'',Fax:'',Palace_Code:'',Status:''},
          {Code:'2201', Name: '',Reason:'',RFC:"", Address:"",Address2:"",City:'',State:'',Zip:'',Telephone:'',Fax:'',Palace_Code:'',Status:''},
          {Code:'2201', Name: '',Reason:'',RFC:"", Address:"",Address2:"",City:'',State:'',Zip:'',Telephone:'',Fax:'',Palace_Code:'',Status:''},
      ]
    return (
        <>
              <Card>
             <CardHeader>
                        <Row>
                            <Col lg="6">
                                <CardTitle tag="h3">Hotels OutHouse</CardTitle>
                            </Col>
                            <Col lg="6" className=" d-flex justify-content-end tables">
                                {/* Botones de menu superior izq */}
                                
                            </Col>
                        </Row>
                    </CardHeader>
                <CardBody>
                    <Row>
                    <Table style={{width:'auto'}} scroll={{x:2800}} className="table" id="resume-table" columns={columns} data={data}/>
                    </Row>
                </CardBody>
                <CardFooter>
                            <div className="d-flex justify-content-end">
                                <ButtonUI col={2}
                                    icon="fas fa-clipboard-list"
                                    title="Log"
                                    typebootstrap="link"
                                    type="button"
                                    />
                                <ButtonUI col={2}
                                    icon="fas fa-plus"
                                    title="Add"
                                    typebootstrap="link "
                                    />
                                     <ButtonUI col={2}
                                    icon="fas fa-times"
                                    title="Properties"
                                    typebootstrap="link"
                                    type="button"
                                    />
                                <ButtonUI col={2}
                                    icon="fas fa-trash"
                                    typebootstrap="link "
                                    title="Delete"
                                    />
                                     <ButtonUI col={2}
                                    icon="fas fa-sync-alt"
                                    title="Refresh"
                                    typebootstrap="link"
                                    type="button"
                                    />
                                <ButtonUI col={2}
                                    icon="fas fa-times"
                                    title="Close"
                                    typebootstrap="link "
                                   />
                            </div>
                        </CardFooter>
            </Card>
        </>
    )
}

export default HotelsOutHouse
