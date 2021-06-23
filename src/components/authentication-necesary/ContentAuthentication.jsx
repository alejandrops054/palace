/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/

import React from 'react'
import { Card, Col, Row, Form, FormGroup, Input, Label, Button} from 'reactstrap';


const ContentAuthentication = () =>{
    return(
        <>
            <Card>
            <div style={{fontSize:'7rem', textAlign:'center', color:'#66A3EC' }}><i className="fas fa-lock"></i></div>
            <Form>
                <p>The operation that was trying to do requieres permission. Please</p>
                <h1>CLB_OR_ASM</h1>
                <p>Permitir la asignacion a una afili.cnx</p>
                <h6>Executive Assignment Home</h6>
                <Row>
                    <Col md={12}>
                        <Label for="userName">User Name</Label>
                        <Input type="text" name="name" id='userName'/>
                    </Col>
                </Row>
                <br/>
                <Row>
                    <Col md={6}>
                        <Label for="sendNote">
                            <Input type="checkbox" name="check" id="sendNote"/>{' '}
                        Send note</Label>
                    </Col>
                </Row>
                <br/>
                <Row>
                    <Col md={12}>
                        <Label for="password">Password</Label>
                        <Input type="password" name="password" id="password"/>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <Label for="level">Level</Label>
                        <Input type='select'/>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <Label for="authorized">Authorized by</Label>
                        <Input type='select'/>
                    </Col>
                </Row>
                <br/>
                <Row>
                    <Col md={12}>
                        <Label for="description">Description</Label>
                        <Input type='textarea' name='text'/>
                    </Col>
                </Row>
                <br/>
                <Row md={5} >
                    <Col lg='6'></Col>
                    <Col lg='6'>
                            <Button color="secondary" size="lg">Cancel</Button>
                            {'  '}
                            {'  '}
                            <Button color="primary" size="lg">Authenticate</Button>
                    </Col>
                </Row>
            </Form>
            </Card>
        </>
    )
}

export default ContentAuthentication