/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/
import React from 'react'
import Table from 'rc-table'
import {Card, CardBody, CardTitle, CardHeader,Row, Col, CardFooter, CardSubtitle, Container} from 'reactstrap'
import {Input, Button as ButtonUI} from '../index'

import {useSelect} from '../../hooks'


const Nationalities = () => {
    const columns = [
        { title: 'Code', dataIndex: 'Code', key: '1', width: 200},
        { title: 'Description', dataIndex: 'Description', key: '2', width: 200 },
        { title: 'Language', dataIndex: 'Language', key: '3', width: 200 }
      ]
      const data = [
          {Code:'2201', Description: '',Language:''},
          {Code:'2201', Description: '',Language:''},
          {Code:'2201', Description: '',Language:''},
          {Code:'2201', Description: '',Language:''}, 
      ]
            /** Valores que se pintan en <Select/> */
   const countryOptions = [
    {name: 'Alta', value: 'Alta'}, 
    {name: 'Baja', value: 'Baja'}
    ];
    const languageOptions = [
        {name: 'Alta', value: 'Alta'}, 
        {name: 'Baja', value: 'Baja'}
    ];
const [countrySelect, SelectCountry, resetSelectCountry] = useSelect('Country', '', countryOptions);
const [languageSelect, SelectLanguage, resetSelectLanguage] = useSelect('Language', '', languageOptions);

    return (
        <Container fluid>
              <Card>
             <CardHeader>
                        <Row>
                            <Col lg="6">
                                <CardTitle tag="h3">Nationalities</CardTitle>
                            </Col>
                            <Col lg="6" className=" d-flex justify-content-end tables">
                                <ButtonUI col="1.5" icon="fas fa-users" title="Apply Filter" typebootstrap="link main" type="button"/>
                                <ButtonUI col="1.5" icon="fas fa-upload" title="Clear Filter" typebootstrap="link" type="button"/>                                
                            </Col>
                        </Row>
                    </CardHeader>
                <CardBody>
                    <Row>
                    <Col lg="3">
                        <Card>
                            
                                <CardSubtitle>Search</CardSubtitle>
                                <SelectCountry/>
                                <SelectLanguage/>
                                <Input type="text" label="Nationality" placeholder="" col={12} name="id" />
                           
                        </Card>
                        </Col>
                    </Row>
                    <Row>
                    <Table style={{width:'auto'}}  className="table" id="resume-table" columns={columns} data={data}/>
                    </Row>
                </CardBody>
                <CardFooter>
                            <div className="d-flex justify-content-end">
                              
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
        </Container>
    )
}

export default Nationalities
