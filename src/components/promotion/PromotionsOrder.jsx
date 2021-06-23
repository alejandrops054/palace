/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/
import React, {useState} from 'react';
import {Input, Select, Checkbox} from "../index";
import TextField from '@material-ui/core/TextField';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import TablaOrder from './componets/TablaOrder'

const PromotionsOrder = ()=>{

    const Titulo =[
        'Promotions Order'
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
            <TablaOrder/>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary">
              Close
            </Button>
            <Button variant="primary">
              Salve
            </Button>
          </Modal.Footer>
        </Modal>
        </>
    )
}

export default PromotionsOrder