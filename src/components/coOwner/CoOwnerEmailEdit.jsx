/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/

import React, { useState, useEffect } from "react";
import {
    Row,
    Col
} from "reactstrap";
import { Input, Button } from "../index";
import { useSelector, useDispatch } from "react-redux";
import { getEmailAction, addEmailTableAction, deleteEmailCAction } from "../../redux2/actions/memberActions";

import Table from "rc-table";

//Mensajes JSON
import LanguagesJSON from '../json/LanguagesEsMx.json'
import DataTable from 'react-data-table-component';

const CoOwnerEmail = () => {
    const dispatch = useDispatch();
    const [emailinput, setemail] = useState("");
    const [emailconfirm, setinputemail] = useState("");

    const emailData = useSelector((state) => state.member.Email.email);
    // const agregarEmail = (email) => dispatch(postEmailAction(email));
    // const coownereditdata = useSelector((state) => state.coowner.owneredit);
    const tabledata = useSelector((state) => state.member.Email.emaildataget);
 

    const onDelete = (key) => {
        //dispatch(deleteEmailAction(key.emailconfirm))
        dispatch(deleteEmailCAction(key.recnum))
    };

    const handleInputChange = (e) => {
        setemail(e.target.value);
    };
    const handleInputChangeEmailC = (e) => {
        setinputemail(e.target.value);
    };
    useEffect(() => {
        // Consultar microservicios method GET Email Profile
        const emailprofile = () => dispatch(getEmailAction());
        emailprofile();
    }, []);
    let dataTableEmail=[];
    if (tabledata.length > 0) {
        let tableemail = {};
        tabledata.map((e) => {
            tableemail = {
                recnum: e.Recnum,
                email: e.Email,
            };
            dataTableEmail.push(tableemail);
        });
    }
    const onAdd = () => {
        if (emailinput.length > 0 && emailconfirm.length > 0) {

            const data = {
                recnum: emailinput,
                email: emailinput,
            };
            if (emailinput !== emailconfirm) {
                console.log("El Correo electrónico no coincide");
            } else {
                // const emaildata1 = {
                //     company: "5",
                //     application: "1000049",
                //     email: emailinput,
                //     idrelacionclubprofile: "",
                //     anexoa: "",
                //     sendpromotions: "",
                //     principal: true,
                // };

                setinputemail('')
                setemail('')
                dispatch(addEmailTableAction(data));
                //agregarEmail(emaildata1);
            }
        };
    }

    const columns = [
        {
            name: "Email",
            selector: "email",
            sortable: true
        },
        {
            name: "",
            selector: "but",
            cell: row => (
                <Button
                    icon="fas fa-trash-alt"
                    typebootstrap="primary"
                    onClick={(e) => {
                        onDelete(row.recnum);
                    }}
                />
            ),
        },
    ];

    const customStyles = {
        rows: {
            style: {
                minHeight: '72px', // override the row height
            }
        },
        headCells: {
            style: {
                fontSize: '15px',
                paddingLeft: '8px', // override the cell padding for head cells
                paddingRight: '8px',
            },
        },
        cells: {
            style: {
                fontSize: '13px',
                paddingLeft: '8px', // override the cell padding for data cells
                paddingRight: '8px',
            },
        },
    };
    return (
        <>
            <br />
            <Row>
                {LanguagesJSON.map((datos) => {
                    if (emailinput !== emailconfirm) {
                        return (
                            <p className="text-warning">{datos.msgEmailsNotcoincidir}</p>
                        )
                    }

                })}
                <Col lg="12">
                    <Row className="justify-content-start">
                        <Col lg="6">
                            <Input
                                icon="fas fa-plus"
                                type="email"
                                name="email"
                                label="Email"
                                placeholder="email"
                                col={12}
                                value={emailinput}
                                onChange={handleInputChange}
                                onClick={onAdd}
                            />
                        </Col>
                        <Col lg="6">
                            <Input
                                type="email"
                                label="Email Confirm"
                                name="email_confirm"
                                placeholder="email confirm"
                                col={12}
                                value={emailconfirm}
                                onChange={handleInputChangeEmailC}
                            />

                        </Col>
                    </Row>
                </Col>
                <Col lg="12">
                    <Row>
                        <Col lg="12">
                            <DataTable
                                noHeader
                                className="table"
                                id="resume-table"
                                rowKey={() => Math.random()}
                                customStyles={customStyles}
                                columns={columns}
                                data={dataTableEmail}
                                noDataComponent=''
                                responsive
                            />
                        </Col>

                    </Row>
                </Col>
            </Row>


        </>
    );
};

export default CoOwnerEmail;
