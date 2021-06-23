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

const DiamontClassification = () => {
    const columns = [
        { title: 'Code', dataIndex: 'code', key: '1', width: 200},
        { title: 'Description', dataIndex: 'description', key: '2', width: 200 },
      ]
      const data = [
          {code:'2201', description: ''},
          {code:'2201', description: ''},
          {code:'2201', description: ''}
      ]
    return (
        <div>
            <Card>
                <CardHeader><CardTitle tag="h3">Diamond Classifications</CardTitle></CardHeader>
                <CardBody>
                    <Row>
                        <Table style={{width:'auto'}} className="table" id="resume-table" columns={columns} data={data}/>
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
        </div>
    )
}

export default DiamontClassification
