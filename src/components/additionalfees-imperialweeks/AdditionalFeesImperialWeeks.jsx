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


const AdditionalFeesImperialWeeks = () => {
    const columns = [
        { title: 'Year', dataIndex: 'year', key: '1', width: 200},
        { title: 'Room Type', dataIndex: 'roomType', key: '2', width: 200 },
        { title: 'Amount', dataIndex: 'amount', key: '3', width: 200 },
      ]
      const data = [
          {year:'2201', roomType: '',amount:''},
          {year:'2201', roomType: '',amount:''},
          {year:'2201', roomType: '',amount:''},
      ]
        /** Valores que se pintan en <Select/> */
        const yearOptions = [
            {name: '2001', value: '2001'}, 
            {name: '2002', value: '2002'}
        ];
        const [yearSelect, SelectYear, resetSelectYear] = useSelect('Year', '', yearOptions);

      
    return (
        <>
            <Card>
                <CardHeader><CardTitle tag="h3">Additional Fees - Imperial Weeks</CardTitle></CardHeader>
                <CardBody>
                    <Row>
                        <div className=" d-flex justify-content-end">
                                <Col lg="3">
                                    <SelectYear/>
                                </Col>
                        </div>
                    </Row>
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

export default AdditionalFeesImperialWeeks
