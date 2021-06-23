import React, { useState } from 'react';
import { Modal, ModalHeader, ModalBody, Button, FormGroup, Label, Input, Row, Col } from 'reactstrap';

const AddAccessModal = () => {

    const options = ['Moon Palace Punta Cana', 'Moon Palace Punta Cana #2', 'Moon Palace Punta Cana #3'];

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    return (
        <div>
            <Button color="danger" onClick={toggle}>Boton</Button>

            <Modal isOpen={modal} toggle={toggle} >
                <ModalHeader toggle={toggle}>Add Access Golf Courses</ModalHeader>
                <ModalBody>
                    <FormGroup>
                        <Row className="align-middle">
                            <Col xs='3'>
                                <Label for="name">Name: </Label>
                                <Input type="select" name="select" id="name" width='75' >
                                    {options.map((e) =>(
                                        <option key={e}>{ e }</option>
                                    ))}
                                </Input>
                            </Col>
                        </Row>
                    </FormGroup>

                    <div className='d-flex justify-content-around'>
                        <Button color="primary">Ok</Button>
                        <Button color="secondary" >Cancel</Button>
                    </div>
                </ModalBody>
            </Modal>
        </div>
    );
}

export default AddAccessModal;