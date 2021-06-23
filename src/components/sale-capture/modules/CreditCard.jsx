/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/
import React, { useState, useEffect, useRef } from "react";
import {  Checkbox, Button, MenuButton } from '../../index';
import { Card, Row, Col, Form, Input, Label, Table, Modal} from 'reactstrap'
import DataTable from 'react-data-table-component';
import NewCreditCard from '../../new-credit-card/NewCreditCard';
import EdidCreditCard from '../../new-credit-card/EditCreditCard';
import CreditCardLog from '../../new-credit-card/CreditCardLog'
import OtherPayments from '../../new-credit-card/OtherPayments';
import CardCharge from '../../new-credit-card/CardCharge';
import useFetchGet from "../../../hooks/useFetchGet";
// Data CoOwner
// import {columns} from "./DataCoOwner";
// Custome hooks
import { useForm, useSelect } from "../../../hooks";

import { useSelector, useDispatch } from "react-redux";

import {getCreditcardAction, 
    obtainProductEditAction,
    deleteCreditcardAction,
    obtenerCreditcardEditarAction,
    editCreditcardAction } from "../../../redux/actions/saleCaptureActions/creditcard.Actions";

//Mensajes JSON
import LanguagesJSON from '../../json/LanguagesEsMx.json';


const CreditCard = () => {
    
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false);
    const toggle = () => setOpen(!open);

    const [setdataTableCredit] = useState([]);

    const creditcardsTableData = useSelector((state)=> state.creditcard.creditcards);

    let datatableCreditcard = [];
    let tablaCreditcard = {};

    if(creditcardsTableData.length > 0){
        creditcardsTableData.map((credidcard)=>{
            tablaCreditcard = {
                type: credidcard.clcrecar_id,
                CardNumber: credidcard.num_card, 
                NameCreditCard: credidcard.name_card,
                start: credidcard.inicio,
                expire: credidcard.expira,
                security: credidcard.security_code,
                currency:credidcard.currency,
                status:credidcard.status,
                relationship:credidcard.relationship,
                profile:credidcard.application,
                typecard:credidcard.type_card,
            };
            datatableCreditcard.push(tablaCreditcard);
        })
    }
    useEffect(()=>{
        const cargarCreditCards =() => dispatch(getCreditcardAction());
        cargarCreditCards();
    },[open])

    const onDelete = (key,paso1) => {
        console.log(key + " " + paso1,"prueba de pasos");
        dispatch(deleteCreditcardAction(key,paso1));
      };

    const columns = [
        {
            name: 'Type',
            selector: 'type',
            sortable:true,
        },
        {
            name: 'Card Number',
            selector: 'CardNumber',
            sortable: true,
        },
        {
            name: 'Name as appear in the card',
            selector: 'NameCreditCard',
            sortable: true,
        },
        {
            name: 'Start',
            selector: 'start',
            sortable: true,
        },
        {
            name: 'Expire',
            selector: 'expire',
            sortable: true,
        },
        {
            name: 'Security Code',
            selector: 'security',
            sortable: true,
        },
        {
            name: 'Currency',
            selector: 'currency',
            sortable: true,
        },
        {
            name: 'Credit Granted',
            selector: 'credit',
            sortable: true,
        },
        {
            name: 'Status',
            selector: 'status',
            sortable: true,
        },
        {
            name: 'Relationship',
            selector: 'relationship',
            sortable: true,
        },
        {
            name: 'Profile Id',
            selector: 'profile',
            sortable: true,
        },
        {
            name: 'Type Card',
            selector: 'typecard',
            sortable: true,
        },
        {
            name: 'Monthly Authorization',
            selector: 'montly',
            sortable: true,
            cell: row =>( <Checkbox/> )
        },
        {
            name: <i className="fas fa-ellipsis-v"></i>,
            selector: "but",
            button: true,
            cell: row => (
              <MenuButton
                onclickDelete={(e) => {
                  onDelete(row.recnum);
                }}
                onclickEdit={(e) => {
                  onEdit(row.id);
                }}
              />
            ),
          },
    ];

    const customStyles = {
        rows: {
          style: {
            minHeight: '72px', // override the row height
          }
        },
        headCells: {
          style: {
            fontSize:'20px',
            paddingLeft: '8px', // override the cell padding for head cells
            paddingRight: '8px',
          },
        },
        cells: {
          style: {
            fontSize:'15px',
            paddingLeft: '8px', // override the cell padding for data cells
            paddingRight: '8px',
          },
        },
      };
    
    return (
        <Card>
            <div className="row">
                <h1>Credit Cards</h1>
                <div className="col-md-12 d-flex justify-content-end tables">
                    <NewCreditCard/>
                    {/* <Button col='1.5' title='Edit' icon='fas fa-pen' typebootstrap='link' type='button' />
                    <Button col='1.5' title='Activate' icon='fas fa-toggle-on' typebootstrap='link' type='button'/>*/}
                    <CreditCardLog/>
                </div>
                <br/>
                <br/>
                <Row>
                    <DataTable noHeader id="resume-table" rowKey={() => Math.random()} className='table' columns={columns} data={datatableCreditcard} customStyles={customStyles} noDataComponent=''/>
                </Row>
                <br/>
                <br/>
                <hr/>
                <Row>
                    <OtherPayments/>
                </Row>
                <br/>
                <br/>
                <hr/>
                <Row>
                    <CardCharge/>
                </Row>
            </div>
        </Card>
    )
}
export default CreditCard;
