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

import {useSelect} from '../../hooks'

const AsmCatalogs = () => {
    const columns = [
        { title: 'ASM Id', dataIndex: 'id', key: '1', width: 'auto'},
        { title: 'Name', dataIndex: 'name', key: '2', width: 'auto' },
        { title: 'Status', dataIndex: 'status', key: '3', width: 'auto' },
        { title: 'Active', dataIndex: 'active', key: '4', width: 'auto' },
        { title: 'Priority', dataIndex: 'priority', key: '5', width: 'auto' },
        { title: 'Automatic Assignments', dataIndex: 'auto', key: '6', width: 'auto' },
        { title: 'Permit Assign MM', dataIndex: 'pertmitMM', key: '7', width: 'auto' },
        { title: 'Priority Assign MM', dataIndex: 'priorityMM', key: '8', width: 'auto' },
        { title: 'Permit Assign NC', dataIndex: 'permitNC', key: '9', width: 'auto' },
        { title: 'Priority Assign NC', dataIndex: 'priorityNC', key: '10', width: 'auto' },
        { title: 'Permit Assign M1', dataIndex: 'pertmitM1', key: '11', width: 'auto' },
        { title: 'Priority Assign M1', dataIndex: 'priorityM1', key: '12', width: 'auto' },
        { title: 'Permit Assign Crx TMP', dataIndex: 'pertmitCrxTMP', key: '13', width: 'auto' },
        { title: 'Priority Assign Crx TMP', dataIndex: 'priorityCrxTMP', key: '14', width: 'auto' },
        { title: 'Permit Assign SM', dataIndex: 'pertmitSM', key: '15', width: 'auto' },
        { title: 'Priority Assign SM', dataIndex: 'prioritySM', key: '16', width: 'auto' },


      ]
      const data = [
          {id:'2201', name: '',status:'',active:"", priority:"",auto:"",pertmitMM:'',priorityMM:'',permitNC:'',priorityNC:'',pertmitM1:'',priorityM1:'',pertmitCrxTMP:'',priorityCrxTMP:'',pertmitSM:'',prioritySM:''},
          {id:'2201', name: '',status:'',active:"", priority:"",auto:"",pertmitMM:'',priorityMM:'',permitNC:'',priorityNC:'',pertmitM1:'',priorityM1:'',pertmitCrxTMP:'',priorityCrxTMP:'',pertmitSM:'',prioritySM:''},
          {id:'2201', name: '',status:'',active:"", priority:"",auto:"",pertmitMM:'',priorityMM:'',permitNC:'',priorityNC:'',pertmitM1:'',priorityM1:'',pertmitCrxTMP:'',priorityCrxTMP:'',pertmitSM:'',prioritySM:''},
          {id:'2201', name: '',status:'',active:"", priority:"",auto:"",pertmitMM:'',priorityMM:'',permitNC:'',priorityNC:'',pertmitM1:'',priorityM1:'',pertmitCrxTMP:'',priorityCrxTMP:'',pertmitSM:'',prioritySM:''},

         
      ]
        /** Valores que se pintan en <Select/> */
        const yearOptions = [
            {name: '2001', value: '2001'}, 
            {name: '2002', value: '2002'}
        ];
        const [yearSelect, SelectYear, resetSelectYear] = useSelect('Year', '', yearOptions);
    return (
        <div>
             <Card>
             <CardHeader>
                        <Row>
                            <Col lg="6">
                                <CardTitle tag="h3">ASM</CardTitle>
                            </Col>
                            <Col lg="6" className=" d-flex justify-content-end tables">
                                
                                <ButtonUI col="1.5" title="Apply Filter" icon="fas fa-users" typebootstrap="link main" type="button"/>
                                <ButtonUI col="1.5" title="Clear Filter" icon="fas fa-upload" typebootstrap="link" type="button"/>
                            </Col>
                        </Row>
                    </CardHeader>
                <CardBody>
                    <Row>
                        <div className=" d-flex justify-content-end">
                                <Col lg="3">
                                    <SelectYear/>
                                </Col>
                        </div>
                    </Row>
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
        </div>
    )
}

export default AsmCatalogs
