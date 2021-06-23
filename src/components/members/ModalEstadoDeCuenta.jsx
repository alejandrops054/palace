/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/
import {React, useState} from 'react';
import {Input, Select, Checkbox, Button as ButtonUI} from "../index";
import SeachNav from "../ui/search"
import TextField from '@material-ui/core/TextField';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

import validator from 'validator';
import {useForm, useSelect} from '../../hooks'

const EstadoDeCuenta = () => {

    const Titulo =[
        'Status Cuenta'
    ]
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    /** Valores que se pintan en <Select/> ****editarlos**** */
    const projectOptions = [
        {name: 'op', value: 'op'}, 
        {name: '', value: ''}
    ];
    const officeOptions = [
        {name: 'op', value: 'op'}, 
        {name: '', value: ''}
    ];
    const programOptions = [
        {name: 'op', value: 'op'}, 
        {name: '', value: ''}
    ];
    const memberOptions = [
        {name: 'Alta', value: 'Alta'}, 
        {name: 'Baja', value: 'Baja'}
    ];
    const accountOptions = [
        {name: 'Mexican', value: 'Mexican'}, 
        {name: 'japan', value: 'japan'}
    ];
    const cardOptions = [
        {name: 'Alta', value: 'Alta'}, 
        {name: 'Baja', value: 'Baja'}
    ];
   
    /*Selects */
    const [projectSelect, SelectProject, resetSelectProject]= useSelect('Select Project', '', projectOptions);
    const [officeSelect, SelectOffice, resetSelectOffice]= useSelect('Select Office', '', officeOptions);
    const [programSelect, SelectProgram, resetSelectProgram]= useSelect('', '', programOptions);
    const [memberSelect, SelectMember, resetSelectMember] = useSelect('', '', memberOptions);
    const [accountSelect, SelectAccount, resetSelectAccount]= useSelect('', '', accountOptions);
    const [CardSelect, SelectCard, resetSelectCard]= useSelect('Select Office', '', cardOptions);


    const estadoDeCuentaDefault={
        project:'',
        office:'',
        start_date:'',
        end_date:'',
        dateProgram:'',
        dateSelect:'',
        memberProgram:'',
        memberSel:'',
        accountProgram:'',
        accountSel:'',
        cardProgram:'',
        cardSelect:''
    }
    const onSubmit=_=>{
       



    }
    const {inputs, handleInputChange, handleSubmit, reset} = useForm(estadoDeCuentaDefault, onSubmit);
    const {project,office,start_date,end_date,dateProgram,dateSelect,memberProgram,memberSel,accountProgram,accountSel,cardProgram,cardSelect} = inputs
    return(
        <>
        <Button variant="primary" onClick={handleShow}>
          {Titulo}
        </Button>
        <Modal show={show} onHide={handleClose} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
            <form onSubmit={handleSubmit}>
          <Modal.Header closeButton>
            <Modal.Title>{Titulo}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                    <SelectProject/>
                    <br/>
                    <SelectOffice/>
                    </div>
                </div>
                <br/>
                <div className="row">
                    <h5>Select Date</h5>
                    <div className="col-md-6">
                        <Input type="date" label="Start Date" col={12} name="start_date" value={start_date} onChange={handleInputChange}/> 
                    </div>
                    <div className="col-md-6">
                        <Input type="date" label="End Date" col={12} name="end_date" value={end_date} onChange={handleInputChange}/> 
                    </div>
                </div>
                <br/>
                <div className="row">
                    <h5>Program</h5>
                    <div className="col-md-6">
                        <Input type="text" label="" col={12} name="dateProgram" value={dateProgram} onChange={handleInputChange}/> 
                    </div>
                    <div className="col-md-6">
                       <SelectProgram/>
                    </div>
                </div>
                <br/>
                <div className="row">
                    <h5>Select Member</h5>
                <div className="col-md-6">
                <Input type="text" label="" col={12} name="memberProgram" value={memberProgram} onChange={handleInputChange}/> 
                    </div>
                    <div className="col-md-6">
                       <SelectMember/>
                    </div>
                </div>
                <br/>
                <div className="row">
                    <h5>Select Account</h5>
                    <div className="col-md-6">
                    <Input type="text" label="" col={12} name="accountProgram" value={accountProgram} onChange={handleInputChange}/> 
                    </div>
                    <div className="col-md-6">
                    <SelectAccount/>
                    </div>
                </div>
                <br/>
                <div className="row">
                    <h5>Select Card</h5>
                    <div className="col-md-6">
                    <Input type="text" label="" col={12} name="cardProgram" value={cardProgram} onChange={handleInputChange}/> 
                    </div>
                    <div className="col-md-6">
                        <SelectCard/>
                    </div>
                </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <ButtonUI title="Cerrar" col={2} typebootstrap="secondary " onClick={()=>setShow(false)}/>
            <ButtonUI title="Print" col={2} typebootstrap="primary " type="submit"/>
          </Modal.Footer>
          </form>
        </Modal>
        </>
    )
}

export default EstadoDeCuenta