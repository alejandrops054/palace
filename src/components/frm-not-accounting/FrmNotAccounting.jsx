/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/

import React from 'react';
import { SimpleTable } from "../index";
const FrmNotAccounting = () => {
    const columns = [
        {
            title: 'provision',
            dataIndex: 'provision',
            key: 'provision',
            width: "1%",
        },
        {
            title: 'Application',
            dataIndex: 'application',
            key: 'application',
            width: "1%",
        },
        {
            title: 'Folio',
            dataIndex: 'folio',
            key: 'folio',
            width: "1%",
        },
        {
            title: 'Date',
            dataIndex: 'date',
            key: 'date',
            width: "1%",
        },
        {
            title: 'Port Folio',
            dataIndex: 'portfolio',
            key: 'portfolio',
            width: "1%",
        },
        
    ];
    const data = [
        {provision:'', application: '',folio:'', date:'', portfolio:''},

    ];
    return (
        <div className="card">
            <div className="card-body">
                <SimpleTable columns={columns} data={data} type="table" />
            </div>
        </div>
    );
};

export default FrmNotAccounting;
