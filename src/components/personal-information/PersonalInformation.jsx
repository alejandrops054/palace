/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/

import React from "react";
import { Input } from "../index";

const PersonalInformation = () => {
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">Personal Information</h5>
                <div className="row">
                    <Input type="text" label="Name" placeholder="" col={12} />
                    <Input type="text" label="Last Name" col={6} placeholder="" />
                    <Input type="text" label="First" col={6} placeholder="" />
                    <Input type="text" label="Co-Owner" col={6} placeholder="" />
                    <Input type="text" label="First" col={6} placeholder="" />
                    <Input type="text" label="Address" placeholder="" col={12} />
                    <Input type="text" label="City" col={6} placeholder="" />
                    <Input type="text" label="State" col={6} placeholder="" />
                    <Input type="text" label="Zip" col={6} placeholder="" />
                    <Input type="text" label="Country" col={6} placeholder="" />
                    <Input type="text" label="Phone 1" col={6} placeholder="" />
                    <Input type="text" label="Phone 1" col={6} placeholder="" />
                    <Input type="text" label="Email" placeholder="" col={12} />
                    <Input type="text" label="Int. Mail" placeholder="" col={12} />
                    <Input type="text" label="Psw" col={6} placeholder="" />
                    <Input type="text" label="Lang" col={6} placeholder="" />
                    <Input type="text" label="Minor Age" col={6} placeholder="" />
                    <Input type="text" label="No Web" col={6} placeholder="" />
                    <Input type="text" label="2nd Bill Ad" col={6} placeholder="" />
                    <Input type="text" label="Rep" col={6} placeholder="" />
                </div>
            </div>
        </div>
    );
};

export default PersonalInformation;
