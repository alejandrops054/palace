import React, {useState} from 'react'
import { Modal, ModalBody, Form, Card, Input, Label, Row, Col } from 'reactstrap'
import { Button } from '../index'
import Table from 'rc-table';


const columns = [
    {
      title: 'Order',
      dataIndex: 'order',
      key: 'order',
      width: 130,
    },
    {
      title: 'Field name',
      dataIndex: 'field',
      key: 'field',
      width: 130,
    },
    {
      title: 'Original',
      dataIndex: 'original',
      key: 'original',
      width:130,
    },
    {
      title: 'Change',
      dataIndex: 'change',
      key: 'change',
      width: 130,
    }
  ];
  
  const data = [
  
  ];


const RoomTypeAccesDetail = () =>{

    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    return(
        <>
            <Button col={3} width='100%' typebootstrap="secondary" type='button' title='Detail' onClick={toggle}/>
            <Modal isOpen={modal} toggle={toggle} size='lg'>
                <Card>
                    <h2>Member Room Types Access Details</h2>
                    <Form>
                        <Row>
                            <Col lg='4'>
                                <Label>User</Label>
                                <Input type='text'/>
                            </Col>
                            <Col lg='4'>
                                <Label>Action</Label>
                                <Input type='text'/>
                            </Col>
                            <Col lg='4'>
                                <Label>Date / Time</Label>
                                <Input type='text'/>
                            </Col>
                        </Row>
                        <br/>
                        <Row>
                            <Col lg='3'>
                                <Label>File name</Label>
                                <Input type='text'/>
                            </Col>
                            <Col lg='3'>
                                <Label>Value</Label>
                                <Input type='date'/>
                            </Col>
                            <Col lg='3'></Col>
                            <Col lg='3'>
                                <br/>
                                <Button
                                    col={12}
                                    width="100%"
                                    icon="fas fa-search"
                                    typebootstrap="primary"
                                    type="button"
                                />
                            </Col>
                        </Row>
                        <br/>
                        <br/>
                        <Row>
                            <Table columns={columns} data={data}/>
                        </Row>
                        <br/>
                        <br/>
                        <Row md={5}>
                            <Col lg="9"></Col>
                        </Row>
                    </Form>
                </Card>
            </Modal>
        </>
    )
}

export default RoomTypeAccesDetail