/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/
import React from 'react'
import Table from "rc-table"
import {Modal,ModalHeader,ModalBody,ModalFooter,Card,CardBody,CardTitle,CardSubtitle,CardHeader,Row,Col,CardFooter,Container,Label} from "reactstrap";

import {Button, Input, Checkbox} from '../index'
import {useSelect} from '../../hooks'
import {columns1,columns2,columns3,data1,data2,data3} from './DataTablesProvision'


const Provision = () => {
    // select Status
    const StatusOptions = [{name: 'Alta', value: 'Alta'}, {name: 'Baja', value: 'Baja'}];
    const [statusState, SelectStatus, resetStatus] = useSelect('Status', '', StatusOptions);
    //select Use State
    const UseStatusOptions = [{name: 'Alta', value: 'Alta'}, {name: 'Baja', value: 'Baja'}];
    const [useStatusState, SelectUseStatus, resetUseStatus] = useSelect('Use Status', '', UseStatusOptions);
    //select Provision Partner With Golf
    const ProvisionGolfOptions = [{name: 'Alta', value: 'Alta'}, {name: 'Baja', value: 'Baja'}];
    const [useStateProvisionGolf, SelectProvisionGolf, resetProvisionGolf] = useSelect('Provision Partner With Golf', '', ProvisionGolfOptions);
  //select Cost Type
  const CostTypeOptions = [{name: 'Alta', value: 'Alta'}, {name: 'Baja', value: 'Baja'}];
  const [costTypeState, SelectCostType, resetCostType] = useSelect('Use Status', '', CostTypeOptions);
    //select Program Group to grant
    const ProgramGroupToOptions = [{name: 'Alta', value: 'Alta'}, {name: 'Baja', value: 'Baja'}];
    const [programGroupToState, SelectProgramGroupTo, resetProgramGroupTo] = useSelect('Program Groups to Grant', '', ProgramGroupToOptions);
     //select Program Group 
     const ProgramGroupOptions = [{name: 'Alta', value: 'Alta'}, {name: 'Baja', value: 'Baja'}];
     const [programGroupState, SelectProgramGroup, resetProgramGroup] = useSelect('Program Groups', '', ProgramGroupOptions);
     //select Season
     const SeasonOptions = [{name: 'Alta', value: 'Alta'}, {name: 'Baja', value: 'Baja'}];
     const [seasonState, SelectSeason, resetSeason] = useSelect('Season', '', SeasonOptions);
      //select Provisions Groups
      const ProvisionsGroupsOptions = [{name: 'Alta', value: 'Alta'}, {name: 'Baja', value: 'Baja'}];
      const [provisionsGroupsState, SelectProvisionsGroups, resetProvisionsGroups] = useSelect('Provisions Groups', '', ProvisionsGroupsOptions);
    //select Category
    const CategoryOptions = [{name: 'Alta', value: 'Alta'}, {name: 'Baja', value: 'Baja'}];
    const [categoryState, SelectCategory, resetCategory] = useSelect('Category', '', CategoryOptions);
    //select SubCategory
    const SubCategoryOptions = [{name: 'Alta', value: 'Alta'}, {name: 'Baja', value: 'Baja'}];
    const [subCategoryState, SelectSubCategory, resetSubCategory] = useSelect('SubCategory', '', SubCategoryOptions);

    return (
        <>
            <Card>
                <CardHeader>
                    <CardTitle tag="h3">Provision</CardTitle>
                </CardHeader>
          
            <CardBody>
            <Row>
                <Col lg="7">
                    <Row>
                        <Col lg="3">
                            <Input type="text" label="Code" col={12} />
                        </Col>
                        <Col lg="3">
                            <SelectStatus/>
                        </Col>
                        <Col lg="3">
                            <SelectUseStatus/>
                        </Col>
                        <Col lg="3">
                            <Input type="text" label="Report Name" col={12} />
                        </Col>
                    </Row>
                    <Row>
                    <Col lg="8">
                        <Input type="text" label="Name" col={12} />
                    </Col>
                    <Col lg="4" className="pt-4">
                        <Checkbox   label="5% Cash Sale" />
                    </Col>
                    </Row>
                    <Row>
                        <SelectProvisionGolf/>
                    </Row>
                    <Row>
                        <Col lg="2">
                            <Checkbox   label="Airfare Cup" />
                        </Col>
                        <Col lg="2">
                            <Checkbox   label="Le Blanc" />
                        </Col>
                        <Col lg="2">
                            <Checkbox   label="Move In" />
                        </Col>
                        <Col lg="2">
                            <Checkbox   label="Imperial Week" />
                        </Col>
                        <Col lg="2">
                            <Checkbox   label="Residence" />
                        </Col>
                        <Col lg="2">
                            <Checkbox   label="Is Trial" />
                        </Col>
                    </Row>
                    <Row className="pt-3">
                        <Col lg="6">
                            <Card>
                                <CardHeader>
                                    <CardSubtitle>ULG</CardSubtitle>
                                </CardHeader>
                                <Checkbox label="Can have unlimited golf"/>
                                <Checkbox label="Unlimited golf free"/>
                                <Checkbox label="Unlimited golf with additional payment"/>
                                <Checkbox label="Can Change"/>
                            </Card>
                        </Col>
                        <Col lg="6">
                        <div className="d-flex justify-content-between pb-3">
                            <Input type="text" label="Golf Round(s) Included" col={6} />
                            <Input type="text" label="Promotion" col={6} />
                            </div>
                            <SelectCostType/>
                            <div className="d-flex justify-content-between pb-3">
                                <Checkbox label="Generates Cost"/>
                                <Checkbox label="Impact Cost"/>
                            </div>
                            <SelectProgramGroupTo/>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg="9">
                        <Card>
                                <CardHeader>
                                    <CardSubtitle>Combination Week and Night</CardSubtitle>
                                </CardHeader>
                               <Row className="pt-3">
                               <Col lg="6">
                                <SelectProgramGroup/>
                                </Col>
                                <Col lg="6">
                                    <SelectSeason/>
                                </Col>
                               </Row>
                               <SelectProvisionsGroups/>

                            </Card>
                        </Col>
                        <Col lg="3" className="pt-5">
                        <Button col={12} icon="fas fa-check" title="Room Types Promotional" typebootstrap="primary btn-lg " type="submit"/>
                        </Col>
                    </Row>
                
                </Col>
                <Col lg="5">
                    <Row>
                        <Col lg="6">
                        <Card>
                        <CardHeader>
                        <CardSubtitle>Validity</CardSubtitle>
                        </CardHeader>
                        <CardBody>
                            <div className="d-flex">
                            <Input type="text" label="Default" col={6} />
                            <Input type="text" label="Maximum" col={6} />
                            </div>
                        </CardBody>
                    </Card>
                        </Col>
                        <Col lg="6">
                            <Input type="date" label="Beginning Date" col={10} />
                            <Input type="date" label="Ending Date" col={10} />
                        </Col>
                    </Row>
                    <Row>
                        <Card>
                            <CardHeader>
                                <CardSubtitle>Extra Cost Per Year</CardSubtitle>
                            </CardHeader>
                            <CardBody>
                                <Table scroll={{x:'auto',y:'auto'}} style={{height:300}} className="table" id="resume-table" columns={columns1} data={data1}/>
                            </CardBody>
                        </Card>
                    </Row>
                    <Row>
                        <Col lg="8">
                            <Card>
                                <CardHeader><CardSubtitle>SAP Category</CardSubtitle></CardHeader>
                                <CardBody>
                            <SelectCategory/>
                            <SelectSubCategory/>
                            </CardBody>
                            </Card>
                            
                        </Col>
                        <Col lg="4">
                            <Row>
                               <Card>
                               <CardHeader><CardSubtitle>Stock</CardSubtitle></CardHeader>
                                <Checkbox label="Generates Cost"/>
                                <Checkbox label="Impact Cost"/>
                               </Card>
                            </Row>
                            <Row>
                            <Card>
                               <CardHeader><CardSubtitle>Sale Price</CardSubtitle></CardHeader>
                                    <Label color="primary">$ 75,000.00</Label>
                               </Card>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>
{/* Group two */}
            <Row>
                <Col lg="6">
                <Card>
                            <CardHeader>
                                <CardSubtitle>Hotels</CardSubtitle>
                            </CardHeader>
                            <CardBody>
                                <Table scroll={{x:'auto',y:'auto'}} style={{height:300}} className="table" id="resume-table" columns={columns2} data={data2}/>
                            </CardBody>
                        </Card>
                </Col>
                <Col lg="6">
                       <Row>
                       <Col lg="8">
                            <Card>
                                <CardHeader><CardSubtitle>Reports Language</CardSubtitle></CardHeader>
                                <CardBody>
                            <SelectCategory/>
                            <SelectSubCategory/>
                            <Table scroll={{x:'auto',y:'auto'}} style={{height:130}} className="table" id="resume-table" columns={columns3} data={data3}/>

                            </CardBody>
                            </Card>
                        </Col>
                        <Col lg="4">
                               <Card>
                               <CardHeader><CardSubtitle>Occupancy</CardSubtitle></CardHeader>
                               <Input type="text" label="Minimum" col={12} />
                            <Input type="text" label="Maximum" col={12} />
                               </Card>
                        </Col>
                       </Row>
                </Col>
            </Row>
            </CardBody>
            <CardFooter>
                <div className="d-flex justify-content-end">
                    <Button col={2} icon="fas fa-check" title="Save" typebootstrap="primary  " type="submit"/>
                    <Button col={2} icon="fas fa-check" title="Cancel" typebootstrap="secondary " type="submit"/>
                </div>
            </CardFooter>
            </Card>
        </>
    )
}

export default Provision
