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
import BenefitType from './benefit-policy/BenefitType'
import TablaBenefitPolicy from './benefit-policy/TablaBenefitPolicy'
import Fiters from './benefit-policy/Fiters'
const ModalBenefitPolicy = ()=>{

    const Titulo =[
        'Benefit Policy'
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
                        <SeachNav
                            label="Seach"
                            col={12}
                        />
                    </div>
                    <div className="col-6">
                        <BenefitType/>
                    </div>
                    <br/>
                    <div className="col-md-6">
                        <Fiters/>
                    </div>
                    <div className="col-md-12"><br/></div>
                    <div className="col-md-12">
                       <TablaBenefitPolicy/>
                    </div>
                </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
          <Button variant="secondary">
              Export to excel
            </Button>
            <Button variant="secondary">
              Blooking Costs
            </Button>
            <Button variant="secondary">
              Show Log
            </Button>
            <Button variant="primary">
              Send to SAP
            </Button>
          </Modal.Footer>
        </Modal>
        </>
    )
}

export default ModalBenefitPolicy