/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/
import {React, useState} from 'react';
import {Input, Select, Checkbox} from "../../../index";
import TextField from '@material-ui/core/TextField';
import ModalSelectBacnkAccount from '../ModalSelectBacnkAccount'

const PrintDailyExclude = () =>{

    return(
        <>
            <div className="container">
                <label htmlFor="" col={12}>Exclude</label>
                <div className="row">
                    <div className="col-md-2">
                        <Select
                            label="U Discount"
                            option="YES"
                            col={12}
                        />
                    </div>
                    <div className="col-md-2">
                        <Select
                            label="H Discount"
                            option="YES"
                            col={12}
                        />
                    </div>
                    <div className="col-md-2">
                        <Select
                            label="Cas out"
                            option="YES"
                            col={12}
                        />
                    </div>
                    <div className="col-md-3">
                        <Select
                            label="NOM-Member Accounts(A777)"
                            option="YES"
                            col={12}
                        />
                    </div>
                    <div className="col-md-3">
                        <Select
                            label="Clean Supense Tranction (ID code X)"
                            option="YES"
                            col={12}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default PrintDailyExclude
