/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/

import React from "react";
import { Label } from "../index";
import CreditCard from './CreditCard'
import DownPayments from './DownPayments'
import InfoCard from './InfoCard'

const NewDeposit = () => {

    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">New Deposit</h5>
                <div className="row">
                    <Label etiqueta="Company: 5" col={2} />
                    <Label etiqueta="Member Name: GURPREET S AULAKH" col={4} />
                    <Label etiqueta="Application: 4031348" col={3} />
                    <Label etiqueta="Portfolio: CIHC" col={3} />
                    <CreditCard />
                    <DownPayments />
                    <InfoCard />
                </div>
            </div>
        </div>
    );
};

export default NewDeposit;
