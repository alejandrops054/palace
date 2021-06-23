/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: FALTA MOSTRAR MAS COLUMNAS DE LA TABLA
*/

import React from 'react'
import Table from "rc-table"
import {Button, ToggleCheck, Input} from '../index'

const NotesMenu = () => {
    const columns = [
        { title: 'Note', dataIndex: 'Note', key: '1', width: 350},
        { title: 'By', dataIndex: 'By', key: '2', width: 200 },
    ]
    const data = [
        {Note:'VIRTUAL RSV FOLIO:ICPL4 OUT-H AFFILIATE', By: 'WT'},
        {Note:'VIRTUAL RSV FOLIO:ICPL4 OUT-H AFFILIATE', By: 'WT'},
        {Note:'VIRTUAL RSV FOLIO:ICPL4 OUT-H AFFILIATE', By: 'WT'},
        {Note:'VIRTUAL RSV FOLIO:ICPL4 OUT-H AFFILIATE', By: 'WT'},
        {Note:'VIRTUAL RSV FOLIO:ICPL4 OUT-H AFFILIATE', By: 'WT'},
        {Note:'VIRTUAL RSV FOLIO:ICPL4 OUT-H AFFILIATE', By: 'WT'},
    ]
    return (
        <div className="container">
             <div className="pt-3 ">
                <Table className='table' id="resume-table" columns={columns} data={data} />
                </div>
                <div className="row">
                    <div className="d-flex col-lg-6">
                        <Button
                        title='Manage Notes'
                        col="6"
                        typebootstrap="primary"
                        type="button"
                        />
                        <Button
                        title='Manage Notes'
                        col="6"
                        typebootstrap="primary"
                        type="button"
                        />
                    </div>
                </div>
                <div className="row pt-4">
                    <div className="col-lg-3">
                        <ToggleCheck label="Transfer"/>
                    </div>
                    <div className="col-lg-3">
                        <Input type="text" label="Num Pol" col={12} />
                    </div>
                </div>
        </div>
    )
}

export default NotesMenu
