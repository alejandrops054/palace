/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/
import {React, useState} from 'react';
import {Input, Checkbox} from "../index";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const AssignmentOfDiamindClassifications = ()=>{

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    return(
      <>
      <Button variant="primary" onClick={handleShow}>
      Assignment Of Diamind Classifications
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Assignment Of Diamind Classifications</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                  <Checkbox name="checkRow3" label="By Application" />
                    <Input
                      type="text"
                      label=""
                      placeholder=""
                      col={12}
                    />
                    </div>
                    <div className="col-md-6">
                        <Checkbox name="checkRow3" label="All" />
                        <br/>
                        <Checkbox name="checkRow3" label="Clean before" />
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
    )
}

export default AssignmentOfDiamindClassifications