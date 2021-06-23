/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/
import React, {useState} from 'react';
import {Input, Select, Checkbox} from "../index";
import Modal from 'react-bootstrap/Modal'
import TextField from '@material-ui/core/TextField';
import Button from 'react-bootstrap/Button'
import TablaBenefitTitles from './componentes/TablaBenefitTitles'

const BenefitTitles = ()=>{

    const Titulo =[
        'Benefit Titles'
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
                    <div className="col-md-6">
                        <Select
                            label="Category"
                            option="All"
                            col={12}
                        />
                        <Select
                            label="Benefit type"
                            option="All"
                            col={12}
                        />
                    </div>
                    <div className="col-md-6">
                        <Input
                            type="text"
                            label="Benefit Type Name"
                            placeholder=""
                            col={12}
                        />
                        <Select
                            label="Status"
                            option="All"
                            col={12}
                        />
                    </div>
                    <br/>
                  <div className="col-md-12">
                    <TablaBenefitTitles/>
                  </div>
                </div>
            </div>
          </Modal.Body>
          <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
          <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
              Clear fiter
            </Button>
            <Button variant="primary">
              Apply filter
            </Button>
          </Modal.Footer>
        </Modal>
        </>
    );
}

export default BenefitTitles