/*  Sistema Intelligence 2.0
    Módulo Contratos
    Versión 1.0
    Author: IntregraIT Contratos
    Comentarios: xxxxx
*/
import React from 'react'
import Table from "rc-table";
import {InfoMembers} from '../index'

const ManagaParticipants = () => {

    const columns = [
        {
            title: 'ID',
            dataIndex: 'ID',
            key: '1',
            //    render: () => <Checkbox  value label col/>,
            width: 180,
            align: 'center'
        }, {
            title: 'Name',
            dataIndex: 'Name',
            key: '2',
            width: 180,
            align: 'center'
        }, {
            title: 'Status',
            dataIndex: 'Status',
            key: '3',
            width: 180,
            align: 'center'
        }, {
            title: 'NSS',
            dataIndex: 'NSS',
            key: '3',
            width: 180,
            align: 'center'
        },
    ]

    const data = [
        {
            ID: '996',
            Name: 'ENRIQUE PEÑA NIETO',
            Status: 'A',
            NSS: ''
        }, {
            ID: '996',
            Name: 'ENRIQUE PEÑA NIETO',
            Status: 'A',
            NSS: ''
        }, {
            ID: '996',
            Name: 'ENRIQUE PEÑA NIETO',
            Status: 'A',
            NSS: ''
        },
    ];

    return (
        <div>
            <div className="card">
                <div className="card-header">
                    <div className="card-title">
                        <h3>Manage Participants</h3>
                        <p>Member Information</p>
                    </div>
                </div>
                <div className="card-body">

                    <div className="row">
                        <div className="col-lg-4 d-flex">
                            <InfoMembers title='Company' text='7'/>
                            <InfoMembers title='Office' text='3'/>
                        </div>
                        <div className="col-lg-4 d-flex">
                            <InfoMembers title='Application' text='4050478'/>
                            <InfoMembers title='SUNRISE'/>
                        </div>
                        <div className="col-lg-4 d-flex">
                            <InfoMembers title='Member Name' text='OMAR PEREZ MARTINEZ'/>
                            <InfoMembers title='Project' text='Palace Elite'/>
                        </div>
                    </div>
                    <hr/>

                    <Table className="table" id="resume-table"
                        columns={columns}
                        data={data}/>

                </div>
            </div>
        </div>
    )
}

export default ManagaParticipants

