import React from 'react'
import { Button, Row, Input, Label, Col, Form, FormGroup, Card, CardBody } from 'reactstrap'
import Table from "rc-table";


const StockSaleRoom = () =>{
    const columns = [
        {
            title: 'Id',
            dataIndex: 'Id',
            key: '1',
            //    render: () => <Checkbox  value label col/>,
            width: 180,
            align: 'center'
        }, {
            title: 'Stock Origin',
            dataIndex: 'StockOrigin',
            key: '2',
            width: 180,
            align: 'center'
        }, {
            title: 'Stock Type',
            dataIndex: 'StockType',
            key: '3',
            width: 180,
            align: 'center'
        }, {
            title:'Unit',
            dataIndex:'Unit',
            key:'4',
            width:180,
            align:'center'
        }, {
            title:'Month',
            dataIndex:'Month',
            key:'5',
            width:180,
            align:'center'
        }, {
            title:'Stock',
            dataIndex:'Stock',
            key:'6',
            width:180,
            align:'center'
        }, {
            title:'Balance',
            dataIndex:'Blanace',
            key:'7',
            width:180,
            align:'center'
        }, {
            title:'Provision',
            dataIndex:'Provision',
            key:'8',
            width:180,
            align:'center'
        }
    ]

    const data = [
        {
            Id: '',
            StockOrigin: '',
            StockType:'',
            Unit:'',
            Month:'',
            Stock:'',
            Balance:'',
            Provision:'',

        },   
    ];

    return (
        <>
        <Card>
            <CardBody>
                <h1>Stock Sale Room</h1>
                <Form>
                    <Row>
                        <Col md={3}>
                            <Label>Project</Label>
                            <Input type='select' style={{width:'60%'}}/>
                        </Col>
                        <Col md={3}>
                            <Label>Office</Label>
                            <Input type='select' style={{width:'60%'}}/>
                        </Col>
                        <Col md={4} style={{paddingTop:'2%'}}>
                            <Button color="primary">Apply filtler</Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={3}>
                            <Label>Type</Label>
                            <Input type='select' style={{width:'60%'}}/>
                        </Col>
                        <Col md={3}>
                            <Label>Unit</Label>
                            <Input type='select' style={{width:'60%'}}/>
                        </Col>
                        <Col md={4} style={{paddingTop:'2%'}}>
                            <Button color="primary">Clear filtler</Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={3}>
                            <Label>Month</Label>
                            <Input type='select' style={{width:'40%'}}/>
                        </Col>
                        <Col md={3}>
                            <Label>Year</Label>
                            <Input type='select' style={{width:'40%'}}/>
                        </Col>
                    </Row>
                    <Table className="table" id="resume-table"
                        columns={columns}
                        data={data}/>
                    <FormGroup>
                        <Col sm={{ size: 10, offset: 10 }}>
                            <Button color="primary"><i className="fas fa-sync-alt"/>{' '}Refresh</Button>{' '}
                            <Button color='primary'><i className="fas fa-times"/>{' '}Close</Button>
                        </Col>
                    </FormGroup>
                </Form>
            </CardBody>
        </Card>
        </>
    )
}

export default StockSaleRoom