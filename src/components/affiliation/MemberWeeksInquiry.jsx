/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contrato1s
Comentarios: xxxxx
*/

import React from "react";
import {
  Col,
  Input,
  Row,
  Button,
} from "reactstrap";
import Table from "rc-table";
import MemberWeeksInquiryData from './MemberWeeksInquiryData'
import MemberWeeksInquiryAmount from './MemberWeeksInquiryAmount'

const columns = [
	{
    title: 'Week/Night',
    dataIndex: 'w/n',
    key: 'w/n',
    width: 130,
	},
	{
    title: 'Purchased',
    dataIndex: 'purchased',
    key: 'purchased',
    width: 130,
	},
	{
    title: 'Earned',
    dataIndex: 'earned',
    key: 'earned',
    width: 130,
	},
	{
    title: 'Used',
    dataIndex: 'used',
    key: 'used',
    width: 130,
	},
	{
    title: 'Reserved',
    dataIndex: 'reserved',
    key: 'reserved',
    width: 130,
	},
	{
    title: 'Available',
    dataIndex: 'available',
    key: 'available',
    width: 130,
	},
	{
    title: 'Type',
    dataIndex: 'type',
    key: 'type',
    width: 130,
  },
]
function MemberWeeksInquiry() {
  return (
    <>
      
      <MemberWeeksInquiryData/>
      <MemberWeeksInquiryAmount/>
			<Row>
        <Table columns={columns}/>
      </Row>
      <Row>
        <Input type="textarea" />
      </Row>
      <Row>
        <Col lg={{ size: 2, offset: 9 }}>
          <Button>Close</Button>
        </Col>
      </Row>
    </>
  );
}

export default MemberWeeksInquiry;
