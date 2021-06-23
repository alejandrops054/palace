/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/
import {React, useState} from 'react';
import {Input, Select, Checkbox} from "../index";
import TablePerformance from'./TablePerformance'
import SeachNav from "../ui/search"
import TextField from '@material-ui/core/TextField';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

const ModalPerformance = ()=>{

    const Titulo =[
        'Performance'
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

          <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <Input label='Company' type="text"/>
                    <Select
                            label="Process"
                            value="All"
                        />
                        <Select
                            label="Module"
                            value="All"
                        />
                        <Select
                            label="Action"
                            value="All"
                        />
                </div>
                <div className="col-md-6">
                    <SeachNav label="User" placeholder={""} col={12} />
                    <Input label="Date from" type="date" placeholder="" col={12}/>
                    <Input label="Date to" type="date" placeholder="" col={12}/>
                    <Select
                        label="Duration (Secods)"
                        value="0"
                    />
                </div>
            </div>
          </div>
          <Modal.Body>
            <div className="container">
                <div className="row">
                    <TablePerformance/>
                </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cerrar
            </Button>
            <Button variant="primary">
              Print
            </Button>
          </Modal.Footer>
        </Modal>
        </>
    )
}

export default ModalPerformance