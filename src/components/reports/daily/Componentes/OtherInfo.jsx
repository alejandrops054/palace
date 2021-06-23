/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/
import {React, useState} from 'react';
import {Input, Select, Checkbox} from "../../../index";
import TextField from '@material-ui/core/TextField';

const OtherInfo = () =>{

    return(
        <>
            <div className="container">
                <div className="row">
                    <h5>Other info</h5>
                    <div className="col-md-6">
                        <Input
                            type="text"
                            label="Source"
                            placeholder=""
                            col={12}
                        />
                    </div>
                    <div className="col-md-6">
                        <Input
                            type="text"
                            label="User"
                            placeholder=""
                            col={12}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default OtherInfo
