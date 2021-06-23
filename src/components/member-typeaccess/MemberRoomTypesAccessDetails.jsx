import React from 'react'
import Table from 'rc-table';

import { Input, Col, Row, Form, Label } from 'reactstrap'

const MemberRoomTypesAccessDetails = () => {
    

    const columns = [
        {
           title:  'Year',
           dataIndex: 'Year',
           key: 'Year',
           width: 130,
           align: 'center'
        },
        {
          title: 'Purchased',
          dataIndex: 'Purchased',
          key: 'Purchased',
          width: 130,
          
        },
        {
          title: 'Reserved',
          dataIndex: 'Reserved',
          key: 'Reserved',
          width:130,
          
        },
        {
          title: 'Used',
          dataIndex: 'Used',
          key: 'Used',
          width: 130,
         
        },
        {
          title: 'Available',
          dataIndex: 'Available',
          key: 'Available',
          width: 130,
          
        },
        {
            title: 'Date From',
            dataIndex: 'Date_From',
            key: 'Date_From',
            width: 130,
            
          },
          {
            title:  'Date To',
            dataIndex: 'Date_To',
            key: 'Date_To',
            width: 130,
         },
        
      ];
      
const data = [
        { Year: '2021', Purchased: '0', Reserved: '0',Used:'0', Available:'0', Date_From:'1/5/2020', Date_To:'1/5/2021'},
        { Year: '2021', Purchased: '0', Reserved: '0',Used:'0', Available:'0', Date_From:'1/5/2020', Date_To:'1/5/2021'},
        { Year: '2021', Purchased: '0', Reserved: '0',Used:'0', Available:'0', Date_From:'1/5/2020', Date_To:'1/5/2021'},
        { Year: '2021', Purchased: '0', Reserved: '0',Used:'0', Available:'0', Date_From:'1/5/2020', Date_To:'1/5/2021'},
      ];

    return (
        <div className="mt-3">
            <Form>
              <Row>
                <Col lg='6'>
                  <Label>Code</Label>
                  <Input type='text'/>
                </Col>
                <Col lg='6'>
                  <Label>Description</Label>
                  <Input type='text'/>
                </Col>
              </Row>
            </Form>
            <br/>
            <Table className="table"  id="resume-table" columns={columns} data={data}  />
        </div>
    )
}


export default MemberRoomTypesAccessDetails
