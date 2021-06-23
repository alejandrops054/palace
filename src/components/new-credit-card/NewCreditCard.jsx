/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/
import React, {Component, useState, useEffect} from 'react';

import {Select, Checkbox, Button, } from '../index'
import { Modal, Card, Row, Col, Form, Label, Input } from 'reactstrap'

import { useSelect, useForm } from '../../hooks/index'
import useFetchGet from "../../hooks/useFetchGet";

import {urlCreditCardTypes, urlNewMemberCard, urlTypeCardByLanguage, urlMemberRelationship} from "../../webservice/memberService";
//Mensajes JSON
import LanguagesJSON from '../json/LanguagesEsMx.json'
import axios from "axios";
class NewCreditCard extends Component{

    state={
        data:[],
        dataCreditCardTypes:[],
        dataTypeCardByLanguage:[],
        dataMemberRelationship:[],
        modalNewCreditCard: false,
        value:'',
        form:{
            application:'1000005',
            clCrearId:'AEX',
            inicio:'',
            expira:'',
            numCard:'',
            securityCode:'',
            status:'A',
            cveAlta:'',
            cveBaja:'',
            cveModif:'',
            nameCard:'',
            monthlyPayments: 0,
            approvalMbna: 0,
            paymentStartDate:'1753-01-01T00:00:00.000Z',
            paymentEndDate:'1753-01-01T00:00:00.000Z',
            previousAmount: 0,
            currency:'',
            typeCard:'',
            relationShip: 6,
            socialSecurityNumber:'',
            montlyAutorization: false,
            relationClub:0
        }
    }
    
    peticionCreditCardTypesGet=() =>{
        axios.get(urlCreditCardTypes).then(response=>{
            this.setState({dataCreditCardTypes: response.data});
            console.log("Servicio de type new credit card",response.dataCreditCardTypes);
        }).catch(error=>{
            console.log(error.message);
        })
    }

    petionTypeCreditGET=() =>{
        axios.get(urlTypeCardByLanguage).then(response=>{
            this.setState({dataTypeCardByLanguage: response.data});
            console.log("Servicio de Language",response.dataTypeCardByLanguage);
        }).catch(error=>{
            console.log(error.message);
        })
    }

    petionMemberRelationshipGet = () =>{
        axios.get(urlMemberRelationship).then(response =>{
            this.setState({dataMemberRelationship: response.data});
            console.log("Servicio de Memeber", response.dataMemberRelationship);
        }).catch(error=>{
            console.log(error.message);
        })
    }

    peticionPOST = async()=>{
        await axios.post(urlNewMemberCard, this.state.form).then(response=>{
            this.modalNewCreditCard();
            this.peticionCreditCardTypesGet();
            alert("se guardo correctamente");
        }).catch(error=>{
            console.log(error.message);
            alert("El POST no puedo enviar");
        })
    }

    modalNewCreditCard=()=>{
        this.setState({modalNewCreditCard: !this.state.modalNewCreditCard});
    }

