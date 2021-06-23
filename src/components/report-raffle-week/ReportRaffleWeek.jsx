/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/

import React from "react";
import { Input, Select, Button } from "../index";

const ReportRaffleWeek = () => {
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">Management Reports</h5>
                <div className="row">
                    <Input label="Project" col={6} type="text" />
                    <Select col={6} option="PALACE ELITE" />
                    <Input label="Office" col={6} type="text" />
                    <Select col={6} option="PLAYACAR PALACE" />
                    <Input label="Folio" col={6} type="text" />
                    <Select col={6} option="" label="Language" />
                    <Button title="Print" col={3} typebootstrap="primary" type="primary" />
                    <Button title="Close" col={3} typebootstrap="primary" type="primary" />
                </div>
            </div>
        </div>
    );
};

export default ReportRaffleWeek;