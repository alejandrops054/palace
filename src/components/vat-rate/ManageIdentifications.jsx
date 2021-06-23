import React, {useState} from 'react'
import { Modal, ModalBody, Form, Card, Input, Label, Row, Col } from 'reactstrap'
import { Button } from '../index'
import Table from 'rc-table';
import VatRateIDLog from './VatRateIDLog';

const columns = [
    {
      title: 'Selected',
      dataIndex: 'select',
      key: 'select',
      width: 130,
      render: () => <Input type='checkbox'/>
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
      width: 130,
    },
    {
      title: 'Origin',
      dataIndex: 'origin',
      key: 'origin',
      width:130,
      render:() => <Input type='select'/>
    },
    {
      title: 'Show',
      dataIndex:'show',
      key:'show',
      width:130,
      render:() => <Input type='checkbox'/>
    }
  ];

  const data = [

];


const ManageIdentifications = () =>{

    const [chargedGeographic, setChargedGeographic ]=useState(false)
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    return(
        <>
            <button id="consult" className="btn btn-link main" type="button" onClick={toggle}><i class="fas fa-id-card"></i>{' '}Manage Identifications</button>
            <Modal isOpen={modal} toggle={toggle} size='lg'>
                <Card>
                <h2>Member VAT Rate Identifications</h2>
                    <Form>
                        <Row>
                            <Table columns={columns} data={data}/>
                        </Row>
                        <br/>
                        <br/>
                        <Row>
                            <Col lg='6'>
                                <VatRateIDLog/>
                            </Col>
                        </Row>
                        <Row md={5}>
                            <Col lg="6"></Col>
                                <Button
                                    icon="fas fa-times"
                                    typebootstrap="secondary"
                                    width='100%'
                                    type="button"    
                                />
                                <Button
                                    icon="fas fa-check"
                                    typebootstrap="primary "
                                    type="button"
                                    width='100%'
                                />
                        </Row>
                    </Form>
                </Card>
            </Modal>
        </>
    )
}

export default ManageIdentifications