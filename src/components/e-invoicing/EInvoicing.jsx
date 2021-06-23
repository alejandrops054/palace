/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/

import React from 'react';
import { Button, Input, Select } from "../index";
import NavEInvoicing from './NavEInvoicing'
const EInvoicing = () => {

    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">E-Invoicing</h5>
                <div className="row">
                    <Input label="Application" col={4} />
                    <Select label="Company" col={4} />
                    <Select label="Source" col={4} />
                    <Input label="From" col={4} type="date" />
                    <Input label="From" col={4} type="date" />
                    <Button icon="fas fa-search" col={4} typebootstrap="primary" title="Search" />
                    <NavEInvoicing />
                </div>
            </div>
        </div>
    );
};

export default EInvoicing;
