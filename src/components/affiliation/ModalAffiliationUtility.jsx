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
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

const ModalAffiliationUtility = ()=>{

    const Titulo =[
        'Affiliation Utility'
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
                    <h5>Filters</h5>
                    <div className="col-md-6">
                        <Select
                            type="text"
                            label="Processable"
                            placeholder="All"
                            col={12}
                        />
                        <Input label="Start date" type="date" placeholder="" col={12}/>
                    </div>
                    <div className="col-md-6">
                        <Select
                            type="text"
                            label="Office"
                            placeholder="All"
                            col={12}
                        />
                        <Input label="End date" type="date" placeholder="" col={12}/>
                    </div>
                    <div className="col-md-12">
                        <Input
                            type="text"
                            label="Affilation"
                            placeholder=""
                            col={12}
                        />
                        <SeachNav
                            placeholder="Search"
                            col={12}
                        />
                    </div>
                </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Print
            </Button>
            <Button variant="primary">
              Specif Member
            </Button>
          </Modal.Footer>
        </Modal>
        </>
    )
}

export default ModalAffiliationUtility