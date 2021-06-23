import React, {useState} from 'react'
import { Modal, ModalBody, Form, Card, Input, Label, Row, Col } from 'reactstrap'
import { Button } from '../index'
import Table from 'rc-table';
import CreditCardDetail from './CreditCardDetail';


const columns = [
    {
        title: 'ID',
        dataIndex: 'id',
        key: 'id',
        width: 130,
      },
    {
      title: 'User',
      dataIndex: 'user',
      key: 'user',
      width: 130,
    },
    {
      title: 'Date / Time',
      dataIndex: 'dt',
      key: 'dt',
      width: 130,
    },
    {
      title: 'Module',
      dataIndex: 'module',
      key: 'module',
      width:130,
    },
    {
      title: 'Action original',
      dataIndex: 'action',
      key: 'action',
      width: 130,
    },
    {
      title: 'Changes',
      dataIndex: 'changes',
      key: 'changes',
      width: 130,
    },
    {
      title: 'Details',
      dataIndex:'details',
      key:'details',
      width:130,
      render:() => <Button icon='fas fa-info-circle'/>
    }
  ];
  
  const data = [
    
  ];

const CreditCardLog = () =>{

const [modal, setModal] = useState(false);
const toggle = () => setModal(!modal);
    return(
        <>
            <button id="consult" className="btn btn-link" type="button" onClick={toggle}><i class="fas fa-book"></i>{' '}Log</button>
            <Modal isOpen={modal} toggle={toggle} size='lg'>
                <Card>
                    <h2>Credit card Log</h2>
                    <Form>
                        <Row>
                            <Col lg='6'>
                                <Label>User</Label>
                                <Input type='text'/>
                            </Col>
                            <Col lg='6'>
                                <Label>Field name</Label>
                                <Input type='text'/>
                            </Col>
                        </Row>
                        <br/>
                        <Row>
                            <Col lg='3'>
                                <Label>Value</Label>
                                <Input type='text'/>
                            </Col>
                            <Col lg='3'>
                                <Label>Date from</Label>
                                <Input type='date'/>
                            </Col>
                            <Col lg='3'>
                                <Label>To</Label>
                                <Input type='date'/>
                            </Col>
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
                            <CreditCardDetail/>
                        </Row>
                    </Form>
                </Card>
            </Modal>

        </>
    )
}

export default CreditCardLog