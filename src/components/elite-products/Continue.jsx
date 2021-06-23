/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/

import React from 'react'
import { Card, CardBody, CardTitle, Row, Col, Button  } from 'reactstrap'


const Continue = () =>{
    return(
        <div>
            <Card>
                <div style={{fontSize:'7rem', textAlign:'center', color:'#66A3EC'}}><i class="far fa-question-circle"></i></div>
                <CardBody>
                    <CardTitle tag='h1' className="text-center">Do you wish to continue?</CardTitle>
                    <h2>It is not allowed to grant the option of ' Free unlimited golf ' at any level of membership</h2>
                    <h3>Keep in contact with:</h3>
                
                </CardBody>
                <Row md={5}>
                            <Col lg="6"></Col>
                            <Button
                                variant="secondary"
                                size="lg"
                                className="fa fa-times"
                            ></Button>
                            <br/>
                            <Button
                                variant="primary"
                                size="lg"
                                className="fa fa-check"
                            ></Button>
                        </Row>
            </Card>
        </div>
    )
}

export default Continue