    handleChange =async e =>{
        e.persist();
        await this.setState({
            form:{
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        });
        console.log(this.state.form);
    }

    componentDidMount(){
        this.peticionCreditCardTypesGet();
        this.petionTypeCreditGET();
        this.petionMemberRelationshipGet();
    }

    render(){
        const {form} = this.state;
        return (
            <>
            <button className="btn btn-link" type="button" onClick={()=>this.modalNewCreditCard()} ><i class="fas fa-plus"></i>{' '}Add</button>
            <Modal isOpen={this.state.modalNewCreditCard} size='lg'>
                <Card>
                    <h1>New credit card</h1>
                    <Form>
                        <Row>
                            <Col lg="6">
                            <Label>Type</Label>
                                <select className="form-control" name="clCrearId" id="clCrearId" onChange={this.handleChange}>
                                    {this.state.dataCreditCardTypes.map(creditCardtypes => {
                                        return(
                                            <option key={creditCardtypes.RECNUM} recnum={creditCardtypes.RECNUM} value={creditCardtypes.DESCRIPTION.form}>{creditCardtypes.DESCRIPTION}</option>
                                            )   
                                    })}
                                </select>
                            </Col>
                            <Col lg='6'>
                                <Label>Type card</Label>
                                <select className="form-control" name="typecard" id="typecard" onChange={this.handleChange}>
                                    <option value={form.typeCard}>Debito</option>
                                    <option value={form.typeCard}>Credit</option>
                                </select>
                            </Col>
                        </Row>
                        <br/>
                        <Row>
                            <Col lg="6">
                                <Label>Relationship</Label>
                                <select className="form-control" name="relationShip" id="relationShip" onChange={this.handleChange}>
                                    {this.state.dataMemberRelationship.map(MemberRelationship=>{
                                        return(
                                            <option key={MemberRelationship.RECNUM} value={MemberRelationship.RELATIONSHIP_ID.form}>{MemberRelationship.DESCRIPTION}</option>
                                        )
                                        })
                                    }
                                </select>
                            </Col>
                            <Col lg='6'>
                                <Label>Currency</Label>
                                <select className="form-control" name="currency" id="currency" onChange={this.handleChange}>
                                    <option value={form.currency}>DOLAR U.S.A</option>
                                </select>
                            </Col>
                        </Row>
                        <br/>
                        <Row>
                            <Col lg='6'>
                                <Label>
                                <Input type='checkbox'/>{' '}
                                    Amount Paid</Label>
                                <Input type='text'/>
                            </Col>
                            <Col lg='6'>
                                <Label>Place of signature</Label>
                                <select className="form-control" onChange={this.handleChange}>
                                    <option value="CUN">CANCUN</option>
                                    <option value="PCM">PLAYA DEL CARMEN</option>
                                    <option value="CZM">COZUMEL</option>
                                    <option value="ISJ">ISLA MUJERES</option>
                                    <option value="SJD">LOS CABOS</option>
                                    <option value="JM">JAMAICA</option>
                                </select>
                            </Col>
                        </Row>
                        <br/>
                        <Row>
                            <Col lg='6'>
                                <Label>NSS</Label>
                                <Input type='text' name="socialSecurityNumber" id="socialSecurityNumber" onChange={this.handleChange} value={form.socialSecurityNumber}/>
                            </Col>
                            <Col lg='6'>
                                <Label>Credit Granted</Label>
                                <Input type='text' />
                            </Col>
                        </Row>
                        <br/>
                        <Row>
                            <Col lg='12'>
                                <Label>Card number</Label>
                                <Input type='number' pattern="[0-9]{16}" name="numCard" id="numCard" onChange={this.handleChange} value={form.numCard}/>
                            </Col>
                        </Row>
                        <br/>
                        <Row>
                            <Col md="4">
                                <Label>Security code</Label>
                                <Input type='text' name="securityCode" id="securityCode" onChange={this.handleChange} value={form.securityCode}/>
                            </Col>
                            <Col md="4">
                                <Label>Start</Label>
                                <Input type='text' name="inicio" id="inicio" onChange={this.handleChange} value={form.inicio}/>
                        </Col>
                        <Col md="4">
                            <Label>Expire</Label>
                            <Input type='text' name="expira" id="expira" onChange={this.handleChange} value={form.expira}/>
                        </Col>
                        </Row>
                        <br/>
                        <Row>
                            <Col lg='12'>
                                <Label>Name as appear in the ID</Label>
                                <Input type='text'/>
                            </Col>
                        </Row>
                        <br/>
                        <Row>
                            <Col lg='12'>
                                <Label>Name as appear in the card</Label>
                                <Input type='text' name="nameCard" id="nameCard" onChange={this.handleChange} value={form.nameCard}/>
                            </Col>
                        </Row>
                        <br/>
                        <Row>
                            <Col lg='12'>
                                <Label>
                                    <Input type='checkbox'/>{' '}
                                    Do you authorize of monthly changes without support?
                                </Label>
                            </Col>
                        </Row>
                        <br/>
                        <Row md={5}>
                            <Col lg="6"></Col>
                                <Button
                                    icon="fas fa-times"
                                    typebootstrap="secondary"
                                    width='100%'
                                    type="button"
                                    onClick={()=>this.modalNewCreditCard()}  
                                />
                                <Button
                                    icon="fas fa-check"
                                    typebootstrap="primary"
                                    onClick={()=>this.peticionPOST()}
                                    type="button"
                                    width='100%'
                                />
                        </Row>
                    </Form>
                </Card>
            </Modal>
            </>
        )
    }
}

export default NewCreditCard
