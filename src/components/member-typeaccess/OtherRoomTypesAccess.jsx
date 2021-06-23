import React from 'react'
import Table from 'rc-table'

import { Form, Row, Col, Label, Input} from 'reactstrap';


const OtherRoomTypesAccess = () => {
    const columns = [
        {
           title:  'Code',
           dataIndex: 'Code',
           key: 'Code',
           width: 160,
           align: 'center'
        },
        {
          title: 'Description',
          dataIndex: 'Description',
          key: 'Description',
          width: 160,
          
        },
        {
          title: 'Total Access',
          dataIndex: 'Total_Access',
          key: 'Total_Access',
          width:160,
          
        },
        {
          title: 'Authorized Access',
          dataIndex: 'Authorized_Access',
          key: 'Authorized_Access',
          width: 160,
         
        },
        {
          title: 'Validity',
          dataIndex: 'Validity',
          key: 'Validity',
          width: 160,
          
        },
      ];
      
const data = [
        { Code: '2021', Description: '0', Total_Access: '0', Authorized_Access:'0', Validity:'0'},
        { Code: '2021', Description: '0', Total_Access: '0', Authorized_Access:'0', Validity:'0'},
        { Code: '2021', Description: '0', Total_Access: '0', Authorized_Access:'0', Validity:'0'},
        { Code: '2021', Description: '0', Total_Access: '0', Authorized_Access:'0', Validity:'0'},
      ];
    return (
        <div className="m-3">
          <Form>
            <Row>
              <Col lg='6'>
                <Label>List Hotels</Label>
                <Input type='select'/>
              </Col>
            </Row>
          </Form>
          <br/>
          <Table className="table"  id="resume-table" columns={columns} data={data}  />
        </div>
    )
}



export default OtherRoomTypesAccess
