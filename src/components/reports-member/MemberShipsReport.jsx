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

const MemberShipsReport = ()=>{

    const Titulo =[
        'Company Information'
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
                            col={12}
                        />
                        <Select
                            label="Status"
                            option="Todos"
                            col={12}
                        />
                    </div>
                    <br/>
                    <label htmlFor="" col={12}>Membership</label>
                    <div className="col-md-12">
                        <Input
                            type="Application"
                            label=""
                            placeholder=""
                            col={12}
                        />
                        <Checkbox name="checkRow3" label="Get Related Memberships" />
                        <Checkbox name="checkRow3" label="Get only diamond memberships" />
                        <Checkbox name="checkRow3" label="Exclude date filter" />
                        <Input
                            type="Procesable"
                            label="All"
                            placeholder=""
                            col={12}
                        />
                    </div>
                    <br/>
                    <label htmlFor="" col={12}>Date Fiter</label>
                    <div className="col-md-6">
                        <Checkbox name="checkRow3" label="Procesable" col={12}/>
                    </div>
                    <div className="col-md-6">
                        <Checkbox name="checkRow3" label="Purchase" col={12}/>
                    </div>
                    <div className="col-md-12">
                        <Input label="Date From" type="date" placeholder="" col={12}/>      
                        <Input label="Date To" type="date" placeholder="" col={12}/>    
                        <Select
                            label="Porfolio"
                            option="All"
                            col={12}
                        />
                        <Checkbox name="checkRow3" label="Open report after generate" col={12}/>
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

export default MemberShipsReport