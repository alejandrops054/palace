/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/

import React from "react";
import { Input, Select, Button } from "../index";
const ACHPayment = () => {

    return (
        <div className="card">
            <div className="card-body">
                <h3 className="card-title">New Deposit</h3>
                <div className="row mb-3">
                    <Input label="Bank" col={6} />
                    <Input label="Aba" col={6} />
                    <Input label="Account Number" col={6} />
                    <Input label="Account Name" col={6} />
                    <Select label="Transaction Code" col={6} />
                </div>
                <div className="row">
                    <Button color="primary" title="Save" col={3} />
                    <Button color="secondary" title="Cancel" col={3} />
                </div>

            </div>
        </div>
    );
};

export default ACHPayment;
