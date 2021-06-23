import React from 'react'
import {Container, Row, Col, Button} from 'reactstrap';
import Table from 'rc-table'

const columns = [
    {
      title: 'Code',
      dataIndex: 'code',
      key: 'code',
      width: 130,
    },
    {
        title: 'Description',
        dataIndex: 'description',
        key: 'description',
        width: 130,
      },
      {
        title: 'Mexican',
        dataIndex: 'mexican',
        key: 'mexican',
        width: 130,
      },
      {
        title: 'Status',
        dataIndex: 'status',
        key: 'status',
        width: 130,
      },
]
function Companies() {
    return (
        <Container fluid>
            <h2>Companies</h2>
            <Row>
                <Col>
                    <Button>Log</Button>
                    <Button>Add</Button>
                    <Button>Properties</Button>
                    <Button>Refresh</Button>
                    
                </Col>
            </Row>
            <Row className="mt-3">

            <Table columns={columns}/>

            </Row>
            <Row className="mt-2">
                <Col>
                    <Button>Close</Button>
                </Col>
            </Row>
        </Container>
    )
}

export default Companies
