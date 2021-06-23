/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/
import {React, useState} from 'react';
import {Input, Select, Checkbox} from "../../index";
import TextField from '@material-ui/core/TextField';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

const ModalAirplaneTicket = ()=>{

    const Titulo =[
        'Airplane Ticket'
    ]

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
        <Button variant="primary" onClick={handleShow}>
          {Titulo}
        </Button>
  
        <Modal show={show} onHide={handleClose} size="ms" aria-labelledby="contained-modal-title-vcenter" centered>
          <Modal.Header closeButton>
            <Modal.Title>{Titulo}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="container">
                <div className="row">
                  <p>Company Information</p>
                  <div className="col-md-12">
                    <Input
                      type="text"
                      label="Company"
                      placeholder=""
                      col={12}
                        />
                        <label htmlFor="" className="col-md-12">Name: Compani Name</label>
                  </div>
                    <div className="col-md-6">
                      <Input label="From date" type="date" placeholder="" col={12}/>
                    </div>
                    <div className="col-md-6">
                      <Input label="To date" type="date" placeholder="" col={12}/>
                    </div>
                    <div className="col-md-12">
                      <Select
                        label="Program goup"
                        option="Sele Date"
                        col={12}
                      />
                    </div>
                </div>
                <br/>
                <div className="row">
                  <p>Status</p>
                  <div className="col-md-6">
                      <Checkbox name="checkRow3" label="Available" />
                      <Checkbox name="checkRow3" label="Tranfered" />
                      <Checkbox name="checkRow3" label="Owe Monthly" />
                  </div>
                  <div className="col-md-6">
                    <Checkbox name="checkRow3" label="Used" />
                    <Checkbox name="checkRow3" label="Cancel" />
                    <Checkbox name="checkRow3" label="Reservation" />
                    <Checkbox name="checkRow3" label="All" />
                  </div>
                </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
          <Button variant="secondary">
              Close
            </Button>
            <Button variant="primary">
              Execute
            </Button>
          </Modal.Footer>
        </Modal>
        </>
    )
}

export default ModalAirplaneTicket