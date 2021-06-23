/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/
import React from 'react';
//import TablaUsuarios from './TablaUsuarios'
import { Input, Select } from "../index";
const EliteProductCost = () => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <label htmlFor="" col={12}>Product</label>
                    <div className="col-md-6">
                        <Input type="text" col={12} label="Product Id" />
                    </div>
                    <div className="col-md-6">
                        <Select label="Description" option="UNLIMITED GOLD WITH ADDITIONAL" col={12} />
                    </div>
                </div>
                <div className="row">
                    <label htmlFor="" col={12}>Effective Dates</label>
                    <div className="col-md-6">
                        <Input type="text" col={12} label="Year" />
                        <Input type="date" col={12} label="Print Date" />
                    </div>
                    <div className="col-md-6">
                        <Input type="date" col={12} label="Date From" />
                        <Input type="date" col={12} label="Date To" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <Select label="Status" option="ALTA" col={12} />
                    </div>
                    <div className="col-md-6">
                        <Input type="text" col={12} label="Cost" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default EliteProductCost;

