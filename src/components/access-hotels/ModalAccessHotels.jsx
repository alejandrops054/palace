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

function ModalAccessHotels() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Access Hotel
        </Button>
  
        <Modal show={show} onHide={handleClose} animation={false}>
          <Modal.Header closeButton>
            <Modal.Title>Access Hotel</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <div className="container">
                  <div className="row">
                      <div className="col-md-12">
                        <Input type="text" col={12} label="Code"/>
                        <Input type="text" col={12} label="Description"/>
                        <Select label="Ststus" option="Alta" col={12}/>
                        <Select label="Hotel" option="Caribe" col={12}/>
                      </div>
                  </div>
              </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
  render(<ModalAccessHotels />);