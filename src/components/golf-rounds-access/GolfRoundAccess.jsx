import React from 'react'
import {Form, Input, Row, Col, FormGroup, Label, Button } from 'reactstrap'
import Table from 'rc-table'


const GolfRoundAccess = () =>{

    const columns = [
        {
          title: 'Code',
          dataIndex: 'code',
          key: 'code',
          width: 160,
        },
        {
            title: 'Price',
            dataIndex: 'price',
            key: 'price',
            width: 160,
          },
          {
            title: 'Rounds of Golf',
            dataIndex: 'rounds',
            key: 'rounds',
            width: 160,
          },
          {
            title: 'RG access',
            dataIndex: 'rg',
            key: 'rg',
            width: 160,
          },
          {
              title:'Free Rounds of Golf',
              dataIndex:'free',
              key:'free',
              width:160,
          },
          {
              title:'Beg Date',
              dataIndex:'beg',
              key:'beg',
              width:160,
          },
          {
              title:'End Date',
              dataIndex:'end',
              key:'end',
              width:160
          },
          {
              title:'Status',
              dataIndex:'status',
              key:'status',
              width:160
          }
    ]
    return(
        <>
            <Form>
                <h1>Golf Rounds Access</h1>
                <Row>
                    <Col md={6}>
                        <Label>Currency</Label>
                        <Input type='select' style={{width:'40%'}}/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Table columns={columns}/>
                    </Col>
                </Row>
            </Form>
        </>
    )
}

export default GolfRoundAccess