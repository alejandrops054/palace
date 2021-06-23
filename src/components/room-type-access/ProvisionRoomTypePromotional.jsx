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
import TablaProvisionRoomTypePromotional from './components/TablaProvisionRoomTypePromotional'

const ProvisionRoomTypePromotional = ()=>{

    const Titulo =[
        'Provision Room Type Promotional'
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
                    <div className="col-md-4"><p>Provision: 66</p></div>
                    <div className="col-md-4"><p>Status: A</p></div>
                    <div className="col-md-4"><p>Member Name: Imp WK PEU</p></div>
                  <div className="col-md-12">
                    <TablaProvisionRoomTypePromotional/>
                  </div>
                </div>
            </div>
          </Modal.Body>
          <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Salve
            </Button>
          <Modal.Footer>
          </Modal.Footer>
        </Modal>
        </>
    )
}

export default ProvisionRoomTypePromotional