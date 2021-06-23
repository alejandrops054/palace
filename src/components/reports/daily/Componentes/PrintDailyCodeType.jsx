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

const PrintDailyCodeType = () =>{

    return(
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                    <label htmlFor=""col={12}>Code Type</label>
                        <Select
                            label=""
                            option="Process Satus"
                            col={12}
                        />
                        <Input
                            type="Special code (A-Z)"
                            label="Where"
                            placeholder=""
                            col={12}
                        />
                        <Select
                            label="Print Report Code"
                            option="All Detail"
                            col={12}
                        />
                    </div>
                    <div className="col-md-4">
                        <br/><br/>
                        <label htmlFor=""col={12}>D <small>For debis code B.R.V and L</small></label>
                        <br/>
                        <label htmlFor=""col={12}>T <small>For tranfers code T. X and I</small></label>
                        <br/>
                        <label htmlFor=""col={12}>G <small>For Admin fee code G only</small></label>
                        <br/>
                        <label htmlFor=""col={12}>O <small>For Trans 3RD code only</small></label>
                        <br/>
                        <label htmlFor=""col={12}>S <small>Select A code</small></label>
                        <br/>
                        <label htmlFor=""col={12}>B <small>Both debist credits code B.R.V.E.D.M.I.K and S</small></label>
                    </div>
                    <div className="col-md-4">
                        <br/><br/>
                        <label htmlFor=""col={12}>C <small>For credis code E.D.M.P.S and Z</small></label>
                        <br/>
                        <label htmlFor=""col={12}>R <small>For refunds code R only</small></label>
                        <br/>
                        <label htmlFor=""col={12}>Q <small>For cancel voucher Q code V only</small></label>
                        <br/>
                        <label htmlFor=""col={12}>V <small>For cancel voucher - Mexico code V only</small></label>
                        <br/>
                        <label htmlFor=""col={12}>B <small>For all code</small></label>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PrintDailyCodeType