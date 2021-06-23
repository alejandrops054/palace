/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/

import React from "react";
import { Label, TextArea, Button, Input, Select } from "../index";
import TableMemberProvisionSL from './TableMemberProvisionSL'
const MemberProvisionSL = () => {

    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">Member Provision Status Log</h5>
                <div className="row">
                    <Input label="Company" col={3} type="text" />
                    <Input label="Application" col={3} type="text" icon="fas fa-times" />
                    <Input label="Start Folio" col={3} type="text" />
                    <Input label="End Folio" col={3} type="text" />
                    <Select label="Type" col={8} />
                    <Select label="" col={4} />

                    <Button icon="" col={3} typebootstrap="primary" title="Apply filter" />
                    <Button icon="" col={3} typebootstrap="secondary" title="Clear filter" />

                    <TableMemberProvisionSL />
                </div>
            </div>
        </div>
    );
};

export default MemberProvisionSL;
