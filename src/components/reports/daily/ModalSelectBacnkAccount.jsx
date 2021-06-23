/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/
import {React, useState} from 'react';
import {Input, Select, Checkbox} from "../../index";
import Modal from 'react-bootstrap/Modal'
import TextField from '@material-ui/core/TextField';
import Button from 'react-bootstrap/Button'
import TablaSelectBankAccount from './Componentes/TablaSelectBankAccount'
const ModalSelectBacnkAccount = ()=>{

    const Titulo =[
        'Select a banck account'
    ]
    const Boton =[
        'Banck'
    ]

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
        <Button variant="primary" onClick={handleShow}>
          {Boton}
        </Button>
  
        <Modal show={show} onHide={handleClose} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
          <Modal.Header closeButton>
            <Modal.Title>{Titulo}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="container">
                <div className="row">
                  <div className="col-md-12">
                        <TablaSelectBankAccount/>
                  </div>
                </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="primary">
              OK
            </Button>
          </Modal.Footer>
        </Modal>
        </>
    )
}

export default ModalSelectBacnkAccount