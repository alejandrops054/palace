import React from 'react'
import { Card, CardBody, CardTitle, Container, Row, Col,  } from 'reactstrap'
import {ToggleCheck} from '../index'

const ColorEdit = () => {
    return(
        <Container>
            <CardTitle tag='h1'>
                <i className="fas fa-palette"></i>{' '}Color Editor
            </CardTitle>
            <Row>
                <Col md={6}>
                    <CardBody> 
                        <CardTitle tag='h1'>
                            White mode
                        </CardTitle>
                        <ToggleCheck label='' numToggle={1}/>
                        <Card style={{backgroundColor: '#F9F3EC', boxShadow:' 0 12px 25px rgba(247,141,30,.25)', width:'220px', alingItems:'center', marginTop:'10%'}}>
                            <Row>
                                <Col md={6}>
                                    <Card style={{background:'#ffffff', height:'18vh', width:'6vw'}}/>
                                </Col>
                                <Col md={6}>
                                    <Card style={{background:'#E87E0E', width:'5vw'}}/>
                                    <Card style={{background:'#233586', width:'5vw'}}/>
                                    <Card style={{background:'#FBF9F7', width:'5vw'}}/>
                                </Col>
                            </Row>
                        </Card>
                    </CardBody>
                </Col>
                <Col md={6}>
                    <CardBody> 
                        <CardTitle tag='h1'>
                            Dark mode
                        </CardTitle>
                        <ToggleCheck label='' numToggle={2}/>
                        <Card className='customer-data' style={{marginTop:'10%'}}>
                            <Row>
                                <Col md={6}>
                                    <Card style={{background:'#ffffff', height:'18vh', width:'6vw', alingItems:'center'}}/>
                                </Col>
                                <Col md={6}>
                                    <Card style={{background:'#233586', width:'5vw'}}/>
                                    <Card style={{background:'#66A3EC', width:'5vw'}}/>
                                    <Card style={{background:'#F8FBFF', width:'5vw'}}/>
                                </Col>
                            </Row>
                        </Card>
                    </CardBody>
                </Col>
            </Row>
        </Container>
    )
}

export default ColorEdit