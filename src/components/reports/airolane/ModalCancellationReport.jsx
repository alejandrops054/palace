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

const ModalCancellationReport = ()=>{

    const Titulo =[
        'Cancellation Report'
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
            <div className="container">
                <div className="row">
                  <p>Date</p>
                    <div className="col-md-6">
                      <Input label="Start date" type="date" placeholder="" col={12}/>
                    </div>
                    <div className="col-md-6">
                      <Input label="End date" type="date" placeholder="" col={12}/>
                    </div>
                </div>
                <br/>
                <div className="row">
                  <div className="col-md-12">
                    <Select
                        type="text"
                        label="Company"
                        options="PALACE ELITE S.A DE C.V"
                        col={12}
                    />
                    <Checkbox name="checkRow3" label="Do you want detail?" col={12}/>
                  </div>
                </div>
                <br/>
                <div className="row">
                    <p>Type</p>
                    <div className="col-md-12">
                        <Select
                            type="text"
                            label="Procesable"
                            options="All"
                            col={12}
                        />
                    </div>
                </div>
                <br/>
                <div className="row">
                    <p>Sale</p>
                    <div className="col-md-12">
                        <Select
                            type="text"
                            label="Portofolio"
                            options="All"
                            col={12}
                        />
                    </div>
                </div>
                <br/>
                <div className="row">
                    <p>Temporary | permanent | Both</p>
                    <div className="col-md-12">
                        <Select
                            type="text"
                            label="CNX"
                            options="A ambas"
                            col={12}
                        />
                        <Checkbox name="checkRow3" label="Do you want to open the report?" col={12}/>
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

export default ModalCancellationReport