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
import PrintDailyLocation from './Componentes/PrintDailyLocation'
import PrintDailyCodeType from './Componentes/PrintDailyCodeType'
import PrintDailyNational from './Componentes/PrintDailyNational'
import PrintDailyExclude from './Componentes/PrintDailyExclude'

const ModalPrintDailyCollections = ()=>{

    const Titulo =[
        'Print Daily Collections'
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
          <Modal.Header closeButton>
            <Modal.Title>{Titulo}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <PrintDailyLocation/>
                        <hr/>
                        <PrintDailyCodeType/>
                        <hr/>
                        <PrintDailyNational/>
                        <hr/>
                        <PrintDailyExclude/>
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

export default ModalPrintDailyCollections