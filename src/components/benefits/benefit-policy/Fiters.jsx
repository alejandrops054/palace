/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/
import {React, useState} from 'react';
import {Input, Select, Checkbox} from "../../index";
import SeachNav from "../../ui/search"
import TextField from '@material-ui/core/TextField';

const Fiters = () => {
    return(
        <>
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <Input
                        type="text"
                        label="Provision Type"
                        placeholder=""
                        col={12}
                    />
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <Input
                        type="text"
                        label="Location of Provision"
                        placeholder=""
                        col={12}
                    />
                </div>
                <br/>
            </div>
        </div>
    </>
    )
}

export default Fiters