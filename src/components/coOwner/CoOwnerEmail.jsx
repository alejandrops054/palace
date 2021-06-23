/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/

import React, { useState } from "react";
import {
    Row,
    Col
} from "reactstrap";
import { Input, Button } from "../index";
import { useSelector, useDispatch } from "react-redux";
import { addEmailTableAction, deleteEmailCAction } from "../../redux2/actions/memberActions";

//Mensajes JSON
import LanguagesJSON from '../json/LanguagesEsMx.json'
import DataTable from 'react-data-table-component';

const CoOwnerEmail = () => {
    const dispatch = useDispatch();
    const [emailinput, setemail] = useState("");
    const [emailconfirm, setinputemail] = useState("");

    const emailData = useSelector((state) => state.member.Email.email);
    // const tabledata = useSelector((state) => state.email.emaildataget);
    // const agregarEmail = (email) => dispatch(postEmailAction(email));

    const onDelete = (keydeleteemailco) => {
        //dispatch(deleteEmailAction(key.emailconfirm))
        dispatch(deleteEmailCAction(keydeleteemailco))
    };

    const handleInputChange = (e) => {
        setemail(e.target.value);
    };
    const handleInputChangeEmailC = (e) => {
        setinputemail(e.target.value);
    };
    let validacionemail = true;
    let dataet = {};
    const onAdd = () => {
        if (emailData.length > 0) {
            emailData.map((e) => {
                if (e.email === emailinput) {
                    validacionemail = false;
                }
            });
        }
        if (emailinput.length > 0 && emailconfirm.length > 0) {

            dataet = {
                recnum: emailinput,
                email: emailinput,
            };

            if (emailinput === emailconfirm && validacionemail) {
                validacionemail = true;
                setinputemail('')
                setemail('')
                dispatch(addEmailTableAction(dataet));
                //agregarEmail(emaildata1);
            }
        }

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
                    // <p className="text-warning">No se puede agregar el mismo correo</p>

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
                                data={emailData}
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
