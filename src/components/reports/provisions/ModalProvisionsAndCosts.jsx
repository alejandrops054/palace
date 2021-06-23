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

const ModalProvisionsAndCosts = ()=>{

    const Titulo =[
        'Provisions And Costs'
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
                    <div className="col-md-12">
                      <Input label="Date From" type="date" placeholder="" col={12}/>    
                      <Input label="Date To" type="date" placeholder="" col={12}/>    
                      <br/>
                      <Checkbox name="checkRow3" label="" />
                    </div>
                    <br/>
                    <div className="col-md-12">
                    <Input
                      type="text"
                      label=""
                      placeholder=""
                      col={12}
                        />
                    <Checkbox name="checkRow3" label="Application" />
                    <Checkbox name="checkRow3" label="Open report after generate" />
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

export default ModalProvisionsAndCosts