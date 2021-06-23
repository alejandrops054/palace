/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/

import React from "react";
import { Input } from "../index";

const AffiliationInformation = () => {
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">Affiliation Information</h5>
                <div className="row">
                    <Input type="text" label="Rel Applic#" col={6} placeholder="" />
                    <Input type="text" label="Interval#" col={6} placeholder="" />
                    <Input type="text" label="Season" col={6} placeholder="" />
                    <Input type="text" label="Unit" col={6} placeholder="" />
                    <Input type="text" label="Perv. Memb T" col={6} placeholder="" />
                    <Input type="text" label="Memb. Type" col={6} placeholder="" />
                    <Input type="text" label="Memb Level" col={6} placeholder="" />
                    <Input type="text" label="Wk52#" col={6} placeholder="" />
                    <Input type="text" label="SubPgm" placeholder="" col={12} />
                    <Input type="text" label="2E.Cta" col={6} placeholder="" />
                    <Input type="text" label="Ra" col={6} placeholder="" />
                </div>
            </div>
        </div>
    );
};

export default AffiliationInformation;
