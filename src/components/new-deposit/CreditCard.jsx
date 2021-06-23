/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/

import React from "react";
import { Input, Select, Checkbox } from "../index";

const CreditCard = () => {

    return (
        <div>
            <div className="card">
                <div className="card-body">
                    <div className="row">
                        <Select label="Depost Type" col={8} />
                        <Input label="Date" type="text" col={4} />
                        <Checkbox label="Admin Fee Include" col={12} />
                        <h5 className="card-title">...</h5>
                        <Input label="Code" type="text" col={4} />
                        <Input label="..." type="text" col={4} />
                        <Input label="Payment Type" type="text" col={4} />
                        <Select label="Transaction Type" col={12} />
                    </div>
                </div>
            </div>
            <div className="card">
                <div className="card-body">
                    <div className="row">
                        <Input label="Credit Card" type="text" col={6} />
                        <Input label="Credit Card #" type="text" col={6} />
                        <Input label="Expire" type="text" col={6} />
                        <Input label="Authorization #" type="text" col={6} />
                        <Input label="Credit Card Name" type="text" col={6} />
                        <Checkbox label="Debit Card" type="text" col={6} />
                        <Input label="Credit Granted" type="text" col={6} />
                    </div>
                </div>
            </div>
        </div>

    );
};

export default CreditCard;
