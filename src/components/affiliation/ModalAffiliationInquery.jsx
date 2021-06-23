/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/
import {React, useState} from 'react';
import TablaAffiliationInquery from './TablaAffiliationInquery'
import {Input, Select, Checkbox, Button as ButtonUI} from "../index";
import SeachNav from "../ui/search"
import TextField from '@material-ui/core/TextField';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import validator from 'validator';


import {useForm} from '../../hooks/'

const ModalAffiliationInquery = ()=>{
  
  const affiliationInqueryDefault = {
    company:'',
    affiliationSearch:'',
    historical:'',
    dateFrom:'',
    tuesday:'',
  }

const AffiliationSubmit = _ =>{
  if(
    validator.isEmpty(inputs.affiliationSearch) 

  ){
    handledError(true)
    return
  }
  handledError(false)
  handleaffiliation(inputs)
}

const {inputs, handleInputChange, handleSubmit, reset} = useForm(affiliationInqueryDefault, AffiliationSubmit);

const {company,affiliationSearch,historical, dateFrom, tuesday} = inputs

const [error, handledError] = useState(false);
const [affiliation, handleaffiliation] = useState({})

    const Titulo =[
        'Affiliation Inquity'
    ]

    const [show, setShow] = useState(false); 

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
        <Button variant="primary" onClick={handleShow}>
          {Titulo}
        </Button>
  
        <Modal show={show} onHide={handleClose} size="xl" aria-labelledby="contained-modal-title-vcenter" centered>
          <form onSubmit={handleSubmit}>
          <Modal.Header closeButton>
            <Modal.Title>{Titulo}</Modal.Title>
          </Modal.Header>

          <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <Input label='Company' type="text"/>
                </div>
                <div className="col-md-4">
                <Input type="text" label="Affiliation" icon="fas fa-search" col={12} name="affiliationSearch" value={affiliationSearch} onChange={handleInputChange}/> 
                {error?
                  validator.isEmpty(affiliationSearch) ? (<p className="text-danger">Required¡</p>) : null
                : null}
                </div>
                <div className="col-md-4">
                <Input type="date" label="Historical" col={12} name="historical" value={historical} onChange={handleInputChange}/> 
                </div>
            </div>
            <br/>
            <div className="row">
                <div className="col-md-4">
                <Input type="date" label="Date From" col={12} name="dateFrom" value={dateFrom} onChange={handleInputChange}/> 
                </div>
                <div className="col-md-4">
                <Input type="date" label="Tuesday" col={12} name="tuesday" value={tuesday} onChange={handleInputChange}/> 

                </div>
            </div>
          </div>
          <Modal.Body>
            <div className="container">
                <div className="row">
                    <TablaAffiliationInquery/>
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

export default ModalAffiliationInquery