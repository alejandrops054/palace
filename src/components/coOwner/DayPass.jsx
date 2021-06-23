/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/
import {React, useState} from 'react';
import {Input, Select, Checkbox} from "../index";
import SeachNav from "../ui/search"
import TextField from '@material-ui/core/TextField';
import TablaDayPass from './TablaDayPass'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

const DayPass = () => {

    const Titulo =[
        'Day Pass'
    ]
    const Nombre = ['Lorem Input']
    const Pany =['5']
    const Application = ['6007770']

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return(
        <>
        <Button variant="primary" onClick={handleShow}>
          {Titulo}
        </Button>
  
        <Modal show={show} onHide={handleClose} size="xl" aria-labelledby="contained-modal-title-vcenter" centered>
          <Modal.Header closeButton>
            <Modal.Title>{Titulo}</Modal.Title>
          </Modal.Header>
                <div className="container">
                    <div className="row">
                      <p>Member Name:{Nombre} &nbsp; Pany:{Pany} &nbsp;Application:{Application}</p>
                    </div>
                </div>
          <Modal.Body>
                <TablaDayPass/>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cerrar
            </Button>
            <Button variant="primary" onclick="javascript:window.print()">
              Print
            </Button>
          </Modal.Footer>
        </Modal>
        </>
    )
}

export default DayPass