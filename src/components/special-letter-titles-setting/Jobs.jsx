/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/
import React, {useState} from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import TableJobs from './componentes/TableJobs'

const Jobs = ()=>{

    const Titulo =[
        'Jobs'
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
                        <TableJobs/>
                  </div>
                </div>
            </div>
          </Modal.Body>
          <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          <Modal.Footer>
          </Modal.Footer>
        </Modal>
        </>
    )
}

export default Jobs