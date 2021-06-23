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

const GenerateIdGlobalMemberShips = ()=>{

    const Titulo =[
        'Generate Id GlobalMemberShips'
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
              <>
              <from>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <Checkbox name="checkRow3" label="For Application" />
                        </div>
                        <div className="col-md-4">
                            <Checkbox name="checkRow3" label="For Queantity" /> 
                        </div>
                        <div className="col-md-4">
                            <Checkbox name="checkRow3" label="All" />
                        </div>
                        <div className="col-md-12">
                            <Input
                                type="text"
                                label=""
                                placeholder=""
                                col={12}
                            />
                        </div>
                    </div>
                </div>
              </from>
              </>
          </Modal.Body>
          <Modal.Footer>

            <Button variant="primary">
              Generate
            </Button>
          </Modal.Footer>
        </Modal>
        </>
    )
}

export default GenerateIdGlobalMemberShips