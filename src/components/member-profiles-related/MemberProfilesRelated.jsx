/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/

import React from "react";
import { Label, SimpleTable, Select, Button } from "../index";
const MemberProfilesRelated = () => {
    const columnas = [
        {
            title: 'Id',
            dataIndex: 'id',
            key: 'id',
            width: "12.5%",
        },
        {
            title: 'Company',
            dataIndex: 'company',
            key: 'company',
            width: "12.5%",
        },
        {
            title: 'Application',
            dataIndex: 'application',
            key: 'application',
            width: "12.5%",
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            width: "12.5%",
        },
        {
            title: 'Profile Id',
            dataIndex: 'profileid',
            key: 'profileid',
            width: "12.5%",
        },
        {
            title: 'Id Relation Club',
            dataIndex: 'idrelationclub',
            key: 'idrelationclub',
            width: "12.5%",
        },
        {
            title: 'Relationship',
            dataIndex: 'relationship',
            key: 'relationship',
            width: "12.5%",
            render: () => <Select col={6} option="Owner" />,
        },
        {
            title: 'Id',
            dataIndex: 'id2',
            key: 'id2',
            width: "12.5%",
        },
    ];
    const datas = [
        { id: '', company: '', application: '', name: '', profileid: '', idrelationclub: '', relationship: '', id2: '' },
        { id: '', company: '', application: '', name: '', profileid: '', idrelationclub: '', relationship: '', id2: '' },
        { id: '', company: '', application: '', name: '', profileid: '', idrelationclub: '', relationship: '', id2: '' },
        { id: '', company: '', application: '', name: '', profileid: '', idrelationclub: '', relationship: '', id2: '' },
    ];
    return (
        <div className="card">
            <div className="card-body">
                <h3 className="card-title">New Deposit</h3>
                <div className="row">
                    <h5 className="card-title">Member Information</h5>
                    <Label etiqueta="Member Name: GURPREET S AULAKH" col={4} />
                    <Label etiqueta="Company: 5" col={2} />
                    <Label etiqueta="Application: 6007770" col={3} />

                    <SimpleTable columns={columnas} data={datas} type="table" />
                    <Button col='1.5' title='Delete Profile' icon='fas fa-trash' typebootstrap='link' type='button' col={3} />
                    <Label etiqueta="Profiles: 13" col={6} />
                </div>
            </div>
        </div>
    );
};

export default MemberProfilesRelated;
