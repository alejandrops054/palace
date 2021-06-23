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

const ModalRef500 = ()=>{

    const Titulo =[
        'REF 500'
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
                            option="All"
                            col={12}
                        />
                        <Select
                            label="Status"
                            option="All"
                            col={12}
                        />
                        <Select
                            label="Office"
                            option="All"
                            col={12}
                        />
                        
                        <Select
                            label="Office"
                            option="All SALE"
                            col={12}
                        />
                        
                    </div>
                    <label htmlFor="" col={12}>Membership</label>
                    <div className="col-md-12">
                        <Input
                            type="text"
                            label="Application"
                            placeholder=""
                            col={12}
                        />
                    </div>
                    <label htmlFor="" col={12}>Purchase Date Filter</label>
                    <div className="col-md-12">
                        <Input label="From date" type="date" placeholder="" col={12}/>
                        <Input label="To date" type="date" placeholder="" col={12}/>
                        <Checkbox name="checkRow3" label="Open report after generate?" col={12}/>
                    </div>
                </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary">
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

export default ModalRef500