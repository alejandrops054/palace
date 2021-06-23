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

const ModalDailySale = ()=>{

    const Titulo =[
        'Daily Sale'
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
                    <div className="col-md-12">
                        <Select
                            label="Company"
                            option="Todos"
                        />
                        <Select
                            label="Status"
                            option="Todos"
                        />
                        <Select
                            label="Office"
                            option="Todos"
                        />
                    </div>
                    <br/>
                    <div className="col-md-12">
                    <h5>Membership</h5>
                        <Input
                            type="text"
                            label="Application"
                            placeholder=""
                            col={12}
                        />
                    </div>
                    <br/>
                    <div className="col-md-12">
                    <h5>Processable Date filter</h5>
                        <Input label="From date" type="date" placeholder="" col={12}/>
                        <Input label="To date" type="date" placeholder="" col={12}/>
                        <Checkbox name="checkRow3" label="Open report after generate" />
                    </div>
                </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              close
            </Button>
            <Button variant="primary">
              Execute
            </Button>
          </Modal.Footer>
        </Modal>
        </>
    )
}

export default ModalDailySale