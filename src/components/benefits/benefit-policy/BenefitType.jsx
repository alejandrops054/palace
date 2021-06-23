/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/
import {React, useState} from 'react';
import {Input, Select, Checkbox} from "../../index";
import TextField from '@material-ui/core/TextField';

const BenefitType = () => {
    return(
        <>
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <Input
                        type="text"
                        label="Benefit Type"
                        placeholder=""
                        col={12}
                    />
                </div>
                <div className="col-md-6">
                    <Input
                        type="text"
                        label="Polity Type"
                        placeholder=""
                        col={12}
                    />
                </div>
            </div>
            <h5>Seach date</h5>
            <div className="row">
                <div className="col-md-6">
                    <Input label="From" type="date" placeholder="" col={12}/>
                </div>
                <div className="col-md-6">
                    <Input label="From To" type="date" placeholder="" col={12}/>
                </div>
                
            </div>
        </div>
        </>
    )
}

export default BenefitType