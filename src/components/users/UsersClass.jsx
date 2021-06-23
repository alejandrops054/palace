import React from 'react'
import { Button, Row, Input, Label, Col, Form, FormGroup } from 'reactstrap'
import Table from "rc-table";




const UsersClass = () =>{
    const columns = [
        {
            title: 'Code',
            dataIndex: 'Code',
            key: '1',
            //    render: () => <Checkbox  value label col/>,
            width: 180,
            align: 'center'
        }, {
            title: 'Description',
            dataIndex: 'Description',
            key: '2',
            width: 180,
            align: 'center'
        }, {
            title: 'System',
            dataIndex: 'System',
            key: '3',
            width: 180,
            align: 'center'
        }
    ]

    const data = [
        {
            Code: 'CARTERA-CBK',
            Description: 'CARTERA CHANGE BANKS',
            System:'CARTERA OF CHANGES BANKS',
        }, 
        
    ];

    return(
        <>
            <h1>Users Class</h1>
            <Form>
                <Row>
                    <Col md={6}>
                        <Label>System</Label>
                        <Input type='select' style={{width:'60%'}}/>
                    </Col>
                    <Col md={6} style={{paddingTop:'2%'}}>
                        <Button color="primary">Apply filtler</Button>
                    </Col>
                </Row>
                <Row>
                    <Col md={6}>
                        <Label>Code</Label>
                        <Input type='select' style={{width:'60%'}}/>
                    </Col>
                    <Col md={6} style={{paddingTop:'2%'}}>
                        <Button color="primary">Clear filtler</Button>
                    </Col>
                </Row>
                <Label>Description</Label>
                <Input type='text' style={{width:'60%'}}/>
                <Label>Override</Label>
                <Input type='select' style={{width:'60%'}}/>
                <FormGroup>
                <Table className="table" id="resume-table"
                        columns={columns}
                        data={data}/>
                </FormGroup>
            </Form>
        </>
    )
}

export default UsersClass