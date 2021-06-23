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
import FormDailyInvoing from './Componentes/DailyInvoing'
import OtherInfo from './Componentes/OtherInfo'
import InformationAdicional from './Componentes/InformationAdicional'
import DigitalInvoicing from './Componentes/DigitalInvoicing'

const ModalDailyInvoing = ()=>{

    const Titulo =[
        'Daily Invoicing'
    ]

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
        <Button variant="primary" onClick={handleShow}>
          {Titulo}
        </Button>
  
        <Modal show={show} onHide={handleClose} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
          <Modal.Header closeButton>
            <Modal.Title>{Titulo}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <FormDailyInvoing/>
                    <br/>
                    <OtherInfo/>
                    <br/>
                    <InformationAdicional/>
                    <br/>
                    <DigitalInvoicing/>
                  </div>
                </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="primary">
              Save
            </Button>
          </Modal.Footer>
        </Modal>
        </>
    )
}

export default ModalDailyInvoing