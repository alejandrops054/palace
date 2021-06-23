/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/
import { React, useState } from 'react';
import Modal from 'react-bootstrap/Modal'
import RoomTypesAccess from './RoomTypesAccess'
import { Input, Button } from '../index'
import { Row, Col, Card } from 'reactstrap';
import RoomTypeAccesLog from './RoomTypeAccesLog';


const ModalPrueba = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Input
        icon="fas fa-bed"
        type="select"
        label="Access"
        placeholder=""
        col={9}
        name="profileid"
        onClick={handleShow}
      />

      <Modal show={show} onHide={handleClose} size="xl" aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container">
            <div className="col-md-12">
              <RoomTypesAccess />
            </div>
          </div>
        </Modal.Body>
        <Card>
          <Row md={5}>
            <Col lg={6}>
              <RoomTypeAccesLog/>
            </Col>
            <Button
              icon="fas fa-times"
              typebootstrap="secondary"
              width='100%'
              type="button"
              col={2}
              onClick={handleClose}
            />
            <Button
              icon="fas fa-check"
              typebootstrap="primary "
              type="button"
              width='100%'
              col={2}
              onClick={handleClose}
            />
          </Row>
        </Card>
      </Modal>
    </>
  )
}

export default ModalPrueba