/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/

import React from "react";
import { SimpleTable } from "../index";

const ManagementReports = () => {
    const columns = [
        {
            title: 'Report Name',
            dataIndex: 'item',
            key: 'item',
            width: "100%",
        },
    ];
    const data = [
        { item: 'Accesos de suites - Cantidad y Vigencia de Accesos' },
        { item: 'Accesos de suites' },
        { item: 'Accesos de suites' },
        { item: 'Accesos de suites' },
    ];
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">Management Reports</h5>
                <div className="row">
                    <SimpleTable columns={columns} data={data} type="table" />
                </div>
            </div>
        </div>
    );
};

export default ManagementReports;