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

const ModalReportDespositBatchListing = ()=>{

    const Titulo =[
        'Report Desposit Batch Listing'
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
                    <h5>Date</h5>
                      <Input label="Start date" type="date" placeholder="" col={12}/>
                    </div>
                    <div className="col-md-6">
                      <br/>
                      <Input label="End date" type="date" placeholder="" col={12}/>

                    </div>
                </div>
                <br/>
                <div className="row">
                  <h5>Project & Office</h5>
                  <div className="col-md-4">
                      <Input
                        type="text"
                        label="Prject"
                        placeholder=""
                        col={12}
                        />
                      <Input
                        type="text"
                        label="Office"
                        placeholder=""
                        col={12}
                      />
                    </div>
                    <div className="col-md-8">
                      <Select
                        label=""
                        option="PLACE ELITE"
                      />
                      <br/>
                      <Select
                        label=""
                        option="PAYACAR PALCE"
                      />
                    </div>
                    <div className="col-md-6">
                      <Checkbox name="checkRow3" label="Include credit note postdated" />
                      <Checkbox name="checkRow3" label="Onon payments membership" />
                    </div>
                    <div className="col-md-6">
                    <Checkbox name="checkRow3" label="Include past postdated"/>
                    </div>
                </div>
            </div>
          </Modal.Body>
          <Modal.Footer>

            <Button variant="primary">
              Print
            </Button>
          </Modal.Footer>
        </Modal>
        </>
    )
}

export default ModalReportDespositBatchListing