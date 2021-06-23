/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/

import React, { useState, useEffect } from "react";
import { Select, Checkbox, Button, } from '../index'
import { Modal, Card, Row, Col, Form, Label, Input } from 'reactstrap'
import Table from "rc-table";
import MemberReservationRatesYA from "../members/MemberReservationRatesYA";
import { InfoMembersNoContainer } from "..";
import { useDispatch, useSelector } from 'react-redux'
import SweetAlert from 'react-bootstrap-sweetalert';

const MemberReservationRates = () => {
    const guestData = useSelector((state) => state.guestid.guestId);
    const profileIdData = useSelector((state) => state.profileid.profileId);

    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
    const [warningAlert, setWarningAlert] = useState(false);

    const col = [
        {
            title: "Order",
            dataIndex: "order",
            key: "order",
            width: 130,
        },
        {
            title: "Type Credit Card",
            dataIndex: "t-cc",
            key: "t-cc",
            width: 130,
        },
    ];
    const [profileIdTable, setProfileIdTable] = useState([])

    let setLabels = {}
    if (profileIdTable.length > 0) {
        setLabels.name = profileIdTable[0].name
        setLabels.company = profileIdTable[0].company
        setLabels.application = profileIdTable[0].application
    }
    const { name, company, application } = setLabels
    const pintaData = (profileIdData) => {
        if (profileIdData) {
            setProfileIdTable(profileIdData);
        }
    };
    useEffect(() => {
        if (guestData) {
            pintaData(profileIdData)
        }
    }, [profileIdTable, guestData,])

    /*Validaciond de la vista*/
    const validacion = (_) => {
        // let respuesta = window.confirm(``)
        // if (respuesta) {
        //     toggle()
        // }
        setWarningAlert(true);
    };
    const Logos = [
        { img1: 'images/jpg/alert01.jpg' },
        { img1: 'images/brand/systems-logos/blancos/logo-intell20.svg' }
    ]
    return (
        <>
            <SweetAlert
                custom
                customIcon={<i className="far fa-question-circle fa-6x" style={{ color: '#66A3EC', height: 110 }}></i>}
                title={`Would you like to continue?`}
                show={warningAlert}
                customButtons={
                    <>
                        <Row>
                            <Button
                                typebootstrap="secondary"
                                icon="fa fa-times"
                                col={6}
                                width={100}
                                onClick={() => setWarningAlert(false)}
                            />
                            <Button
                                typebootstrap="primary"
                                size="lg"
                                icon="fa fa-check"
                                col={6}
                                width={100}
                                onClick={() => { setWarningAlert(false); toggle(); }}
                            />
                        </Row>
                    </>
                }
            >
                The default reservation rates will be re-assigned accoirding to the new selected accesses.
            </SweetAlert>

            <Button title='Reasing Rates' col={12} typebootstrap='primary ' type='button' onClick={() => validacion()} />
            <Modal isOpen={modal} toggle={toggle} size='lg'>
                <Card>
                    <h1>Member Reservation Rates</h1>
                    <Form>
                        <h6>Member Information</h6>
                        <Row>
                            <Col lg="4">
                                <Label>Name</Label>
                                <Input type='text' value={name} disabled />
                            </Col>
                            <Col lg='4'>
                                <Label>Company</Label>
                                <Input type='text' value={company} disabled />
                            </Col>
                            <Col lg='4'>
                                <Label>Application</Label>
                                <Input type='text' value={application} disabled />
                            </Col>
                        </Row>
                        <br />
                        <Row>
                            <Col lg='6'>
                                <Table columns={col} />
                            </Col>
                            <Col lg='6'>
                                <MemberReservationRatesYA />
                            </Col>
                        </Row>
                        <Row className="justify-content-around">
                            <Col>
                                <InfoMembersNoContainer title="Reservation Rates" text="14" />
                            </Col>
                        </Row>
                        <br />
                        <Row md={5}>
                            <Col lg="6"></Col>
                            <Button
                                icon="fas fa-times"
                                typebootstrap="secondary"
                                width='100%'
                                type="button"
                                onClick={() => setModal(false)}
                            />
                            <Button
                                icon="fas fa-check"
                                typebootstrap="primary "
                                type="button"
                                width='100%'
                                onClick={() => setModal(false)}

                            />
                        </Row>
                    </Form>
                </Card>
            </Modal>
        </>
    )
}


export default MemberReservationRates