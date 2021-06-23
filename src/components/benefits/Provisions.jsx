/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/
import React from 'react'
import { SimpleTable, Checkbox,Button } from '../index';
const Provisions=()=> {
    const columnas = [
        {
            title: <Checkbox />,
            dataIndex: '',
            key: '',
            render: () => <Checkbox />,
            width: '15%',
        },
        {
            title: 'Type',
            dataIndex: 'Type',
            key: 'Type',
            width: '15%',
        },
        {
            title: 'Name',
            dataIndex: 'Name',
            key: 'Name',
            width: '15%',
        },
        {
            title: 'Folio',
            dataIndex: 'Folio',
            key: 'Folio',
            width: '15%',
        },
        {
            title: 'Cost',
            dataIndex: 'Cost',
            key: 'Cost',
            width: '15%',
        },
        {
            title: 'Sale date',
            dataIndex: 'Sale',
            key: 'Sale',
            width: '15%',
        },
        {
            title: 'Expiracion date',
            dataIndex: 'Expiracion',
            key: 'Expiracion',
            width: '20%',
        },
        {
            title: <Button icon='fas fa-ellipsis-v' typebootstrap='link' type='button' />,
            dataIndex: 'Status',
            key: 'Status',
            width: 50,
            render: () => <Button icon='fas fa-ellipsis-v' typebootstrap='link' type='button' />
          },
    ];
    const datas = [
        { Type: 1, Name: "jon doe", Folio: 6712, Cost: "$1234", Sale: Date.now(), Expiracion: Date.now() },
        { Type: 1, Name: "jon doe", Folio: 6712, Cost: "$1234", Sale: Date.now(), Expiracion: Date.now() },
        { Type: 1, Name: "jon doe", Folio: 6712, Cost: "$1234", Sale: Date.now(), Expiracion: Date.now() },
    ];
    return (
        <div>
            <div className="row mb-1">
                <div className="d-flex justify-content-end">
                    <button id="consult" className="btn btn-link" type="button"><i className="fas fa-share"></i></button>
                    <button id="consult" className="btn btn-link main" type="button"><i className="fas fa-plus"></i></button>
                </div>
            </div>
            
             <div className="table-responsive-lg ">
                <SimpleTable columns={columnas} data={datas} type="table" />
            </div>
        </div>
    )
}

export default Provisions