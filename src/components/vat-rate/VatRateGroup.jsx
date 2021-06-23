/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/

import Table from 'rc-table';
import Checkbox from '../ui/Checkbox';
import { Card, Row, Col, Form, Input, Label } from 'reactstrap'
import { Hr } from '../index'
import VatRateLog from './VatRateLog'
import VatRateIdentifications from './VatRateIdentifications'
import ManageIdentifications from './ManageIdentifications';


const columns = [
  {
    title: 'Select',
    dataIndex: 'select',
    key: 'select',
    width: 130,
    render: () => <Checkbox/>
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    width: 130,
  },
  {
    title: 'Relationship',
    dataIndex: 'realtion',
    key: 'realtion',
    width:130,
  },
  {
    title: 'NSS',
    dataIndex: 'nss',
    key: 'nss',
    width: 130,
  },
  {
    title: 'Nationality',
    dataIndex: 'nationality',
    key: 'nationality',
    width: 130,
  },
  {
    title: 'Tax Residence Manifest',
    dataIndex:'tax',
    key:'tax',
    width:180,
  },
  {
    title:'Mexican',
    dataIndex:'mexican',
    key:'mexican',
    width:130,
  },
  {
    title:'Foreing',
    dataIndex:'foreing',
    key:'foreing',
    width:130,

  }
];

const data = [

];



const RcTable = ({ title="", text="", icon="" }) => {
    return (
        <>
        <Row md={5}>
          <Col lg='6'></Col>
          <Col lg='6'>
            <div className="d-flex justify-content-end">
              <VatRateLog/>
              <VatRateIdentifications/>
              <ManageIdentifications/>
            </div>
          </Col>
        </Row>
        <br/>
        <br/>
        <Row>
          <h2>Owner, CoOwner, Beneficiary and Participants</h2>
        <br/>
          <Table columns={columns} />
        </Row>
        <Hr/>
        </>
    );
};

export default RcTable;