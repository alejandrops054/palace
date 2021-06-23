import React, { useState } from 'react'
import { Modal, Card, Row, Col } from 'reactstrap'
import { Button } from '../index';
import SpecialGroupTab1 from './SpecialGroupTab1'
import SpecialGroupTab2 from './SpecialGroupTab2'
 
const SpecialGroup = () =>{

    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    return(
        <>
        <Button title='Special Group' col='4'  typebootstrap='secondary'  type='button' onClick={toggle}/>
        <Modal isOpen={modal} toggle={toggle} size='lg'>
            <Card>
                <h1>Member Room Types Access Special Groups</h1>
                <Row>
                    <Col lg='4'>
                        <SpecialGroupTab1/>
                    </Col>
                    <Col lg='8'>
                        <SpecialGroupTab2/>
                    </Col>
                </Row>
            </Card>
        </Modal>
        </>
    )
}

export default SpecialGroup