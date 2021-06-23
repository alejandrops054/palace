/*Sistema Intelligence 2.0
  Módulo Contratos
  Versión 1.0
  Author: IntregraIT Contratos
  Comentarios: xxxxx
*/
import React, { useState } from 'react';
import { Button, Checkbox } from '../index'
import Table from 'rc-table';
import { Modal, ModalBody, ModalHeader } from "reactstrap";
import NewCreditCard from '../new-credit-card/NewCreditCard'
import FinancingPromesis from '../membership-input/FinancingPromesis'

const Promises = () => {
  const [open, setOpen] = useState(false)
  const toggle = () => setOpen(!open)

  const [open1, setOpen1] = useState(false)
  const toggle1 = () => setOpen1(!open1)
  const columns = [
    {
      title: <Checkbox />,
      dataIndex: 'check',
      key: '1',
      render: () => <Checkbox value label col />,
      width: 60,
      align: 'center'
    },
    {
      title: 'FinancingID',
      dataIndex: 'Financing_ID',
      key: 'Financing_ID',
      //    render: () => <Checkbox  value label col/>,
      width: 140
    },
    {
      title: 'Payment ID',
      dataIndex: 'Payment_ID',
      key: 'Payment_ID',
      width: 140

    },
    {
      title: 'Amount',
      dataIndex: 'Amount',
      key: 'Amount',
      width: 140

    }, {
      title: 'Down',
      dataIndex: 'Down',
      key: 'Down',
      width: 140

    }, {
      title: 'Amount Fee',
      dataIndex: 'Amount_Fee',
      key: 'Amount_Fee',
      width: 140

    }, {
      title: 'Date',
      dataIndex: 'Date',
      key: 'Date',
      width: 140

    }, {
      title: 'Status',
      dataIndex: 'Status',
      key: 'Status',
      width: 50

    }, {
      title: <Button icon='fas fa-ellipsis-v' typebootstrap='link' type='button' />,
      dataIndex: 'Status',
      key: 'Status',
      width: 50,
      render: () => <Button icon='fas fa-ellipsis-v' typebootstrap='link' type='button' />
    },
  ];

  const data = [{
    Financing_ID: '0',
    Payment_ID: '1',
    Amount: '$2,50.00',
    Down: '$2,50.00',
    Amount_Fee: '$0.0',
    Date: '12/25/2020',
    Status: 'Alta'
  }];

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <h7>Promisse :
                        </h7>
            <Button typebootstrap="btn btn-link main" title='$000,0000,0000.00' type='button'></Button>
          </div>
          <div className="col-md-9 d-flex justify-content-end tables">
            <Button col='1.5' title='Add promise' icon='fas fa-plus' onClick={
              () => toggle1()
            } typebootstrap='link main' type='button' />
            <Button col='1.5' title='Add credit card'
              onClick={
                () => toggle()
              }
              icon='fas fa-plus'
              typebootstrap='link'
              type='button' />
            <Button col='1.5' title='Delete credit card' icon='fas fa-trash' typebootstrap='link' type='button' />
            <Button col='1.5' title='Log' icon='fas fa-log' typebootstrap='link' type='button' />
            <Button col='1.5' title='Replace' icon='fas fa-upload' typebootstrap='link' type='button' />
          </div>
        </div>
        <div className="card-body table">
          <Table id="resume-table"
            columns={columns}
            data={data} />
        </div>
      </div>
      <Modal isOpen={open}
        toggle={toggle}
        size='md'>
        <form>
          <ModalHeader>
            New credit card
          </ModalHeader>
          <ModalBody className="p-0 ">
            <NewCreditCard />
          </ModalBody>
        </form>
      </Modal>

      <Modal isOpen={open1}
        toggle={toggle1}
        size='md'>
        <form>
          <ModalHeader>
            Financing promises
          </ModalHeader>
          <ModalBody className="p-0 ">
            <FinancingPromesis />
          </ModalBody>
        </form>
      </Modal>
    </>
  )
}

export default Promises

