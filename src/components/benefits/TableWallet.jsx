/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/
import React from 'react';
import { SimpleTable, Button } from '../index'
import { Card, CardBody, Row, Col } from 'reactstrap';
import { ModalReactstrap } from '..'
import ModalElectronicWallet from '../electronic-wallet/ModalElectronicWallet'
import FormWallet from './FormWallet'
const TableWallet = () => {
    const columns = [

        {
            title: 'Product',
            dataIndex: 'product',
            key: 'product',
            width: "7%",
        },
        {
            title: 'Description',
            dataIndex: 'description',
            key: 'description',
            width: "7%",
        },
        {
            title: 'Changes',
            dataIndex: 'changes',
            key: 'changes',
            width: "7%",
        },
        {
            title: 'Credits',
            dataIndex: 'credits',
            key: 'credits',
            width: "7%",
        },
        {
            title: 'Balance',
            dataIndex: 'balance',
            key: 'balance',
            width: "7%",
        },
        {
            title: 'Log',
            dataIndex: 'log',
            key: 'log',
            width: "7%",
        },
        {
            title: 'Log Details',
            dataIndex: 'logdetails',
            key: 'logdetails',
            width: "7%",
        },
    ];
    const data = [
        { product: '', description: '', changes: '', credits: '', balance: '', log: '', logdetails: '' },
        { product: '', description: '', changes: '', credits: '', balance: '', log: '', logdetails: '' },
        { product: '', description: '', changes: '', credits: '', balance: '', log: '', logdetails: '' },
        { product: '', description: '', changes: '', credits: '', balance: '', log: '', logdetails: '' },
    ];
    return (
        <Card>
            <CardBody>
                <Row>
                    <Col lg="12" className=" d-flex justify-content-end tables">
                        <i className="fas fa-sign-in-alt mr-1 mt-2"></i>
                        <Col lg={{ size: 1 }} md={{ size: 1 }}>
                            <ModalReactstrap component={FormWallet} title="Electronic Wallet" />
                        </Col>
                    </Col>
                </Row>
                <Row>
                    <SimpleTable columns={columns} data={data} type="table" style={{ width: 120 }} />
                </Row>
            </CardBody>
        </Card>
    );
}
export default TableWallet;