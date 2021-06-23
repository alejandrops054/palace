/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/
import React, { Component } from 'react';
import {  Checkbox, Button } from '../index';
import { Card, Row, Col, Form, Input, Label, Table } from 'reactstrap'
import DataTable from 'react-data-table-component';
import MemberOtherPay from './MemberOtherPay';
import OtherPayLog from './OtherPayLog';
import CardChargeLog from './CardChargeLog';

import {urlMembCardsByApp} from "../../webservice/memberService";

import axios from "axios";

class CreditCard extends Component{
    state={
        data:[]
    }

    peticionGet=() =>{
        axios.get(urlMembCardsByApp).then(response=>{
            this.setState({data: response.data});
            console.log(response.data);
        })
    }

    componentDidMount(){
        this.peticionGet();
    }

    render(){
        return(
            <Card>
                <Row>
                    <h1>Card Charge Authorization</h1>
                    <div className="col-md-12 d-flex justify-content-end tables">
                        <Button col='1.5' title='Add' icon='fas fa-plus' typebootstrap='link' type='button' />
                        <CardChargeLog/>
                    </div>
                    <br/>
                    <Row>
                        <Table className="table table-striped table-bordered dt-responsive nowrap">
                            <thead>
                                <tr>
                                    <th>Name as appear in the card</th>
                                    <th>Relationship</th>
                                    <th>Card brand</th>
                                    <th>Type card</th>
                                    <th>Card number</th>
                                    <th>Start</th>
                                    <th>Expiration</th>
                                    <th>Security code</th>
                                    <th>Amount paid</th>
                                    <th>Currency</th>
                                    <th>profile id</th>
                                    <th className="fas fa-ellipsis-v"></th>
                                </tr>
                            </thead>
                            <tbody>
                            {this.state.data.map(creditCards=>{return(
                                <tr>
                                    <td>{creditCards.NAME_CARD}</td>
                                    <td></td>
                                    <td>{creditCards.CLCRECAR_ID}</td>
                                    <td></td>
                                    <td>{creditCards.NUM_CARD}</td>
                                    <td>{creditCards.STATUS}</td>
                                    <td>{creditCards.EXPIRA}</td>
                                    <td>{creditCards.SECURITY_CODE}</td>
                                    <td>{creditCards.currency}</td>
                                    <td></td>
                                    <td>{creditCards.APPLICATION}</td>
                                    <td><Checkbox /></td>
                                    <td></td>
                                </tr>   
                            )
                            })}
                            </tbody>
                        </Table>
                    </Row>
                </Row>
            </Card>
        )
    }
}

export default CreditCard